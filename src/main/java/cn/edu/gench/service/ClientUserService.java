package cn.edu.gench.service;

import cn.edu.gench.model.ClientUserDO;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-07
 */
public interface ClientUserService extends IService<ClientUserDO> {

    ClientUserDO findByOpenid(String openid);

    void updateUserInfo(Map<String, Object> userMap,Long uid);
}
