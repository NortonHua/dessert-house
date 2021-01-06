package cn.edu.gench.model;

import java.math.BigDecimal;
import java.util.Date;

import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import cn.edu.gench.model.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @author generator@norton
 * @since 2020-12-13
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("wx_order")
public class WxOrderDO extends BaseModel {


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

    /**
     * 过期时间
     */
    private Date expiredTime;

    /**
     * 下单时间
     */
    private Date placedTime;

    /**
     * 用户评论
     */
    private String comment;



}
