package cn.edu.gench.controller.v1;


import cn.edu.gench.common.mybatis.Page;
import cn.edu.gench.common.util.PageUtil;
import cn.edu.gench.model.CategoryDO;
import cn.edu.gench.service.ActivityService;
import com.baomidou.mybatisplus.core.metadata.IPage;
import io.github.talelin.autoconfigure.exception.NotFoundException;
import io.github.talelin.core.annotation.PermissionMeta;
import io.github.talelin.core.annotation.PermissionModule;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import cn.edu.gench.model.ActivityDO;
import cn.edu.gench.vo.CreatedVO;
import cn.edu.gench.vo.DeletedVO;
import cn.edu.gench.vo.PageResponseVO;
import cn.edu.gench.vo.UpdatedVO;

import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.Positive;

import java.util.List;

/**
* @author generator@norton
* @since 2020-12-06
*/
@RestController
@RequestMapping("/v1/activity")
@Api(value = "activity",tags = {"活动相关api"})
@PermissionModule("活动")
@Validated
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("")
    @PermissionMeta("创建活动")
    @ApiOperation("创建活动")
    public CreatedVO create(@RequestBody @Validated ActivityDO dto) {
        activityService.create(dto);
        return new CreatedVO("新建完成！");
    }

    @PutMapping("/{id}")
    @PermissionMeta("更新活动")
    @ApiOperation("更新活动")
    public UpdatedVO update(@PathVariable @Positive(message = "{id.positive}") Integer id,@RequestBody ActivityDO dto) {
        ActivityDO activity=activityService.getById(id);
        if (activity==null){
            throw new NotFoundException(90000);
        }
        BeanUtils.copyProperties(dto,activity);
        activityService.updateById(activity);
        return new UpdatedVO("更新成功！");
    }

    @DeleteMapping("/{id}")
    @ApiOperation("删除活动")
    @PermissionMeta("删除活动")
    public DeletedVO delete(@PathVariable @Positive(message = "{id.positive}") Long id) {
        ActivityDO activityDO = activityService.getById(id);
        if (activityDO==null){
            throw new NotFoundException(90000);
        }
        activityService.getBaseMapper().deleteById(id);
        return new DeletedVO("删除成功！");
    }

    @GetMapping("/{id}")
    @PermissionMeta("查询活动")
    @ApiOperation("查询指定id活动信息")
    public ActivityDO get(@PathVariable(value = "id") @Positive(message = "{id.positive}") Long id) {
        return activityService.getById(id);
    }

    @GetMapping("/page")
    @ApiOperation("分页查询")
    public PageResponseVO<ActivityDO> page(
            @RequestParam(name = "count", required = false, defaultValue = "10")
            @Min(value = 1, message = "{page.count.min}")
            @Max(value = 30, message = "{page.count.max}") Long count,
            @RequestParam(name = "page", required = false, defaultValue = "0")
            @Min(value = 0, message = "{page.number.min}") Long page
    ) {

        Page<ActivityDO> pager=new Page<>(page,count);
        IPage<ActivityDO> paging=activityService.getBaseMapper().selectPage(pager,null);

        return PageUtil.build(paging);
    }

    @GetMapping("/activities")
    @ApiOperation("获取所有活动信息")
    public List<ActivityDO> activities(){
        return activityService.list();
    }

}
