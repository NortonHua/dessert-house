package cn.edu.gench.mapper;

import cn.edu.gench.dto.SpuDetailInfo;
import cn.edu.gench.model.SpuDO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-06
 */
public interface SpuMapper extends BaseMapper<SpuDO> {

    SpuDetailInfo getDetailById(Integer id);

}
