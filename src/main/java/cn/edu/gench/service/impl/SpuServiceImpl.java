package cn.edu.gench.service.impl;

import cn.edu.gench.dto.SpuDetailInfo;
import cn.edu.gench.model.SpuDO;
import cn.edu.gench.mapper.SpuMapper;
import cn.edu.gench.service.SpuService;
import cn.edu.gench.vo.PageResponseVO;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-06
 */
@Service
public class SpuServiceImpl extends ServiceImpl<SpuMapper, SpuDO> implements SpuService {

    @Override
    public List<SpuDO> getByCategoryId(Integer id) {

        QueryWrapper<SpuDO> wrapper=new QueryWrapper();
        wrapper.eq("category_id",id);
        wrapper.eq("online",1);
        return this.getBaseMapper().selectList(wrapper);
    }

    @Override
    public SpuDetailInfo getDetailById(Integer id) {
        return this.getBaseMapper().getDetailById(id);
    }

    @Override
    public PageResponseVO<SpuDO> searchByKeyword(String q, Integer count, int page) {
        QueryWrapper<SpuDO> queryWrapper=new QueryWrapper<>();
        queryWrapper.like("title","%"+q+"%").or().like("description","%"+q+"%");
        PageHelper.startPage(page,count);
        List<SpuDO> list = this.getBaseMapper().selectList(queryWrapper);
        PageInfo<SpuDO> pageInfo=new PageInfo<>(list);
        PageResponseVO<SpuDO> responseVO=new PageResponseVO<>();
        responseVO.setTotal(pageInfo.getTotal());
        responseVO.setCount(count);
        responseVO.setTotalPage(pageInfo.getPages());
        responseVO.setItems(list);
        responseVO.setPage(page);

        return responseVO;
    }
}
