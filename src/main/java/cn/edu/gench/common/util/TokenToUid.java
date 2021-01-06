package cn.edu.gench.common.util;

import com.auth0.jwt.interfaces.Claim;
import io.github.talelin.autoconfigure.exception.NotFoundException;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.Optional;

public class TokenToUid {

    public static Long tokenToUid(HttpServletRequest request) {
        //获取http中的token
        String bearerToken=request.getHeader("Authorization");
        if (StringUtils.isEmpty(bearerToken) || !bearerToken.startsWith("Bearer")){
            throw new NotFoundException("未认证");
        }

        String[] tokens=bearerToken.split(" ");
        if (!(tokens.length==2)){
            throw new NotFoundException("未认证");
        }

        String token=tokens[1];
        //获取uid
        //Long uid= TokenToUid.tokenToUid(token);
        Optional<Map<String, Claim>> optionalMap = JwtToken.getClaims(token);
        Map<String, Claim> map = optionalMap.orElseThrow(() -> new NotFoundException(11110));
        Long uid = map.get("uid").asLong();
        return uid;
    }
}
