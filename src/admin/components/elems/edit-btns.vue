<template lang="pug">
  .group__btns
    button(v-if="!isEditMode" @click="$emit('trigger-btn', 'edit')").group__btn.group__btn--type--edit
    button(v-if="!isEditMode&&isTrash" @click="$emit('trigger-btn', 'del')").group__btn.group__btn--type--delete
    button(v-if="isEditMode" @click="$emit('trigger-btn', 'submit')").group__btn.group__btn--type--submit
    button(v-if="isEditMode" @click="$emit('trigger-btn', 'reset')").group__btn.group__btn--type--reset
</template>

<script>
export default {
  props: {
    isEditMode: {
      type: Boolean,
      default: false
    },
    isTrash: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="postcss">
  .group__btns {
    display: flex;
    justify-content: flex-end;
  }
  .group__btn {
    width: 15px;
    height: 15px;

    &--type--submit {
      background: svg-load('tick.svg', fill=#00d70a, width=100%, height=100%);
      margin-right: 19px;
    }

    &--type--reset {
      background: svg-load('remove.svg', fill=#bf2929, width=14px, height=12px);
      background-repeat: no-repeat;
    }
    &--type--edit {
      background: svg-load('pencil.svg', fill=#7a7a7a, width=14px, height=12px);
      background-repeat: no-repeat;
      margin-right: 20px;

      &:hover {
        background: svg-load('pencil.svg', fill=#00d70a, width=14px, height=12px);
        background-repeat: no-repeat;
      }
    }
    &--type--delete {
      background: svg-load('trash.svg', fill=#7a7a7a, width=14px, height=12px);
      background-repeat: no-repeat;

      &:hover {
         background: svg-load('trash.svg', fill=#bf2929, width=14px, height=12px);
         background-repeat: no-repeat;
      }
    }
  }
</style>