<template lang="pug">
  .group__container
    form(@submit.prevent="addNewCategory").group__header
      .group__field
        input(type="text" v-model="title" name="groupName" placeholder="Название новой группы" required).group__input
      .group__btns
        button.group__btn.group__btn--type--submit(type="submit")
        button.group__btn.group__btn--type--reset(type="reset")
    skills-item(v-for="(skill, index) in skills" :skill="skillsItem" :key="index")
    form.group__add
      input.group__input(type="text" name="skillName" placeholder="Новый навык" required) 
      input.group__input(type="text" name="skillPercent" placeholder="100 %" required) 
      button.group__add-btn(type="submit")
        .add-icon + 
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  components: {
    skillsItem: () => import("./skills-item")
  }
  
}
</script>

<style lang="postcss">
  .group__container {
    display: grid;
    background-color: white;
    min-height: 390px;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    padding: 2.5%;
    grid-template-columns: 1fr;
    grid-template-rows: 12% 1fr 12%;
    align-items: center;
  }

  .group__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .group__field {
    width: 65%;
  }

  .group__input {
    width: 100%;
  }

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

  .group__skills {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    cursor: default;
  }

  .group__btns--type--submit {
    display: none;
  }

  .group__add {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    .group__input {
      margin-right: 10px;
      
      &:first-child {
        width: 39%;
      }

      &:nth-child(2) {
        width: 15%;
        margin-right: 25px;
      }
    }

    .add-icon {
      width: 40px;
      height: 40px;
      font-size: 30px;
      margin-right: 0;
    }
  }
</style>