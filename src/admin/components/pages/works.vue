<template lang="pug">
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
              img.item__cover-img(src="../../../images/content/portfolio_pr1.jpg")
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
</template>

<script>
export default {
  name: 'works'
}
</script>

<style lang="postcss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";

  .works__container {
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
    min-width: 0;

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
    min-width: 0;
    width: 100%;

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

</style>