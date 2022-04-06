<template>
    <div class="c-comment">
        <p>
            <span class="username">{{ username }}</span>
        </p>
        {{ text }}
    </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
