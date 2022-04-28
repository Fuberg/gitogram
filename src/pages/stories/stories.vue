<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo">
          <logo class="white" />
        </button>
        <button class="close-btn">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <stories-slider/>
    </div>
  </div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'

export default {
  name: 'stories',
  components: {
    logo,
    icon,
    storiesSlider
  },
  data () {
    return {
      alo: 10
    }
  }
}
</script>

<style lang="scss" scoped src="./stories.scss">
</style>
