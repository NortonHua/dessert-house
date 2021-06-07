package cn.edu.gench.controller.v1;


import cn.edu.gench.dto.CategoryCountInfo;
import cn.edu.gench.dto.MonthCountInfo;
import cn.edu.gench.dto.SaleCountInfo;
import cn.edu.gench.dto.SalesInfo;
import cn.edu.gench.module.message.WsHandler;
import cn.edu.gench.service.WxOrderService;
import com.google.gson.Gson;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author generator@norton
 * @since 2020-12-13
 */
@RestController
@RequestMapping("/v1/analysis")
@Api(value = "/analysis", tags = {"数据分析相关API大妙啊"})
public class DataAnalysisController {

    @Autowired
    private WxOrderService wxOrderService;

    @Autowired
    private WsHandler wsHandler;

    private Gson gson = new Gson();

    //public SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @GetMapping("/sales-comparision")
    @ApiOperation("各商品每月销售额对比asfaf")
    public List<SalesInfo> getLastThreeMonthSales() {
        System.out.println("nihaoa");
        return wxOrderService.getSalesInfo();
    }

    @GetMapping("/count-comparision")
    @ApiOperation("各商品每月销售量对比顶顶顶")
    public List<SaleCountInfo> getLastThreeMonthCount() {
        
        return wxOrderService.getSaleCountByMonth();
    }

    @GetMapping("/this-month-orders")
    @ApiOperation("本月新增订单")
    public MonthCountInfo getThisMonthOrderCount() {
        return wxOrderService.getThisMonthOrderCount();
    }

    @GetMapping("/last-month-orders")
    @ApiOperation("上月月新增订单对方飒飒的")
    public MonthCountInfo getLastMonthOrderCount() {
        return wxOrderService.getLastMonthOrderCount();
    }


    @GetMapping("/category-orders")
    @ApiOperation("各品类订单数量")
    public List<CategoryCountInfo> getEveryCategoryOrderCount() {
        return wxOrderService.getCategoryCountInfo();
    }

    @GetMapping("/trend")
    @ApiOperation("各品类趋势分析")
    public void getEveryCategoryTrend() {

    }


}
