package cn.edu.gench.service.impl;

import cn.edu.gench.model.ActivityDO;
import cn.edu.gench.mapper.ActivityMapper;
import cn.edu.gench.service.ActivityService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-06
 */
@Service
public class ActivityServiceImpl extends ServiceImpl<ActivityMapper, ActivityDO> implements ActivityService {

    @Override
    public void create(ActivityDO dto) {
        ActivityDO activity=new ActivityDO();
        BeanUtils.copyProperties(dto,activity);
        this.save(activity);
    }
}
