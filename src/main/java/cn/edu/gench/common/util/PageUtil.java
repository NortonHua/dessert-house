package cn.edu.gench.common.util;

import com.baomidou.mybatisplus.core.metadata.IPage;
import cn.edu.gench.vo.PageResponseVO;

import java.util.List;

/**
 * @author colorful@TaleLin
 */
public class PageUtil {

    public static <T> PageResponseVO<T> build(IPage<T> iPage) {
        return new PageResponseVO<>(iPage.getTotal(), iPage.getRecords(), iPage.getCurrent(), iPage.getSize(),iPage.getPages());
    }

    public static <K, T> PageResponseVO<K> build(IPage<T> iPage, List<K> records) {
        return new PageResponseVO<>(iPage.getTotal(), records, iPage.getCurrent(), iPage.getSize());
    }

}
