package cn.edu.gench.service.impl;

import cn.edu.gench.model.ClientUserDO;
import cn.edu.gench.mapper.ClientUserMapper;
import cn.edu.gench.service.ClientUserService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-07
 */
@Service
public class ClientUserServiceImpl extends ServiceImpl<ClientUserMapper, ClientUserDO> implements ClientUserService {

    Gson gson=new Gson();
    @Override
    public ClientUserDO findByOpenid(String openid) {
        QueryWrapper<ClientUserDO> wrapper=new QueryWrapper<>();
        wrapper.eq("openid",openid);
        return this.baseMapper.selectOne(wrapper);
    }

    @Override
    public void updateUserInfo(Map<String, Object> user,Long uid) {
        ClientUserDO clientUserDO=this.getById(uid);
        clientUserDO.setNickname(user.get("nickName").toString());
        clientUserDO.setWxProfile(gson.toJson(user));
        this.getBaseMapper().updateById(clientUserDO);
    }
}
