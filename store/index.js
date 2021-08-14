import jokesApi from '~/api/jokesApi'
export default {
  state: {
    loading: false,
    jokes: [],
    amount: 10,
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    LOAD_JOKES(state, payload) {
      state.jokes = payload
    },
  },
  actions: {
    async loadNewJokes({ state, commit }, queryObject) {
      commit('SET_LOADING', true)
      
      commit('LOAD_JOKES', await jokesApi.loadJokes(queryObject))
      commit('SET_LOADING', false)
    },
  },
}
