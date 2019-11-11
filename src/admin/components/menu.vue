<template lang="pug">
  nav.admin-menu
    ul.container.admin-menu__list
      li.admin-menu__item
        a(href="#").admin-menu__link.admin-menu__link--active Обо мне
      li.admin-menu__item
        a(href="#").admin-menu__link Работы
      li.admin-menu__item
        a(href="#").admin-menu__link Отзывы
</template>

<script>
export default {
  name: 'menu-admin'
}
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../../styles/mixins.pcss";

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

</style>