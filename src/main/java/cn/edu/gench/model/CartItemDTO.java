package cn.edu.gench.model;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CartItemDTO {
    private Integer id;

    private Integer count;

    private String title;

    private BigDecimal cartItemPrice;

    private String img;
}
