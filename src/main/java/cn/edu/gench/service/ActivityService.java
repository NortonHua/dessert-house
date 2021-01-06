package cn.edu.gench.service;

import cn.edu.gench.model.ActivityDO;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-06
 */
public interface ActivityService extends IService<ActivityDO> {

    void create(ActivityDO dto);

}
