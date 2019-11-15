<template lang="pug">
  .group__container
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
</template>