package cn.edu.gench.mapper;

import cn.edu.gench.dto.DataOrderSimpleInfo;
import cn.edu.gench.dto.MonthCountInfo;
import cn.edu.gench.dto.PidCategory;
import cn.edu.gench.model.WxOrderDO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author generator@norton
 * @since 2020-12-13
 */
public interface WxOrderMapper extends BaseMapper<WxOrderDO> {

    void changeOrderStatus(Integer status, Integer id);

    @Select("SELECT DATE_FORMAT(create_time,'%Y-%m') AS monthString, COUNT(*) AS countInfo FROM wx_order  WHERE DATE_FORMAT(create_time,'%Y%m')=DATE_FORMAT(CURDATE(),'%Y%m') GROUP BY DATE_FORMAT(create_time,'%Y-%m')")
    MonthCountInfo getThisMonthOrderCount();

    @Select("SELECT DATE_FORMAT(create_time,'%Y-%m') AS monthString, COUNT(*) AS countInfo FROM wx_order WHERE PERIOD_DIFF(DATE_FORMAT(NOW(),'%Y%m'),DATE_FORMAT(create_time,'%Y%m'))=1 GROUP BY DATE_FORMAT(create_time,'%Y-%m')")
    MonthCountInfo getLastMonthOrderCount();

    @Select("SELECT DATE_FORMAT(create_time,'%Y-%m') AS monthString,snap_items AS items FROM wx_order ORDER BY create_time ASC")
    List<DataOrderSimpleInfo> selectListByMonth();

    @Select("SELECT p.id ,c.`name` AS `category` FROM spu p,category c WHERE p.category_id=c.id")
    List<PidCategory> getPidCategoryList();
}
