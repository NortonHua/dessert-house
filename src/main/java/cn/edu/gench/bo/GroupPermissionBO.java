package cn.edu.gench.bo;

import cn.edu.gench.model.GroupDO;
import cn.edu.gench.model.PermissionDO;
import cn.hutool.core.bean.BeanUtil;
import lombok.*;

import java.util.List;

/**
 * @author pedro@TaleLin
 * @author Juzi@TaleLin
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroupPermissionBO {
    private Long id;

    private String name;

    private String info;

    private List<PermissionDO> permissions;

    public GroupPermissionBO(GroupDO group, List<PermissionDO> permissions) {
        BeanUtil.copyProperties(group, this);
        this.permissions = permissions;
    }
}
