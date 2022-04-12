<template>
    <div class="c-statistic">
        <div class="stars">
            <div class="stars__icon">
                <icon name="star" />
            </div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'statistic',
  components: {
    icon
  }
}
</script>

<style scoped lang="scss" src="./statistic.scss"></style>
