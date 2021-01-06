package cn.edu.gench.service;

import cn.edu.gench.dto.*;
import cn.edu.gench.model.WxOrderDO;
import cn.edu.gench.vo.PageResponseVO;
import com.baomidou.mybatisplus.extension.service.IService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-13
 */
public interface WxOrderService extends IService<WxOrderDO> {

    Long createOrder(OrderDTO orderDTO, Long uid);

    PageResponseVO<WxOrderDO> pageQueryByStatus(int status, Integer count, int page, HttpServletRequest request);

    void updateOrderToCancel(Long oid);

    List<WxOrderDO> getTakeFood(Long uid);

    void changeOrderStatus(Integer id, Integer status);

    MonthCountInfo getThisMonthOrderCount();

    MonthCountInfo getLastMonthOrderCount();


    List<SaleCountInfo> getSaleCountByMonth();

    List<SalesInfo> getSalesInfo();

    List<CategoryCountInfo> getCategoryCountInfo();
}
