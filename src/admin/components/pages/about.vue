<template lang="pug">
  section.about
    .container.about__container
      .about__header
        h2.section__title.about__title Блок "Обо мне"
        button.about__add-btn
          .add-icon +
          .about__add-text Добавить группу

      .about__groups.groups
        ul.groups__list
          li(v-for="category in categories" :key="category.id").groups__item.group
            form(@submit.prevent="addNewCategory").group__header
              .group__field
                input(type="text" v-model="title" name="groupName" placeholder="Название новой группы" required).group__input
              .group__btns
                button.group__btn.group__btn--type--submit(type="submit")
                button.group__btn.group__btn--type--reset(type="reset")
            form.group__skills
              .form__row
                label.group__input-wrapper.skill-name
                  input.group__input.skill-input(type="text" name="skillName" placeholder="HTML5" readonly)
                label.group__input-wrapper.skill-percent
                  input.group__input.skill-input(type="text" name="skillPercent" placeholder="80%" readonly)
                .group__btns
                  button.group__btn.group__btn--type--edit(type="button")
                  button.group__btn.group__btn--type--delete(type="button")
                .group__btns.group__btns--type--submit
                  button.group__btn.group__btn--type--submit(type="submit")
                  button.group__btn.group__btn--type--reset(type="reset")
              .form__row
                label.group__input-wrapper.skill-name
                  input.group__input.skill-input(type="text" name="skillName" placeholder="CSS3" readonly)
                label.group__input-wrapper.skill-percent
                  input.group__input.skill-input(type="text" name="skillPercent" placeholder="70%" readonly)
                .group__btns.group__btns--type--edit
                  button.group__btn.group__btn--type--edit(type="button")
                  button.group__btn.group__btn--type--delete(type="button")
                .group__btns.group__btns--type--submit
                  button.group__btn.group__btn--type--submit(type="submit")
                  button.group__btn.group__btn--type--reset(type="reset")
            form.group__add
              input.group__input(type="text" name="skillName" placeholder="Новый навык" required) 
              input.group__input(type="text" name="skillPercent" placeholder="100 %" required) 
              button.group__add-btn(type="submit")
                .add-icon + 
          li.groups__item.group
            form.group__header
              .group__field
                input.group__input(type="text" name="groupName" placeholder="Название новой группы" required) 
              .group__btns
                button.group__btn.group__btn--type--submit(type="submit")
                button.group__btn.group__btn--type--reset(type="reset")
            form.group__skills
            form.group__add
              input.group__input(type="text" name="skillName" placeholder="Новый навык" required) 
              input.group__input(type="text" name="skillPercent" placeholder="100 %" required) 
              button.group__add-btn(type="submit")
                .add-icon + 
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'about',
  data: () => ({
    title: "",
  }),
  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      } catch (error) {
        // Вывести сообщение об ошибке!!!
        alert(error.message);
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";

  .about__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 113px 1fr;
    grid-template-areas: 
      "about-header"
      "about-content"
  }

  .about__header {
    grid-area: about-header;
    display: flex;
    align-items: center;

    @include phones {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .about__groups {
    grid-area: about-content;
  }

  .about__title {
    margin-right: 59px;

    @include phones {
      margin: 0 0 10px;
    }
  }

  .about__add-btn {
    display: flex;

    &:hover {
      .add-icon {
        background-image: linear-gradient(to right, #d0731b, #dc9322);
      }

      .about__add-text {
        color: #ff8f01;
      }
    }
  }

  .about__add-text {
    font-size: 16px;
    font-weight: 600;
    color: #383bcf;
  }


  .add-icon {
    width: 21px;
    height: 21px;
    color: white;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    margin-right: 15px;

    &:hover {
      background-image: linear-gradient(to right, #d0731b, #dc9322);
    }
  }


  .groups__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;

    @include phones {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(1, 1fr);
      align-items: center;
      row-gap: 20px;
    }
  }

  .groups__item {
    min-width: 0;
  }

  .group {
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