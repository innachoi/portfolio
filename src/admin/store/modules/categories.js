export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.unshift(category);
    },
  },
  actions: {
    async addCategory({ commit }) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    },
    async fetchCategories({ commit }) {
      try {
        const { data } = await this.$axios.get("/categories");
        commit("SET_CATEGORIES", data);
        console.log(data);
      } catch (error) {
        
      }
    }
  }
};
