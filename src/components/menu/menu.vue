<template>
    <div class="c-menu">
        <div class="homeIcon">
            <icon name="home" />
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'menu',
  components: {
    icon
  }
}
</script>

<style scoped lang="scss" src="./menu.scss" ></style>
