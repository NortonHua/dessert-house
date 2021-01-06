package cn.edu.gench.model;

import com.baomidou.mybatisplus.annotation.TableName;
import cn.edu.gench.model.BaseModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @author generator@norton
 * @since 2020-12-07
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("client_user")
public class ClientUserDO extends BaseModel {


    private String openid;

    private String nickname;

    private Integer unifyUid;

    private String email;

    private String password;

    private String mobile;

    private String wxProfile;


}
