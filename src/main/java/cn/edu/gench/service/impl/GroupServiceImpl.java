package cn.edu.gench.service.impl;

import cn.edu.gench.service.GroupService;
import cn.edu.gench.service.PermissionService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import cn.edu.gench.bo.GroupPermissionBO;
import cn.edu.gench.common.enumeration.GroupLevelEnum;
import cn.edu.gench.common.mybatis.Page;
import cn.edu.gench.mapper.UserGroupMapper;
import cn.edu.gench.model.GroupDO;
import cn.edu.gench.mapper.GroupMapper;
import cn.edu.gench.model.PermissionDO;
import cn.edu.gench.model.UserGroupDO;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.github.talelin.autoconfigure.exception.ForbiddenException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author pedro@TaleLin
 * @author colorful@TaleLin
 * @author Juzi@TaleLin
 */
@Service
public class GroupServiceImpl extends ServiceImpl<GroupMapper, GroupDO> implements GroupService {

    @Autowired
    private PermissionService permissionService;

    @Autowired
    private UserGroupMapper userGroupMapper;

    @Override
    public List<GroupDO> getUserGroupsByUserId(Long userId) {
        return this.baseMapper.selectUserGroups(userId);
    }

    @Override
    public List<Long> getUserGroupIdsByUserId(Long userId) {
        return this.baseMapper.selectUserGroupIds(userId);
    }

    @Override
    public IPage<GroupDO> getGroupPage(long page, long count) {
        Page pager = new Page(page, count);
        return this.baseMapper.selectPage(pager, null);
    }

    @Override
    public boolean checkGroupExistById(Long id) {
        return this.baseMapper.selectCountById(id) > 0;
    }

    @Override
    public GroupPermissionBO getGroupAndPermissions(Long id) {
        GroupDO group = this.baseMapper.selectById(id);
        List<PermissionDO> permissions = permissionService.getPermissionByGroupId(id);
        return new GroupPermissionBO(group, permissions);
    }

    @Override
    public boolean checkGroupExistByName(String name) {
        QueryWrapper<GroupDO> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(GroupDO::getName, name);
        return this.baseMapper.selectCount(wrapper) > 0;
    }

    @Override
    public boolean checkIsRootByUserId(Long userId) {
        QueryWrapper<UserGroupDO> wrapper = new QueryWrapper<>();
        Long rootGroupId = this.getParticularGroupIdByLevel(GroupLevelEnum.ROOT);
        wrapper.lambda().eq(UserGroupDO::getUserId, userId)
                .eq(UserGroupDO::getGroupId, rootGroupId);
        UserGroupDO relation = userGroupMapper.selectOne(wrapper);
        return relation != null;
    }

    @Override
    public boolean deleteUserGroupRelations(Long userId, List<Long> deleteIds) {
        if (deleteIds == null || deleteIds.isEmpty()) {
            return true;
        }
        if (checkIsRootByUserId(userId)) {
            throw new ForbiddenException("can't modify the root user's group", 10078);
        }
        QueryWrapper<UserGroupDO> wrapper = new QueryWrapper<>();
        wrapper.lambda()
                .eq(UserGroupDO::getUserId, userId)
                .in(UserGroupDO::getGroupId, deleteIds);
        return userGroupMapper.delete(wrapper) > 0;
    }

    @Override
    public boolean addUserGroupRelations(Long userId, List<Long> addIds) {
        if (addIds == null || addIds.isEmpty()) {
            return true;
        }
        boolean ok = checkGroupExistByIds(addIds);
        if (!ok) {
            throw new ForbiddenException("cant't add user to non-existent group", 10077);
        }
        List<UserGroupDO> relations = addIds.stream().map(it -> new UserGroupDO(userId, it)).collect(Collectors.toList());
        return userGroupMapper.insertBatch(relations) > 0;
    }

    @Override
    public List<Long> getGroupUserIds(Long id) {
        QueryWrapper<UserGroupDO> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(UserGroupDO::getGroupId, id);
        List<UserGroupDO> list = userGroupMapper.selectList(wrapper);
        return list.stream().map(UserGroupDO::getUserId).collect(Collectors.toList());
    }

    @Override
    public GroupDO getParticularGroupByLevel(GroupLevelEnum level) {
        if (GroupLevelEnum.USER.getValue().equals(level.getValue())) {
            return null;
        } else {
            QueryWrapper<GroupDO> wrapper = new QueryWrapper<>();
            wrapper.lambda().eq(GroupDO::getLevel, level);
            GroupDO groupDO = this.baseMapper.selectOne(wrapper);
            return groupDO;
        }
    }

    @Override
    public Long getParticularGroupIdByLevel(GroupLevelEnum level) {
        GroupDO group = this.getParticularGroupByLevel(level);
        return group == null ? 0L : group.getId();
    }

    private boolean checkGroupExistByIds(List<Long> ids) {
        return ids.stream().allMatch(this::checkGroupExistById);
    }
}
