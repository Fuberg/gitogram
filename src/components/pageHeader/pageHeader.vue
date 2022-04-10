<template>
    <div class="c-page-header">
        <div class="logoIcon">
            <logo />
        </div>
    </div>
</template>

<script>
import { logo } from '../../icons/icon.vue'

export default {
  name: 'page-header',
  components: {
    logo
  }
}
</script>

<style scoped lang="scss" src="./pageHeader.scss"></style>
