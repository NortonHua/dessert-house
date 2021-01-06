package cn.edu.gench.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.Date;

@Data
@ToString
public class OrderInfo {

    private Long id;
    private String orderNo;

    /**
     * user表外键
     */
    private Integer userId;

    /**
     * 订单类型，堂食0，外卖1
     */
    private Integer orderType;

    private BigDecimal totalPrice;

    private Integer totalCount;

    private String snapImg;

    private String snapTitle;

    /**
     * 购买商品明细，json格式
     */
    private String snapItems;

    /**
     * 收货地址
     */
    private String snapAddress;

    /**
     * 微信支付预支付订单号
     */
    private String prepayId;

    private BigDecimal finalTotalPrice;

    /**
     * 订单状态
     */
    private Integer status;

    /**
     * 收货人姓名
     */
    private String remark;

    /**
     * 联系电话
     */
    private String phone;

    private Date placedTime;
    private Date expiredTime;

    private String comment;
}
