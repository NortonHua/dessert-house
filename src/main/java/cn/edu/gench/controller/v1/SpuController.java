package cn.edu.gench.controller.v1;


import cn.edu.gench.common.mybatis.Page;
import cn.edu.gench.common.util.PageUtil;
import cn.edu.gench.dto.SpuDetailInfo;
import cn.edu.gench.service.SpuService;
import cn.edu.gench.vo.CreatedVO;
import cn.edu.gench.vo.DeletedVO;
import cn.edu.gench.vo.PageResponseVO;
import cn.edu.gench.vo.UpdatedVO;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import io.github.talelin.autoconfigure.exception.NotFoundException;
import io.github.talelin.core.annotation.GroupRequired;
import io.github.talelin.core.annotation.PermissionMeta;
import io.github.talelin.core.annotation.PermissionModule;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import cn.edu.gench.model.SpuDO;


import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.Positive;

import java.util.List;

/**
 * @author generator@norton
 * @since 2020-12-06
 */
@RestController
@RequestMapping("/v1/spu")
@Api(value = "/spu", tags = {"商品相关api"})
@PermissionModule("商品")
public class SpuController {

    @Autowired
    private SpuService spuService;


    @PostMapping("")
    @PermissionMeta("创建商品")
    @GroupRequired
    @ApiOperation("创建商品")
    public CreatedVO create(@RequestBody SpuDO dto) {
        this.spuService.save(dto);
        return new CreatedVO("新增成功！");
    }

    @PutMapping("/{id}")
    @ApiOperation("更新商品信息")
    @PermissionMeta("更新商品")
    @GroupRequired
    public UpdatedVO update(@PathVariable @Positive(message = "{id.positive}") Long id,
                            @RequestBody SpuDO dto) {
        SpuDO spuDO = spuService.getBaseMapper().selectById(id);
        if (spuDO==null)
            throw new NotFoundException("不存在的商品！");
        BeanUtils.copyProperties(dto,spuDO);
        spuService.updateById(spuDO);
        return new UpdatedVO("更新成功！");
    }

    @DeleteMapping("/{id}")
    @PermissionMeta("删除商品")
    @ApiOperation("删除商品")
    @GroupRequired
    public DeletedVO delete(@PathVariable @Positive(message = "{id.positive}") Long id) {
        spuService.getBaseMapper().deleteById(id);
        return new DeletedVO("删除成功");
    }

    @GetMapping("/{id}")
    @ApiOperation("获取指定商品信息")
    public SpuDO get(@PathVariable(value = "id") @Positive(message = "{id.positive}") Long id) {
        SpuDO spuDO = spuService.getBaseMapper().selectById(id);
        return spuDO;
    }

    @GetMapping("/page")
    @ApiOperation("分页查询")
    public PageResponseVO<SpuDO> page(
            @RequestParam(name = "count", required = false, defaultValue = "10")
            @Min(value = 1, message = "{page.count.min}")
            @Max(value = 30, message = "{page.count.max}") Long count,
            @RequestParam(name = "page", required = false, defaultValue = "0")
            @Min(value = 0, message = "{page.number.min}") Long page
    ) {
        Page<SpuDO> pager=new Page<>(page,count);
        IPage<SpuDO> paging=spuService.getBaseMapper().selectPage(pager,null);
        return PageUtil.build(paging);
    }

    @ApiOperation("根据分类id查询商品信息")
    @GetMapping("/getByCategoryId")
    public List<SpuDO> getByCategoryId(@RequestParam Integer id) {

        List<SpuDO> res = spuService.getByCategoryId(id);
        return res;
    }

    @ApiOperation("根据商品id查询详细信息")
    @GetMapping("/getDetailById")
    public SpuDetailInfo getDetailById(@RequestParam Integer id) {
        return spuService.getDetailById(id);
    }

    @ApiOperation("模糊查询")
    @GetMapping("/search")
    public PageResponseVO<SpuDO> search(@RequestParam String q,
                                        @RequestParam(name = "start", defaultValue = "0")
                                                Integer start,
                                        @RequestParam(name = "count", defaultValue = "10")
                                                    Integer count) {

        int page=start/count;

        return spuService.searchByKeyword(q,count,page);
    }

    @GetMapping("/list")
    //@LoginRequired
    @ApiOperation("查询所有")
    public List<SpuDO> getList() {
        return spuService.list();
    }

}
