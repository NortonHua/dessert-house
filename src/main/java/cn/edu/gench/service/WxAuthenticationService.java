package cn.edu.gench.service;

import cn.edu.gench.common.util.JwtToken;
import cn.edu.gench.model.ClientUserDO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.talelin.autoconfigure.exception.ParameterException;
import io.github.talelin.core.token.DoubleJWT;
import io.github.talelin.core.token.SingleJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.validation.executable.ValidateOnExecution;
import java.text.MessageFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class WxAuthenticationService {

    @Autowired
    private ObjectMapper mapper;
    @Autowired
    private ClientUserService clientUserService;

    @Value("${wx.code2session}")
    private String code2SessionUrl;
    @Value("${wx.appid}")
    private String appid;
    @Value("${wx.appsecret}")
    private String appsecret;


    public String code2Session(String code){
        String url= MessageFormat.format(this.code2SessionUrl,this.appid,this.appsecret,code);
        RestTemplate restTemplate=new RestTemplate();
        Map<String, Object> session=new HashMap<>();
        String sessionText=restTemplate.getForObject(url,String.class);
        try {
            session=mapper.readValue(sessionText,Map.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return this.registerUser(session);
    }

    private String registerUser(Map<String, Object> session) {
        String openid= (String) session.get("openid");
        if (openid==null){
            throw new ParameterException(20004);
        }
        ClientUserDO wxUser = clientUserService.findByOpenid(openid);
        if (wxUser!=null){
            return JwtToken.makeToken(wxUser.getId());
        }
        ClientUserDO userDO=new ClientUserDO();
        userDO.setOpenid(openid);
        userDO.setCreateTime(new Date());
        userDO.setUpdateTime(new Date());
        clientUserService.save(userDO);
        wxUser=clientUserService.findByOpenid(openid);
        return JwtToken.makeToken(wxUser.getId());
    }

    public Boolean verifyToken(String token) {
        return JwtToken.verifyToken(token);
    }
}
