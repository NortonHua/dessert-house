package cn.edu.gench.dto;

import lombok.Data;

import java.util.List;

@Data
public class SpecKeyInfo {
    private Integer id;
    private String name;
    private String unit;
    private List<SpecValueInfo> childsCurGoods;
}
