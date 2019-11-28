<template lang="pug">
  .form__row(:class="skillClass")
    label.group__input-wrapper.skill-name
      input.group__input.skill-input(type="text" v-model="editedSkill.title" name="skillName" placeholder="HTML5" readonly)
    label.group__input-wrapper.skill-percent
      input.group__input.skill-input(type="text" v-model="editedSkill.percent" name="skillPercent" placeholder="80%" readonly)
    .group__btns
      button.group__btn.group__btn--type--edit(type="button")
      button.group__btn.group__btn--type--delete(type="button")
      button.group__btn.group__btn--type--submit(type="submit")
      button.group__btn.group__btn--type--reset(type="reset")
    edit-btns(@trigger-btn="processClick" :is-edit-mode="this.isEditMode")
</template>

<script>
export default {
  props: {
    skillsItem: {
      type: Object
    },
  },
  components: {
    editBts: () => import("./edit-btns")
  },
  data() {
    return {
      editedSkill: {...this.skillsItem},
      isEditMode: false
    }
  },
  computed: {
    skillClass() {
      return {
        '.skill--mode--disabled': !this.isEditMode
      }
    }
  },
  methods: {
    processClick(mode) {
      if(mode === "edit") {
        this.isEditMode = true;
      } else if(mode === "submit") {
        let fd = makeFormData(this.editedSkill);
        this.updateSkill(fd);

        this.isEditMode = false;
      } else if(mode === "del") {
        this.deleteSkill(this.editedSkill.id);
      } else if(mode === "reset") {
        this.isEditMode = false;
        this.editedSkill.title = this.skillsItem.title;
        this.editedSKill.percent = this.skillsItem.percent;
      }
    }
  }
}
</script>

<style lang="postcss">

  .group__skills {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .skill--mode--disabled {
    label, input {
      pointer-events: none;
    }
    input {
      border-bottom: 1px solid white;
    }
  }

  .group__input-wrapper {
    margin-right: 20px;
  }

  .skill-name {
    width: 65%;
  }

  .skill-percent {
    width: 20%;
  }

  .skill-input {
    border: none;
    border-bottom: 1px solid grey;
    cursor: default;
  }

  .group__btns--type--submit {
    display: none;
  }
</style>