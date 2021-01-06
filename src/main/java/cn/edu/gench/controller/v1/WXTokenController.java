package cn.edu.gench.controller.v1;

import cn.edu.gench.dto.TokenDTO;
import cn.edu.gench.dto.TokenGetDTO;
import cn.edu.gench.service.WxAuthenticationService;
import io.github.talelin.core.annotation.PermissionModule;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/v1/wx-token")
@Api(value = "/wx-token",tags = {"微信端token"})
public class WXTokenController {

    @Autowired
    private WxAuthenticationService wxAuthenticationService;
    @PostMapping("")
    @ApiOperation("微信端获取token接口")
    public Map<String,String> getToken(@RequestBody @Validated TokenGetDTO userData){
        Map<String, String> map=new HashMap<>();
        String token=wxAuthenticationService.code2Session(userData.getAccount());
        map.put("token",token);
        return map;
    }

    @PostMapping("/verify")
    @ApiOperation("微信端token验证")
    public Map<String, Boolean> verify(@RequestBody TokenDTO token){
        Map<String, Boolean> map=new HashMap<>();
        Boolean valid=wxAuthenticationService.verifyToken(token.getToken());
        map.put("is_valid",valid);
        return map;
    }

}
