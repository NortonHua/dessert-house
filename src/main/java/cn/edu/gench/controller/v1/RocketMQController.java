package cn.edu.gench.controller.v1;

import cn.edu.gench.common.rocketmq.ProducerSchedule;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/mq")
@Api(tags = {"RocketMQ相关api"})
@Slf4j
public class RocketMQController {

    @Autowired
    private ProducerSchedule producerSchedule;

    @GetMapping("/push/{oid}")
    @ApiOperation("发送订单延迟支付消息")
    public void pushMessageToMQ(@PathVariable Long oid) throws Exception {

        producerSchedule.send("OrderExpired", oid.toString());
    }
}
