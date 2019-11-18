<template lang="pug">
  section.comments
    .container.comments__container
      .section__header
        h2.section__title Блок "Отзывы"
      .comments__add-wrapper.add-comment
        .section-subtitle Новый отзыв
        form.add-comment__section(@submit.prevent="submitNewComment")
          .add-comment__add-photo
            .add-photo__avatar
            input(type="file" style="display:none")
            button.add-photo__btn Добавить фото
            .error {{ validation.firstError('comment.photo') }}
          .add-comment__form
            .form
              .form__row
                label.form__block.form__block--comments
                  .form__block-title Имя автора
                  input.form__input(type="text" v-model="comment.name" :error-text="validation.firstError('comment.name')" name="commentAuthor")
                  .error {{ validation.firstError('comment.name') }}
                label.form__block.form__block--comments
                  .form__block-title Титул автора
                  input.form__input(type="text" v-model="comment.job" name="commentJob")
                  .error {{ validation.firstError('comment.name') }}
              .form__row
                label.form__block
                  .form__block-title Отзыв
                  textarea.form__input.form__textarea(type="comment" v-model="comment.text" name="commentComment")
                  .error {{ validation.firstError('comment.name') }}
              .form__row
                button.form__btn-reset(type="reset") Отмена
                button.bigbtn.form__btn-submit(type="submit") СОХРАНИТЬ
      .comments__wrapper.comments
        ul.comments__list
          li.comments__item.new__add
            button.new__add-btn
              .new__add-icon +
              .new__add-text Добавить работу
          li.comments__item.item
            .comments__profile
              .comments__icon
                img.comments__icon-pic(src="../../../images/content/comment_2.jpg") 
              .comments__author
                .comments__author-name Владимир Сабанцев
                .comments__author-job Преподаватель
            .item__text
              p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .item__btns
              button.item__edit 
                .item__btn-text Править
                .item__btn-icon
              button.item__delete
                .item__btn-text Удалить
                .item__btn-icon
                  //- Добавить список отзывов
</template>

<script>
import $axios from '../../requests';
import { Validator } from 'simple-vue-validator';

export default {
  name: 'comments',
  mixins: [require("simple-vue-validator").mixin],
  data() {
    return {
      comment: {
        photo: "",
        name: "",
        job: "",
        text: ""
      }
    }
  },
  validators: {
    'comment.photo': function(value) {
      return Validator.value(value).required('Загрузите фото');
    },
    'comment.name': function(value) {
      return Validator.value(value).required('Заполните поле перед отправкой');
    },
    'comment.job': function(value) {
      return Validator.value(value).required('Заполните поле перед отправкой');
    },
    'comment.text': function(value) {
      return Validator.value(value).required('Заполните поле перед отправкой');
    },
  },
  methods: {
    async submitNewComment() {
      const success = await this.$validate();

      if(success) {
        console.log('Комментарий успешно отправлен');
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";

  .comments__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 113px 1fr min-content;
    grid-template-areas:
      "header"
      "edit"
      "portfolio"
  }
  
  .add-photo__btn{
    font-size: 16px;
    color: #383bcf;
    font-weight: 600;

    &:hover {
      color: #ff8f01;
    }
  }

  .add-comment__form {
    grid-area: add-form;
    min-width: 0;
  }

  .form__block--comments {
    margin-right: 20px;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  .comments__wrapper {
    padding: 5% 0;
  }

  .comments__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @include tablets {
      grid-template-columns: repeat(2, 1fr);
    }

    @include phones {
      grid-template-columns: 1fr;
      grid-template-rows: 200px repeat(1, 1fr);
    }
  }

  .comments__item {
    min-height: 379px;
    grid-template: 1fr 3fr 0.2fr / 1fr;
    padding: 5% 0;
    grid-gap: 20px;

    @include tablets {
      min-height: 430px;
    }

  }

  .comments__item.new__add {
    @include phones {
      min-height: 200px;
    }
  } 

  .comments__profile {
    display: flex;
    width: 92%;
    justify-self: center;
    border-bottom: 1px solid #414c63;
    align-items: center;
  }

  .comments__icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 24px;
    flex-shrink: 0;
  }

  .comments__icon-pic {
    width: 100%;
  }
  
  .comments__author-name {
    font-size: 18px;
    color: #414c63;
    font-weight: 800;
  }

  .comments__author-job {
    font-size: 16px;
    font-weight: 600;
    color: #414c637a;
  }
</style>