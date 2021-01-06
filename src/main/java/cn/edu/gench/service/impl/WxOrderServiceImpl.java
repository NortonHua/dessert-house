package cn.edu.gench.service.impl;

import cn.edu.gench.common.enumeration.OrderStatus;
import cn.edu.gench.common.util.OrderUtil;
import cn.edu.gench.common.util.TokenToUid;
import cn.edu.gench.dto.*;
import cn.edu.gench.mapper.WxOrderMapper;
import cn.edu.gench.model.CartItemDTO;
import cn.edu.gench.model.WxOrderDO;
import cn.edu.gench.service.WxOrderService;
import cn.edu.gench.vo.PageResponseVO;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import io.github.talelin.autoconfigure.exception.ForbiddenException;
import io.github.talelin.autoconfigure.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import springfox.documentation.spring.web.json.Json;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.util.*;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-13
 */
@Service
public class WxOrderServiceImpl extends ServiceImpl<WxOrderMapper, WxOrderDO> implements WxOrderService {

    @Value("${missyou.order.pay-time-limit}")
    private Integer payTimeLimit;

    @Override
    public Long createOrder(OrderDTO orderDTO, Long uid) {
        Gson gson = new Gson();
        String orderNo = OrderUtil.makeOrderNo();
        WxOrderDO orderDO = new WxOrderDO();

        orderDO.setSnapAddress(gson.toJson(orderDTO.getAddress()));
        orderDO.setOrderNo(orderNo);
        orderDO.setUserId(Math.toIntExact(uid));

        String priceStr = String.valueOf(orderDTO.getTotalPrice());

        BigDecimal bigDecimal = new BigDecimal(priceStr);
        orderDO.setTotalPrice(bigDecimal);


        orderDO.setSnapItems(gson.toJson(orderDTO.getSkuInfoList()));

        String orderType = orderDTO.getOrderType();
        Integer orderTypeDB = orderType.equals("zq") ? 0 : 1;
        orderDO.setOrderType(orderTypeDB);

        orderDO.setStatus(OrderStatus.UNPAID.value());
        //orderDO.setUpdateTime(new Date());
        orderDO.setRemark(orderDTO.getRemark());
        orderDO.setTotalCount(orderDTO.getTotalCount());
        orderDO.setPhone(orderDTO.getPhone());
        orderDO.setSnapImg(orderDTO.getSnapImg());
        orderDO.setSnapTitle(orderDTO.getSnapTitle());

        Calendar now = Calendar.getInstance();
        Calendar now1= (Calendar) now.clone();
        now.add(Calendar.SECOND,
                this.payTimeLimit);
        Date time = now.getTime();
        orderDO.setExpiredTime(time);
        orderDO.setPlacedTime(now1.getTime());

        this.getBaseMapper().insert(orderDO);
        return orderDO.getId();
    }

    /**
     * 根据状态分页查询用户订单
     * @param status  订单状态
     * @param count   每页订单数量
     * @param page    当前页码
     * @param request
     * @return
     */
    @Override
    public PageResponseVO<WxOrderDO> pageQueryByStatus(int status, Integer count, int page, HttpServletRequest request) {
        Long uid = TokenToUid.tokenToUid(request);
        QueryWrapper<WxOrderDO> wrapper=new QueryWrapper<>();
        wrapper.eq("user_id",uid);
        wrapper.orderByDesc("create_time");
        if (status!=0){
            wrapper.eq("status",status);
        }

        PageHelper.startPage(page,count);
        List<WxOrderDO> list = this.getBaseMapper().selectList(wrapper);
        PageInfo<WxOrderDO> pageInfo=new PageInfo<>(list);

        PageResponseVO<WxOrderDO> responseVO=new PageResponseVO<>();
        responseVO.setTotal(pageInfo.getTotal());
        responseVO.setCount(count);
        responseVO.setTotalPage(pageInfo.getPages());
        responseVO.setItems(list);
        responseVO.setPage(page);

        return responseVO;
    }

    @Override
    public void updateOrderToCancel(Long oid) {
        WxOrderDO wxOrderDO = this.getBaseMapper().selectById(oid);

        if (wxOrderDO.getStatus().equals(OrderStatus.UNPAID.value())){
            WxOrderDO orderDO=new WxOrderDO();
            orderDO.setId(oid);
            orderDO.setStatus(OrderStatus.CANCELED.value());
            this.getBaseMapper().updateById(orderDO);
        }

    }

    @Override
    public List<WxOrderDO> getTakeFood(Long uid) {
        QueryWrapper<WxOrderDO> wrapper=new QueryWrapper<>();
        wrapper.eq("user_id",uid);
        wrapper.in("status",OrderStatus.PAID.value(),OrderStatus.DELIVERED.value());
        wrapper.eq("order_type",0);
        wrapper.orderByDesc("create_time");
        List<WxOrderDO> list = this.getBaseMapper().selectList(wrapper);
        return list;
    }

    @Override
    public void changeOrderStatus(Integer id, Integer status) {
        WxOrderDO order = this.getBaseMapper().selectById(id);
        if (order == null) {
            throw new NotFoundException(110000);
        }
        // 检查订单状态
        if (order.getStatus() != OrderStatus.PAID.value() && order.getStatus() != OrderStatus.DELIVERED.value()) {
            throw new ForbiddenException(110001);
        }
        if (order.getStatus() == OrderStatus.PAID.value()) {
            if (status != OrderStatus.DELIVERED.value()) {
                throw new ForbiddenException(110002);
            }
            this.getBaseMapper().changeOrderStatus(status, id);
        }
        if (order.getStatus() == OrderStatus.DELIVERED.value()) {
            if (status != OrderStatus.FINISHED.value()) {
                throw new ForbiddenException(110003);
            }
            this.getBaseMapper().changeOrderStatus(status, id);
        }
    }

    @Override
    public MonthCountInfo getThisMonthOrderCount() {
        return this.getBaseMapper().getThisMonthOrderCount();
    }

    @Override
    public MonthCountInfo getLastMonthOrderCount() {
        return this.getBaseMapper().getLastMonthOrderCount();
    }

    @Override
    public List<SaleCountInfo> getSaleCountByMonth() {
        Gson gson=new Gson();
        List<DataOrderSimpleInfo> orders=this.getBaseMapper().selectListByMonth();
        List<SaleCountInfo> res=new ArrayList<>();
        HashMap<String, SaleCountInfo> map=new HashMap();
        for (DataOrderSimpleInfo order : orders) {
            List<CartItemDTO> list= gson.fromJson(order.getItems(),new TypeToken<List<CartItemDTO>>(){}.getType());
            for (CartItemDTO cartItemDTO : list) {
                if (map.containsKey(cartItemDTO.getId()+order.getMonthString())){
                    SaleCountInfo info1 = map.get(cartItemDTO.getId() + order.getMonthString());
                    info1.setValue(info1.getValue()+cartItemDTO.getCount());
                    map.put(cartItemDTO.getId()+order.getMonthString(),info1);
                }else {
                    SaleCountInfo info=new SaleCountInfo();
                    info.setValue((long)cartItemDTO.getCount());
                    info.setType(cartItemDTO.getTitle());
                    info.setMark(order.getMonthString());
                    map.put(cartItemDTO.getId()+order.getMonthString(),info);
                }
            }
        }
        for (Map.Entry<String, SaleCountInfo> stringSaleCountInfoEntry : map.entrySet()) {
            res.add(stringSaleCountInfoEntry.getValue());
        }
        return res;
    }

    @Override
    public List<SalesInfo> getSalesInfo() {

        Gson gson=new Gson();
        List<DataOrderSimpleInfo> orders=this.getBaseMapper().selectListByMonth();
        List<SalesInfo> res=new ArrayList<>();
        HashMap<String, SalesInfo> map=new HashMap();
        for (DataOrderSimpleInfo order : orders) {
            List<CartItemDTO> list= gson.fromJson(order.getItems(),new TypeToken<List<CartItemDTO>>(){}.getType());
            for (CartItemDTO cartItemDTO : list) {
                if (map.containsKey(cartItemDTO.getId()+order.getMonthString())){
                    SalesInfo info1 = map.get(cartItemDTO.getId() + order.getMonthString());
                    info1.setValue(info1.getValue().add(cartItemDTO.getCartItemPrice()));
                    map.put(cartItemDTO.getId()+order.getMonthString(),info1);
                }else {
                    SalesInfo info=new SalesInfo();
                    info.setValue(cartItemDTO.getCartItemPrice());
                    info.setTitle(cartItemDTO.getTitle());
                    info.setMonth(order.getMonthString());
                    map.put(cartItemDTO.getId()+order.getMonthString(),info);
                }
            }
        }
        for (Map.Entry<String, SalesInfo> stringSaleCountInfoEntry : map.entrySet()) {
            res.add(stringSaleCountInfoEntry.getValue());
        }


        return res;
    }

    @Override
    public List<CategoryCountInfo> getCategoryCountInfo() {
        Gson gson=new Gson();
        //获取商品id到category的map
        List<PidCategory> pidCategoryList=this.getBaseMapper().getPidCategoryList();
        HashMap<Integer, String> pid_category_map = new HashMap<>();
        for (PidCategory pidCategory : pidCategoryList) {
            pid_category_map.put(pidCategory.getId(),pidCategory.getCategory());
        }

        //分类到CategoryCountInfo的映射
        HashMap<String,CategoryCountInfo> category_info_map = new HashMap<>();
        List<WxOrderDO> list = this.list();
        for (WxOrderDO order : list) {
            List<CartItemDTO> items= gson.fromJson(order.getSnapItems(),new TypeToken<List<CartItemDTO>>(){}.getType());
            for (CartItemDTO item : items) {
                HashSet set=new HashSet<String>();
                if (category_info_map.containsKey(pid_category_map.get(item.getId()))){
                    if (set.contains(pid_category_map.get(item.getId()))){
                        continue;
                    }else {
                        CategoryCountInfo info = category_info_map.get(pid_category_map.get(item.getId()));
                        info.setValue(info.getValue()+1);
                        set.add(pid_category_map.get(item.getId()));
                        category_info_map.put(pid_category_map.get(item.getId()),info);
                    }

                }else {
                    CategoryCountInfo info=new CategoryCountInfo();
                    info.setCategory(pid_category_map.get(item.getId()));
                    info.setValue(1L);
                    category_info_map.put(pid_category_map.get(item.getId()),info);
                }
            }
        }

        List<CategoryCountInfo> res=new ArrayList<>();

        for (Map.Entry<String, CategoryCountInfo> stringSaleCountInfoEntry : category_info_map.entrySet()) {
            res.add(stringSaleCountInfoEntry.getValue());
        }

        return res;
    }
}
