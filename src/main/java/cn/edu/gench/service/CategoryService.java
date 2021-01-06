package cn.edu.gench.service;

import cn.edu.gench.model.CategoryDO;
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
public interface CategoryService extends IService<CategoryDO> {

    List<CategoryDO> findAll();

    void deleteCategory(Long id);
}
