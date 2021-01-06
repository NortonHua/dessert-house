package cn.edu.gench.dto;

import lombok.Data;

import java.util.List;

@Data
public class SpuDetailInfo {
    private Integer id;
    private String title;

    private String subtitle;

    private Integer categoryId;

    private Integer online;

    /**
     * 文本型价格，有时候SPU需要展示的是一个范围，或者自定义平均价格
     */
    private String price;

    private String img;

    private String discountPrice;

    private String description;

    /**
     * 是否有属性，默认为null，有为1
     */
    private String property;

    private List<SpecKeyInfo> properties;
}
