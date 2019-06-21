<template>
  <div class="menu-wrapper">
    <template v-for="item in sidebarList">
      <p class="sidebarItem-groupTitle" v-if="item.hasOwnProperty('groupTitle')" :key="item.groupTitle">{{item.groupTitle}}</p>
      <xd-submenu
        :popper-append-to-body="false"
        v-else-if="item.hasOwnProperty('group') && item.children.length" :index="item.group" :key="item.group">
        <template slot="title">
          <xd-icon v-if="item.icon" :icon="item.icon" />
          <span v-if="item.title" slot="title">{{item.title}}</span>
        </template>

        <template v-for="child in item.children">
          <xd-menu-item :index="child.path" :key="child.path">
            <xd-icon v-if="child.icon" :icon="child.icon" />
            <span v-if="child.title" slot="title">{{child.title}}</span>
          </xd-menu-item>
        </template>
      </xd-submenu>
      <xd-menu-item v-else :index="item.path" :class="{'submenu-title-noDropdown':!isNest}" :key="item.path">
        <xd-icon v-if="item.icon" :icon="item.icon" />
        <span v-if="item.title" slot="title">{{item.title}}</span>
      </xd-menu-item>
    </template>
  </div>
</template>

<script>
import {MenuItem, Submenu} from 'element-ui'
import Icon from '@/components/Icon'

export default {
  name: 'sidebar-item',
  props: {
    sidebarList: Array,
    isNest: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'xd-menu-item': MenuItem,
    'xd-submenu': Submenu,
    'xd-icon': Icon
  }
}
</script>
