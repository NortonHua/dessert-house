package cn.edu.gench.dto;

import cn.edu.gench.dto.user.AddressDTO;
import cn.edu.gench.model.CartItemDTO;
import lombok.Data;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.List;

@Data
@ToString
public class OrderDTO {

    private BigDecimal totalPrice;
    private List<CartItemDTO> skuInfoList;
    private AddressDTO address;
    private Integer totalCount;
    private String orderType;
    private String phone;
    private String remark;

    private String snapImg;
    private String snapTitle;

}
