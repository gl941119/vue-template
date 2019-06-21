<template>
  <xd-layout
    theme="dark"
    :logo="logo"
    :sidebar-list="sidebarList"
    :logout="logout"
  />
</template>

<script>
import {mapGetters} from 'vuex'
import Layout from '@/layouts/Layout'
import logo from '@/assets/images/logo.png'

export default {
  name: 'Main',
  data () {
    return {
      logo: {
        src: logo,
        alt: '寻道科技',
        firstDes: '寻道科技',
        secondDes: '广泛UE模板'
      }
    }
  },
  computed: {
    ...mapGetters({
      userType: 'user/getUserType',
      getSidebarList: 'sidebar/getSidebarList'
    }),
    sidebarList () {
      return this.getSidebarList(this.userType).main
    }
  },
  methods: {
    logout () {
      console.log('logout')
    }
  },
  components: {
    'xd-layout': Layout
  }
}
</script>
