package cn.edu.gench.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 分页数据统一 view object
 *
 * @author pedro@TaleLin
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PageResponseVO<T> {

    private long total;  //总记录数

    private List<T> items; //当前页数据

    private long page;   //当前页码

    private long count;  //当前页数量

    private long totalPage; //总页码

    public PageResponseVO(long total, List<T> items, long page, long count) {
        this.total = total;
        this.items = items;
        this.page = page;
        this.count = count;
    }
}
