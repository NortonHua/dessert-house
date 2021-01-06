package cn.edu.gench.common.rocketmq;

import cn.edu.gench.common.enumeration.OrderStatus;
import cn.edu.gench.service.WxOrderService;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.common.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

//@Component
public class ConsumerSchedule implements CommandLineRunner {

    @Autowired
    private WxOrderService wxOrderService;

    @Value("${rocketmq.consumer.consumer-group}")
    private String consumerGroup;

    @Value("${rocketmq.namesrv-addr}")
    private String namesrvAddr;

    public void messageListener() throws MQClientException {
        DefaultMQPushConsumer consumer=new DefaultMQPushConsumer(consumerGroup);
        consumer.setNamesrvAddr(namesrvAddr);
        consumer.subscribe("OrderExpired","*");
        consumer.setConsumeMessageBatchMaxSize(1);

        consumer.registerMessageListener((MessageListenerConcurrently) (messages, context)->{
            for (Message message : messages){
                System.out.println("消息："+new String(message.getBody()));
                String oidStr=new String(message.getBody());
                wxOrderService.updateOrderToCancel(Long.valueOf(oidStr));
            }
            return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
        });

        consumer.start();
    }

    @Override
    public void run(String... args) throws Exception {
        this.messageListener();
    }
}
