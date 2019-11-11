<template lang="pug">
  header.admin-header
    .container.header__container
      .header__user
        .user__avatar
          img(class="user__avatar-pic" src="../../images/content/my_photo.jpg" )
      .header__profile
        .header__profile-name Инна Цой
        .header__profile-title Панель администрирования
        .header__profile-logout
          a.logout__btn Выйти
</template>

<script>
export default {
  name: 'header-admin'
}
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../../styles/mixins.pcss";

  .admin-header {
    grid-area: header;
    background-color: #1b1f22;
    display: grid;
    grid-template: 1fr / 1fr;
    justify-items: center;
  }

  .header__container {
    display: grid;
    grid-template:
      "user profile" 1fr
      / min-content 1fr;
  }

  .header__profile {
    flex: 1;
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


  .logout__btn {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    transition: color .3s;

    &:hover {
      color: #ff8f01;
      transition: .3s;
    }
  }
</style>