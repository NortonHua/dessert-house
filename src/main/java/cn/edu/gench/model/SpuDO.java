package cn.edu.gench.model;

import com.baomidou.mybatisplus.annotation.TableName;
import cn.edu.gench.model.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @author generator@norton
 * @since 2020-12-06
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("spu")
public class SpuDO extends BaseModel {


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


}
