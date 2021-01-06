package cn.edu.gench.controller.v1;


import cn.edu.gench.common.mybatis.Page;
import cn.edu.gench.common.util.PageUtil;
import cn.edu.gench.service.CategoryService;
import cn.edu.gench.vo.CreatedVO;
import cn.edu.gench.vo.DeletedVO;
import cn.edu.gench.vo.PageResponseVO;
import cn.edu.gench.vo.UpdatedVO;
import com.baomidou.mybatisplus.core.metadata.IPage;
import io.github.talelin.core.annotation.GroupRequired;
import io.github.talelin.core.annotation.PermissionMeta;
import io.github.talelin.core.annotation.PermissionModule;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import cn.edu.gench.model.CategoryDO;


import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.Positive;

import java.util.List;

/**
* @author generator@norton
* @since 2020-12-06
*/
@RestController
@RequestMapping("/v1/category")
@Api(value = "category",tags = {"分类相关api"})
@PermissionModule("分类")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("")
    @PermissionMeta("创建分类")
    @ApiOperation("创建分类")
    @GroupRequired
    public CreatedVO create(@RequestBody CategoryDO dto) {
        CategoryDO categoryDO=new CategoryDO();
        BeanUtils.copyProperties(dto,categoryDO);
        categoryService.save(categoryDO);
        return new CreatedVO("新建成功！");
    }

    @PutMapping("/{id}")
    @ApiOperation("更新分类")
    @PermissionMeta("更新分类")
    public UpdatedVO update(@PathVariable @Positive(message = "{id.positive}") Long id,
                            @RequestBody CategoryDO dto) {
        CategoryDO categoryDO=new CategoryDO();
        categoryDO.setId(id);
        BeanUtils.copyProperties(dto,categoryDO);
        categoryService.updateById(categoryDO);
        return new UpdatedVO("更新成功！");
    }

    @DeleteMapping("/{id}")
    @PermissionMeta("删除分类")
    @ApiOperation("删除分类")
    @GroupRequired
    public DeletedVO delete(@PathVariable @Positive(message = "{id.positive}") Long id) {
        categoryService.deleteCategory(id);
        return new DeletedVO("删除成功！");
    }

    @GetMapping("/{id}")
    @ApiOperation("获取指定分类信息")
    public CategoryDO get(@PathVariable(value = "id") @Positive(message = "{id.positive}") Long id) {

        return categoryService.getById(id);
    }

    @GetMapping("/page")
    @ApiOperation("分页查询")
    public PageResponseVO<CategoryDO> page(
            @RequestParam(name = "count", required = false, defaultValue = "10")
            @Min(value = 1, message = "{page.count.min}")
            @Max(value = 30, message = "{page.count.max}") Long count,
            @RequestParam(name = "page", required = false, defaultValue = "0")
            @Min(value = 0, message = "{page.number.min}") Long page
    ) {
        Page<CategoryDO> pager=new Page<>(page,count);
        IPage<CategoryDO> paging=categoryService.getBaseMapper().selectPage(pager,null);

        return PageUtil.build(paging);
    }

    @GetMapping("/categories")
    @ApiOperation("获取所有分类信息")
    public List<CategoryDO> getCategories(){
        List<CategoryDO> list = categoryService.findAll();
        return list;
    }

}
