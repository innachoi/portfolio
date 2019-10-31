<template lang="pug">
    .wrapper.admin-wrapper
      header.admin-header
        .container.header__container
          .header__user
            .user__avatar
              img(class="user__avatar-pic" src="../images/content/my_photo.jpg" )
          .header__profile
            .header__profile-name Инна Цой
            .header__profile-title Панель администрирования
            .header__profile-logout
              a.logout__btn Выйти
      nav.admin-menu
        ul.container.admin-menu__list
          li.admin-menu__item
            a(href="#").admin-menu__link.admin-menu__link--active Обо мне
          li.admin-menu__item
            a(href="#").admin-menu__link Работы
          li.admin-menu__item
            a(href="#").admin-menu__link Отзывы
      .maincontent  
        
        section.about
          .container.about__container
            .about__header
              h2.section__title.about__title Блок "Обо мне"
              button.about__add-btn
                .add-icon +
                .about__add-text Добавить группу

            .about__groups.groups
              ul.groups__list
                li.groups__item.group
                  .group__header
                    .group__field
                      input.group__input(type="text" name="groupName" placeholder="Название новой группы" required) 
                    .group__btns
                      button.group__btn.group__btn--type--submit(type="submit")
                      button.group__btn.group__btn--type--reset(type="reset")
                  .group__skills
                  .group__add
                    input.group__input(type="text" name="skillName" placeholder="Новый навык" required) 
                    input.group__input(type="text" name="skillPercent" placeholder="100 %" required) 
                    button.group__add-btn(type="submit")
                      .add-icon + 
                li.groups__item.group
                  .group__header
                    .group__field
                      input.group__input(type="text" name="groupName" placeholder="Название новой группы" required) 
                    .group__btns
                      button.group__btn.group__btn--type--submit(type="submit")
                      button.group__btn.group__btn--type--reset(type="reset")
                  .group__skills
                  .group__add
                    input.group__input(type="text" name="skillName" placeholder="Новый навык" required) 
                    input.group__input(type="text" name="skillPercent" placeholder="100 %" required) 
                    button.group__add-btn(type="submit")
                      .add-icon + 
            
        section.works
          .container.works__container
            .works__header
              h2.section__title Блок "Работы"
            .works__edit-wrapper.edit
              .section-subtitle Редактирование работы
              .edit__section
                .edit__download
                  .edit__download-window 
                    .edit__download-text Перетащите или загрузите изображение
                    button.bigbtn.edit__download-btn ЗАГРУЗИТЬ
                .edit__form
                  form.form
                    .form__row
                      label.form__block
                        .form__block-title Название
                        input.form__input(type="text" name="workName" required) 
                    .form__row
                      label.form__block
                        .form__block-title Ссылка
                        input.form__input(type="text" name="workLink" required) 
                    .form__row
                      label.form__block
                        .form__block-title Описание
                        textarea.form__input.form__textarea(type="s" name="workDesc") 
                    .form__row
                      label.form__block
                        .form__block-title Добавление тега
                        input.form__input(type="text" name="workLink" required) 
                    .form__row
                      button.form__btn-reset(type="reset") Отмена
                      button.bigbtn.form__btn-submit(type="submit") СОХРАНИТЬ
            .works__portfolio-wrapper.portfolio
              ul.portfolio__list
                li.portfolio__item.new__add
                  button.new__add-btn
                    .new__add-icon +
                    .new__add-text Добавить работу
                li.portfolio__item.item
                  .item__cover
                    img.item__cover-img(src="../images/content/portfolio_pr1.jpg")
                  .item__tags
                    ul.tags__list
                      li.tags__item Javascript
                      li.tags__item HTML
                
                  .item__text
                    .item__title Сайт школы
                    .item__desc
                      p Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool!
                    a.item__link loftschool.com
                  .item__btns
                    button.item__edit 
                      .item__btn-text Править
                      .item__btn-icon
                    button.item__delete
                      .item__btn-text Удалить
                      .item__btn-icon
                  
                  //- Добавить элементы через Vue
                  
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

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  body {
    color: #1b1f22;
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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 78px 76px 1fr;
    grid-template-areas: 
      "header"
      "navigation"
      "maincontent"
  }


  .admin-header {
    grid-area: header;
    background-color: #1b1f22;
    display: grid;
    grid-template: 1fr / 1fr;
    justify-items: center;
  }

  .maincontent {
    grid-area: maincontent;
    background: #f8fafe;
  }

  .container {
    width: 90%;
    height: 100%;
    align-items: center;
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

  .header__container {
    display: grid;
    grid-template:
      "user profile" 1fr
      / min-content 1fr;
  }

  .user__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
  }

  .user__avatar-pic {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header__profile {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include phones {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .header__profile-name {
    color: white;
    font-size: 18px;
    margin-right: 30px;
  }

  .header__profile-title {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    flex: 1;

    @include phones {
      display: none;
    }
  }

  .logout__btn {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    transition: color .3s;

    &:hover {
      color: #ff8f01;
      transition: .3s;
    }
  }

  /* Navigation */

  .admin-menu__list {
    display: flex;
    align-items: center;
  }

  .admin-menu__item {
    margin-right: 32px;

    &:last-child {
      margin-right: 0;
    }
  }

  .admin-menu__link {
    padding: 28px 26px;
    display: block;
    border: none;

    @include phones {
      padding: 20px 10px;
    }

    &--active {
      color: #ff8f01;
      border-bottom: 3px solid #ff8f01;
    }

    &:hover {
      color: #ff8f01;
    }
  }

  /* About */

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

  .about__add-text {
    font-size: 16px;
    font-weight: 600;
    color: #383bcf;
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
  }

  .group__field {
    width: 65%;
  }

  .group__input {
    width: 100%;
    /* border: none; */
  }

  .group__btns {
    width: 35%;
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

  /* Works */

  .works__container, .comments__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 113px 1fr min-content;
    grid-template-areas:
      "header"
      "edit"
      "portfolio"
    
  }

  .works__header {
    grid-area: header;
  }

  .works__edit-wrapper {
    grid-area: edit;
    background: white;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    padding: 0 2.5% 2.5%;
    display: grid;
    grid-template: 
      "edit-header" 77px 
      "edit" 1fr
      / 1fr;
  }

  .edit__section {
    display: grid;
    grid-template:
      "edit-download edit-form" 1fr
      / 1fr 1fr;
    column-gap: 30px;
    margin-top: 30px;

    @include tablets {
      grid-template:
        "edit-download" 1fr
        "edit-form" 1.8fr
        / 1fr;
      padding: 0 10%;
    }

    @include phones {
      padding: 0;
    }
  }

  .edit__download {
    grid-area: edit-download;
    display: flex;
    flex-direction: column;

    @include tablets {
      margin-bottom: 30px;
    }
  }

  .edit__download-window {
    width: 100%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #dee4ed;

    @include tablets {
      height: 356px;
    }

    @include phones {
      height: 276px;
    }
  }

  .edit__download-text {
    font-size: 16px;
    padding: 0 21%;
    text-align: center;
    color: rgba(65, 76, 99, 0.5);
    margin-bottom: 32px;
  }

  .edit__form {
    grid-area: edit-form;
  }

  .form__row {
    margin-bottom: 34px;
    display: flex;

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


  .works__portfolio-wrapper {
    grid-area: portfolio;
    display: flex;
    flex-direction: column;
    padding: 5% 0;

    @include tablets {
      align-self: start;
    }
  }

  .portfolio__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @include desktop1000 {
      grid-template-columns: repeat(2, 1fr);
    }

    @include phones {
      grid-template-columns: 1fr;
      grid-template-rows: 200px repeat(1, 1fr);
    }
  }

  .portfolio__item {
    height: 558px;
    grid-template: 1fr 0.2fr 1.5fr 0.2fr / 1fr;

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
  }

  .add-comment__section {
    display: grid;
    grid-template: 1fr / 1fr 2.5fr;
    grid-template-areas: 
      "add-photo add-form";
    
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