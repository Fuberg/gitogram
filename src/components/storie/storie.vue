<template>
    <div class="c-storie">
        <div class="storie__header">
            <div class="progress"></div>
            <person class="person" avatarImgSrc="https://picsum.photos/300/300" userName="Jhon Musa" />
        </div>
        <div class="storie__content"></div>
        <div class="storie__footer">
            <Button text="Follow" />
        </div>
    </div>
</template>

<script>
import { button } from '../button'
import { person } from '../person'

export default {
  name: 'storie',
  components: {
    Button: button,
    person
  }
}
</script>

<style lang="scss">
    .c-storie {
        .person {
            .profile-link {

                &__avatar {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }

        .person-info {

            &__username {
                font-size: 14px;
            }
        }
  }
</style>

<style scoped lang="scss" src="./storie.scss"></style>
