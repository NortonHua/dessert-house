package cn.edu.gench.controller.v1;


import cn.edu.gench.common.enumeration.OrderStatus;
import cn.edu.gench.common.mybatis.Page;
import cn.edu.gench.common.util.PageUtil;
import cn.edu.gench.common.util.TokenToUid;
import cn.edu.gench.dto.CommentDTO;
import cn.edu.gench.dto.OrderDTO;
import cn.edu.gench.dto.OrderIdInfo;
import cn.edu.gench.dto.OrderInfo;
import cn.edu.gench.model.WxOrderDO;
import cn.edu.gench.module.message.WsHandler;
import cn.edu.gench.service.WxOrderService;
import cn.edu.gench.vo.DeletedVO;
import cn.edu.gench.vo.PageResponseVO;
import cn.edu.gench.vo.UpdatedVO;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.google.gson.Gson;
import io.github.talelin.autoconfigure.exception.NotFoundException;
import io.github.talelin.core.annotation.GroupRequired;
import io.github.talelin.core.annotation.PermissionMeta;
import io.github.talelin.core.annotation.PermissionModule;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author generator@norton
 * @since 2020-12-13
 */
@RestController
@RequestMapping("/v1/wx-order")
@Api(value = "/wx-order", tags = {"订单相关API"})
@PermissionModule("订单")
public class WxOrderController {

    @Autowired
    private WxOrderService wxOrderService;

    @Autowired
    private WsHandler wsHandler;

    private Gson gson = new Gson();

    //public SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @PostMapping("")
    @ApiOperation("创建建订单")
    public OrderIdInfo create(@RequestBody OrderDTO orderDTO, HttpServletRequest request) {
        //获取uid
        Long uid = TokenToUid.tokenToUid(request);
        Long orderId = wxOrderService.createOrder(orderDTO, uid);
        OrderIdInfo info = new OrderIdInfo();
        info.setId(orderId);
        return info;
    }


    @PostMapping("/update/{id}")
    @ApiOperation("根据订单id更新订单状态")
    public UpdatedVO update(@PathVariable(name = "id") Long id, @RequestParam Integer status) {
        WxOrderDO wxOrderDO = new WxOrderDO();
        wxOrderDO.setId(id);
        wxOrderDO.setStatus(status);
        wxOrderService.updateById(wxOrderDO);
        return new UpdatedVO("更新成功！");
    }

    @GetMapping("/updatePaid/{oid}")
    @ApiOperation("更新订单状态为已支付")
    public UpdatedVO updateToPaid(@PathVariable(name = "oid") Long oid) {
        WxOrderDO wxOrderDO = wxOrderService.getById(oid);
        if (wxOrderDO == null) {
            throw new NotFoundException();
        }
        //wxOrderDO.setId(oid);
        wxOrderDO.setStatus(OrderStatus.PAID.value());
        wxOrderService.updateById(wxOrderDO);
        try {
            wsHandler.broadCast(wxOrderDO.getOrderNo());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new UpdatedVO("更新成功！");
    }

    @GetMapping("/detail/{id}")
    @ApiOperation("根据订单id获取订单详细信息")
    public OrderInfo getOrderDetail(@PathVariable(name = "id") Long id) {
        WxOrderDO wxOrderDO = wxOrderService.getBaseMapper().selectById(id);
        OrderInfo info = new OrderInfo();
        BeanUtils.copyProperties(wxOrderDO, info);
        return info;
    }

    @GetMapping("/getOrdersByStatus/{status}")
    @ApiOperation("根据status获取订单列表")
    public List<OrderInfo> getOrdersByStatus(@PathVariable(name = "status", required = false) Long status, HttpServletRequest request) {
        Long uid = TokenToUid.tokenToUid(request);
        QueryWrapper<WxOrderDO> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", uid);
        wrapper.orderByDesc("create_time");
        if (status != null && status != 0)
            wrapper.eq("status", status);

        List<OrderInfo> infos = new ArrayList<>();
        List<WxOrderDO> wxOrderDOS = wxOrderService.getBaseMapper().selectList(wrapper);
        for (WxOrderDO wxOrderDO : wxOrderDOS) {
            OrderInfo info = new OrderInfo();
            BeanUtils.copyProperties(wxOrderDO, info);
            infos.add(info);
        }
        return infos;
    }


    @GetMapping("/pageByStatus/{status}")
    @ApiOperation("根据status分页查询个人订单")
    public PageResponseVO<WxOrderDO> page(
            @PathVariable int status,
            @RequestParam(name = "start", defaultValue = "0")
                    Integer start,
            @RequestParam(name = "count", defaultValue = "10")
                    Integer count,
            HttpServletRequest request
    ) {

        int page = start / count;
        return wxOrderService.pageQueryByStatus(status, count, page, request);
    }

    @ApiOperation("查询待取餐订单")
    @GetMapping("/take-food")
    public List<WxOrderDO> takeFood(HttpServletRequest request) {
        Long uid = TokenToUid.tokenToUid(request);
        return wxOrderService.getTakeFood(uid);

    }

    @ApiOperation("修改订单状态为已完成")
    @GetMapping("/order-finish/{oid}")
    public void updateOrderToFinish(@PathVariable Long oid) {
        WxOrderDO orderDO = new WxOrderDO();
        orderDO.setId(oid);
        orderDO.setStatus(OrderStatus.FINISHED.value());
        wxOrderService.updateById(orderDO);
    }

    @ApiOperation("订单添加评论信息")
    @PostMapping("/add-comment")
    public void comment(@RequestBody CommentDTO dto) {
        WxOrderDO orderDO = new WxOrderDO();
        orderDO.setId(dto.getOid());
        orderDO.setComment(gson.toJson(dto));
        wxOrderService.getBaseMapper().updateById(orderDO);
    }


    @GetMapping("/page")
    @ApiOperation("分页查询所有订单")
    public PageResponseVO<WxOrderDO> page(@RequestParam(name = "count", required = false, defaultValue = "10")
                                          @Min(value = 1, message = "{page.count.min}")
                                          @Max(value = 30, message = "{page.count.max}") Integer count,
                                          @RequestParam(name = "page", required = false, defaultValue = "0")
                                          @Min(value = 0, message = "{page.number.min}") Integer page) {
        Page<WxOrderDO> pager = new Page<>(page, count);
        QueryWrapper<WxOrderDO> wrapper = new QueryWrapper<>();
        wrapper.orderByDesc("create_time");
        IPage<WxOrderDO> paging = wxOrderService.getBaseMapper().selectPage(pager, wrapper);
        return PageUtil.build(paging);
    }

    @GetMapping("search")
    @ApiOperation("根据日期、订单号分页查询")
    @PermissionMeta("查询订单")
    public PageResponseVO<WxOrderDO> search(
            @RequestParam(name = "count", required = false, defaultValue = "10")
            @Min(value = 1, message = "{page.count.min}")
            @Max(value = 30, message = "{page.count.max}") Integer count,
            @RequestParam(name = "page", required = false, defaultValue = "0")
            @Min(value = 0, message = "{page.number.min}") Integer page,
            @RequestParam(name = "keyword", required = false, defaultValue = "") String keyword,
            @RequestParam(name = "start", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") Date start,
            @RequestParam(name = "end", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") Date end
    ) {

        Page<WxOrderDO> pager = new Page<>(page, count);
        QueryWrapper<WxOrderDO> wrapper = new QueryWrapper<>();
        if (keyword != null)
            wrapper.like("order_no", "%" + keyword + "%");
        if (start != null && end != null)
            wrapper.between("create_time", start, end);
        wrapper.orderByDesc("create_time");
        IPage<WxOrderDO> paging = wxOrderService.getBaseMapper().selectPage(pager, wrapper);
        return PageUtil.build(paging);

    }

    @PutMapping("/status")
    @GroupRequired
    @PermissionMeta(value = "修改订单状态")
    @ApiOperation("修改订单状态")
    public UpdatedVO update(
            @RequestParam(name = "id") @Positive Integer id,
            @RequestParam(name = "status") @Min(value = 0) Integer status
    ) {
        wxOrderService.changeOrderStatus(id, status);
        return new UpdatedVO("更新成功！");
    }

    @DeleteMapping("/{id}")
    @PermissionMeta("删除订单")
    @ApiOperation("删除订单")
    @GroupRequired
    public DeletedVO delete(@PathVariable @Positive(message = "{id.positive}") Long id) {
        wxOrderService.getBaseMapper().deleteById(id);
        return new DeletedVO("删除成功");
    }


}
