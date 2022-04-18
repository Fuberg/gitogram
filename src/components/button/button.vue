<template>
    <button class="c-button">
        {{ text }}
    </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    text: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="scss" src="./button.scss"></style>
