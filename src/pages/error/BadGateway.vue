<template>
  <div class="error">
    <div class="error-img">
      <img src="@/assets/images/500.svg" alt="500" />
    </div>
    <div class="error-txt">
      <h1>
        500
      </h1>
      <div class="error-des">抱歉，你访问的网站不存在</div>
      <div>
        <xd-button
          type="primary"
          @click="goBack"
        >回到首页
        </xd-button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import {Button} from 'element-ui'
export default {
  name: 'bad-Gateway',
  components: {
    'xd-icon': Icon,
    'xd-button': Button
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>
