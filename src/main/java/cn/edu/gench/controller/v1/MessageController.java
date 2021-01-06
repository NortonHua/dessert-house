package cn.edu.gench.controller.v1;

import cn.edu.gench.module.message.WsHandler;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/message")
@Api(tags = "WebSocket模块测试API")
public class MessageController {

    @Autowired
    private WsHandler wsHandler;

    @PostMapping("/test")
    public void sendMessageTest(){
        try {
            wsHandler.broadCast("消息发送测试！");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
