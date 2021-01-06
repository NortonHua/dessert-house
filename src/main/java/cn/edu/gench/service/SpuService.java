package cn.edu.gench.service;

import cn.edu.gench.dto.SpuDetailInfo;
import cn.edu.gench.model.SpuDO;
import cn.edu.gench.vo.PageResponseVO;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-06
 */
public interface SpuService extends IService<SpuDO> {

    List<SpuDO> getByCategoryId(Integer id);

    SpuDetailInfo getDetailById(Integer id);

    PageResponseVO<SpuDO> searchByKeyword(String q, Integer count, int page);
}
