package cn.edu.gench.controller.v1;


import cn.edu.gench.common.mybatis.Page;
import cn.edu.gench.common.util.PageUtil;
import cn.edu.gench.common.util.TokenToUid;
import cn.edu.gench.model.ClientUserDO;
import cn.edu.gench.service.ClientUserService;
import cn.edu.gench.vo.PageResponseVO;
import cn.edu.gench.vo.UpdatedVO;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.util.Map;

/**
 * @author generator@norton
 * @since 2020-12-07
 */
@RestController
@RequestMapping("/v1/client-user")
@Api(tags = {"小程序端用户API"})
public class ClientUserController {

    @Autowired
    private ClientUserService clientUserService;


    @GetMapping("/{id}")
    @ApiOperation("查询指定用户信息")
    public ClientUserDO get(@PathVariable(value = "id") @Positive(message = "{id.positive}") Long id) {
        return clientUserService.getById(id);
    }

    @GetMapping("/page")
    @ApiOperation("分页查询")
    public PageResponseVO<ClientUserDO> page(
            @RequestParam(name = "count", required = false, defaultValue = "10")
            @Min(value = 1, message = "{page.count.min}")
            @Max(value = 30, message = "{page.count.max}") Long count,
            @RequestParam(name = "page", required = false, defaultValue = "0")
            @Min(value = 0, message = "{page.number.min}") Long page
    ) {
        Page<ClientUserDO> pager = new Page<>(page, count);
        IPage<ClientUserDO> paging = clientUserService.getBaseMapper().selectPage(pager, null);
        return PageUtil.build(paging);
    }

    @GetMapping("/search")
    @ApiOperation("根据关键字分页查询")
    public PageResponseVO<ClientUserDO> search(
            @RequestParam(name = "count", required = false, defaultValue = "10")
            @Min(value = 1, message = "{page.count.min}")
            @Max(value = 30, message = "{page.count.max}") Long count,
            @RequestParam(name = "page", required = false, defaultValue = "0")
            @Min(value = 0, message = "{page.number.min}") Long page,
            @RequestParam String keyword
    ) {
        Page<ClientUserDO> pager = new Page<>(page, count);
        QueryWrapper<ClientUserDO> wrapper = new QueryWrapper<>();
        wrapper.like("nickname", "%" + keyword + "%");
        IPage<ClientUserDO> paging = clientUserService.getBaseMapper().selectPage(pager, wrapper);
        return PageUtil.build(paging);
    }

    @PostMapping("/wx_info")
    @ApiOperation("更新小程序端用户信息")
    public UpdatedVO updateUserInfo(@RequestBody Map<String, Object> user, HttpServletRequest request) {
        //获取http中的token
        Long uid = TokenToUid.tokenToUid(request);
        clientUserService.updateUserInfo(user, uid);
        return new UpdatedVO();
    }

}
