package cn.edu.gench.service.impl;

import cn.edu.gench.model.CategoryDO;
import cn.edu.gench.mapper.CategoryMapper;
import cn.edu.gench.service.CategoryService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.github.talelin.autoconfigure.exception.NotFoundException;
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
public class CategoryServiceImpl extends ServiceImpl<CategoryMapper, CategoryDO> implements CategoryService {

    @Override
    public List<CategoryDO> findAll() {
        QueryWrapper<CategoryDO> wrapper=new QueryWrapper<>();
        wrapper.eq("online",1);
        return this.getBaseMapper().selectList(wrapper);
    }

    @Override
    public void deleteCategory(Long id) {
        CategoryDO categoryDO = this.getById(id);
        if (categoryDO==null){
            throw new NotFoundException(40000);
        }
        this.getBaseMapper().deleteById(id);
    }
}
