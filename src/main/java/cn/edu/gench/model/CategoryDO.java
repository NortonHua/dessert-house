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
@TableName("category")
public class CategoryDO extends BaseModel {


    private String name;

    private String description;

    private Integer isRoot;

    private Integer parentId;

    private String img;

    private Integer online;

    private Integer level;


}
