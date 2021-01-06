package cn.edu.gench.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class SalesInfo {
    private String title;
    private String month;
    private BigDecimal value;
}
