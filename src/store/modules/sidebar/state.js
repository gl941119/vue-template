export default {
  sidebarMap: {
    1: {
      main: [
        {
          groupTitle: '分组1'
        },
        {
          path: '/main/first',
          icon: 'xd-menu-unfold',
          title: '导航一'
        },
        {
          path: 'http://baidu.com',
          icon: 'xd-menu-unfold',
          title: '百度'
        },
        {
          icon: 'xd-menu-unfold',
          title: '导航二',
          group: 'secondGroup',
          children: [
            {
              path: 'http://baidu.com',
              title: '百度'
            },
            {
              path: '/main/second',
              title: '二级菜单2'
            }
          ]
        }
      ]
    }
  },
  sidebarTheme: {
    dark: {
      background: '#1f2c35',
      text: '#ffffff',
      activeText: '#ffffff'
    },
    light: {
      background: '#ffffff',
      text: '#000000',
      activeText: '#1890ff'
    }
  }
}
