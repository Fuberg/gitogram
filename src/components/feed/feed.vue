<template>
    <div class="c-feed">
        <person class="person" avatarImgSrc="https://picsum.photos/300/300" userName="Jhon Musa" />
        <slot />
        <toggler class="toggler" @onToggle='toggle' />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 2" :key="n">
                    <comment text="Some text" username="Jhon Doe" />
                </li>
            </ul>
        </div>
        <div class="feed-date">15 MAY</div>
    </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import { person } from '../person'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment,
    person
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss">
  .c-feed {
    .person {
        .profile-link {

            &__avatar {
                width: 2.75rem;
                height: 2.75rem;
            }
        }
    }
  }
</style>

<style scoped lang="scss" src="./feed.scss"></style>
