import Vue from "vue"


const previews = {
  template: "#slider-previews",
  props: ["works", "currentWork"],
  // computed: {
  //   slicedWorks() {
  //     return [...this.works].slice(0, 3);
  //   }
  // }
}

const btns = {
  template: "#slider-btns"
}

const display = {
  template: "#slider-display",
  components: { previews, btns },
  props: ["works", "currentWork", "currentIndex"]
}

const tags = {
  template: "#slider-tags",
  props: ["tags"]
}

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ')
    }
  }
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data: () => ({
    works: [],
    disabled: false,
    currentIndex: 0
  }),
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoop(value);
    }
  },
  methods: {
    beforeCb() {
      this.disabled = true;
    },
    enterWork(el) {
      console.log('enter', el);
      const list = el.closest("ul");

      el.classList.add("outsided");
      list.classList.add('transition');
      list.style.transform = "translateX(el.style.offsetWidth)"

      list.addEventListener("transitionend", () => done())
    },
    afterCb(el) {
      const list = el.closest("ul");

      el.classList.remove("outsided");
      list.style.transform = "translateX(0px)";

      this.disabled = false;
    },
    leaveCb(el, done) {
      el.classList.add('fade');

      el.addEventListener('transitionend', () => done())
    },
    makeInfiniteLoop(value) {
      const worksAmount = this.works.length - 1;
      if (value < 0) this.currentIndex = worksAmount;
      if (value > worksAmount) this.currentIndex = 0;
    },
    makeArrFromRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;
        return item
      })
    },
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          this.works.push(this.works[0]);
          this.works.shift();
          break;
        case "prev":
          this.currentIndex--;
          const lastWork = this.works[this.works.length -1];
          this.works.unshift(lastWork);
          // удаляем последний элемент
          this.works.pop();
          break;
      }
    },
    displaySlide(i) {
    }
  },
  created() {
    const data = require('../scripts/data/works.json');
    this.works = this.makeArrFromRequiredImages(data);
  }
})
