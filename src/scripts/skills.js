import Vue from "vue";

const skillsItem = {
  template: "#skills-item",
  props: ["skillName", "skillPercent"],
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dasharray')
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);

      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
}

const skillsRow = {
  template: "#skills-row",
  components: { skillsItem },
  props: ["skill"]
}

new Vue({
  el: "#skills-component",
  template: "#skills",
  data: () => ({
    skills: []
  }),
  components: { skillsRow },
  created() {
    this.skills = require('./data/skills.json');
  }
})