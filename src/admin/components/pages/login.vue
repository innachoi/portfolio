<template lang="pug">
  .login
    .container.login__container
      .login__window
        form(@submit.prevent="login").login__form
          //- button(type="button").login__close-btn x
          h2.login__title Авторизация
          .form__row.login__form-row.login__form-row--login
            label.form__input-wrapper.login__form-wrapper Логин
              input(type="text" v-model="user.name").form__input.login__form-input
              .error {{ validation.firstError('user.name') }}
          .form__row.login__form-row.login__form-row--password
            label.form__input-wrapper.login__form-wrapper Пароль
              input(type="text" v-model="user.password").form__input.login__form-input
              .error {{ validation.firstError('user.password') }}
          .login__form-btn
            button(type="submit").bigbtn.login__send-btn ОТПРАВИТЬ
</template>

<script>
import $axios from '../../requests';

export default {
  name: 'login',
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  validators: {
    'user.name': function(value) {
      return Validator.value(value).required('Введите логин');
    },
    'user.password': function(value) {
      return Validator.value(value).required('Введите пароль');
    },
  },
  methods: {
    async login() {
      const success = this.$validate();

      if(success) {
        try {
          const {
            data: {token}
          } = await $axios.post('/login', this.user);
          // Сохраняем полученный токен
  
          localStorage.setItem("token", token);
          $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  
          this.router.replace("/");
        } catch (error) {
          // вывести ошибку!!!
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap&subset=cyrillic');
  @import "normalize.css";
  @import "../../../styles/mixins.pcss";

  .login {
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url(../../../images/background/login_bg.jpg);
    z-index: 1000;
    align-items: center;
    justify-content: center;

    @include phones {
      background-color: #fff;
  }
}

.login__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__window {
  width: 570px;
  height: 530px;
  background: white;
  padding: 7%;
  display: flex;
  justify-content: center;
  align-items: center;

  @include tablets {
    width: 470px;
    height: 530px;
    padding: 10% 7%;
  }
}

.login__form {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #414c63;
}

.login__close-btn {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 50px;
  font-weight: 600;
  color: #414c63;
  transform: translateY(-100%);

  @include tablets {
    font-size: 40px;
  }
}

.login__title {
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 34px;

  @include tablets {
    font-size: 28px;
  }
}

.login__form-row {
  position: relative;
  border-bottom: 1px solid #414c63; 

  &--login {
    background: svg-load('user.svg', fill=#414c63, width=30px, height=30px);
    background-repeat: no-repeat;
    background-position: left bottom 10px;
  }
  &--password {
    background: svg-load('key.svg', fill=#414c63, width=30px, height=30px);
    background-repeat: no-repeat;
    background-position: left bottom 10px;
  }
}

.login__form-btn {
  display: flex;
  justify-content: center;
}

.login__form-wrapper {
  width: 100%;
  margin-left: 40px;
  opacity: 0.5;
}

.login__form-input {
  border: none;
  font-size: 24px;
}
</style>