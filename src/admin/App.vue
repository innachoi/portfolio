<template lang="pug">
    .wrapper.admin-wrapper
      login
      headerAdmin
      menuAdmin

      .maincontent  
        about
        works

                  
        section.comments
          .container.comments__container
            .section__header
              h2.section__title Блок "Отзывы"
            .comments__add-wrapper.add-comment
              .section-subtitle Новый отзыв
              .add-comment__section
                .add-comment__add-photo
                  .add-photo__avatar
                  button.add-photo__btn Добавить фото
                .add-comment__form
                  form.form
                    .form__row
                      label.form__block.form__block--comments
                        .form__block-title Имя автора
                        input.form__input(type="text" name="commentAuthor" required)
                      label.form__block.form__block--comments
                        .form__block-title Титул автора
                        input.form__input(type="text" name="commentJob")
                    .form__row
                      label.form__block
                        .form__block-title Отзыв
                        textarea.form__input.form__textarea(type="comment" name="commentComment" required)
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
                      img.comments__icon-pic(src="../images/content/comment_2.jpg") 
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
import login from './components/login';
import header from './components/header';
import menu from './components/menu';

import about from './pages/about';
import works from './pages/works';

export default {
  name: 'app',
  components: {
    login,
    headerAdmin: header,
    menuAdmin: menu,
    about,
    works
  }
}
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  /* @import "../styles/layout/base.pcss"; */

  html {
  @include desktop {
    font-size: 15px;
  }
  @include tablets {
    font-size: 14px;
  }
  }

  body,
  html {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1b1f22;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button[type="button"] {
    cursor: pointer;
    background-color: transparent;
  }

  a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  }

  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
  
  button, a, input {
    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
    }
  }

  button, input,textarea {
    padding: none;
    border: none;
    background: initial;
  }

  input {
    border-bottom: 1px solid #1b1f22;
    padding: 10px 0;
  }

  .admin-wrapper {
    /* width: 100vw;
    min-height: 100vh; */
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 78px 76px 1fr;
    grid-template-areas: 
      "header"
      "navigation"
      "maincontent"
  }

  .maincontent {
    grid-area: maincontent;
    background: #f8fafe;
  }

  .container {
    display: flex;
    margin: 0 auto;
    max-width: 1480px;
    width: 90%;
    height: 100%;
    align-items: center;

    @include phones {
      width: 85%;
    }
  }

  .section__title {
    font-size: 21px;
    font-weight: 700;
  }

  .section-subtitle {
    display: flex;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #1f232d;
    align-items: center;
    min-width: 0;
  }

  .bigbtn {
    width: 181px;
    height: 52px;
    border-radius: 30px;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    font-size: 16px;
    font-weight: 700;
    color: white;

    &:hover {
      background-image: linear-gradient(to right, #d0731b, #dc9322);
    }
  }

  /* Header */


  /* Navigation */


  /* About */



  /* Works */


  .form__row {
    margin-bottom: 34px;
    display: flex;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
      display: flex;
      justify-content: flex-end;

    }
  }

  .form__block {
    flex: 1;
  }

  .form__block-title {
    color: rgba(65, 76, 99, 0.5);
    margin-bottom: 18px;
  }

  .form__input {
    width: 100%;
  }

  .form__textarea {
    min-height: 147px;
    border: 1px solid #a1a1a1;
    resize: none;
  }

  .form__btn-reset {
    color: #383bcf;
    font-weight: 600;
    margin-right: 69px;

    &:hover {
      color: #ff8f01;
    }
  }



  .new__add {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #006aed, #3f35cb);

    @include phones {
      align-items: flex-start;
      height: 200px;
    }

  }

  .new__add-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include phones {
      flex-direction: initial;
      padding-left: 5%;
    }

    &:hover {
      .new__add-icon {
        color: #ff8f01;
        border-color: #ff8f01;
      }
      .new__add-text {
        color: #ff8f01;
      }
    }
  }

  .new__add-icon {
    width: 152px;
    height: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid white;
    font-size: 72px;
    color: white;
    margin-bottom: 30px;

    @include phones {
      width: 78px;
      height: 78px;
      margin-bottom: 0;
      margin-right: 30px;
      font-size: 48px;
    }
  }

  .new__add-text {
    color: white;
    font-size: 18px;
    font-weight: 700;
  }

  .item {
    background: white;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    display: grid;
  }

  .item__cover-img {
    width: 100%;
  }

  .item__tags {
    transform: translateY(-100%);
  }

  .tags__list {
    display: flex;
    justify-content: flex-end;
  }

  .tags__item {
    font-size: 13px;
    color: rgba(40, 51, 64, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 4%;
    background-color: #f3f5f9;
    border-radius: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .item__text {
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    justify-self: center;
    color: rgba(40,51,64,.7);
  }

  .item__title {
    font-size: 18px;
    font-weight: 800;
    color: rgb(40,51,64);
    margin-bottom: 20px;
  }

  .item__desc {
    flex: 1;
  }

  .item__link {
    font-weight: 700;
    color: #383bcf;

    &:hover {
      color: #ff8f01;
    }
  }

  .item__btns {
    width: 92%;
    justify-self: center;
    display: flex;
    justify-content: space-between;
  }

  .item__edit {
    display: flex;
    align-items: center;
    padding: 0;
    .item__btn-icon {
      width: 16px;
      height: 16px;
      background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);;
    }

    &:hover {
      color: #ff8f01;
      text-decoration: underline;
    }
  }

  .item__delete {
    display: flex;
    align-items: center;
    padding: 0;
    .item__btn-icon {
      width: 16px;
      height: 16px;
      background: svg-load('remove.svg', fill=#bf2929, width=100%, height=100%);;
    }

    &:hover {
      color: #ff8f01;
      text-decoration: underline;
    }
  }

  .item__btn-text {
    margin-right: 10px;
  }

  /* Comments */

  .comments__add-wrapper {
    background: white;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    padding: 0 2.5% 2.5%;
    display: grid;
    grid-template:
      "add-header" 77px
      "add-section" 1fr
      / 1fr;
    row-gap: 30px;
    min-width: 0;
  }

  .add-comment__section {
    display: grid;
    grid-template: 1fr / 1fr 2.5fr;
    grid-template-areas: 
      "add-photo add-form";
    min-width: 0;
    
    @include tablets {
      grid-template: 1fr / 1fr 1.4fr;
    }

    @include phones {
      grid-template: 1fr 1.4fr / 1fr;
      grid-template-areas: 
      "add-photo"
      "add-form";
    }
  }

  .add-comment__add-photo {
    grid-area: add-photo;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 0;
  }

  .add-photo__avatar {
    position: relative;
    width: 172px;
    height: 172px;
    border-radius: 50%;
    background: #dee4ed;
    margin-bottom: 34px;

    &::before {
      content: "";
      display: block;
      width: 50%;
      height: 50%;
      background-image: svg-load('avatar.svg', fill=#fff, width=100%, height=100%);
      background-repeat: no-repeat;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

    }
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