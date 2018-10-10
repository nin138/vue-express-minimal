import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const state = {
  count: 0,
  time: "",
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  setTime(state, time) {
    state.time = time;
  },
};

const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("increment");
        resolve();
      }, 1000);
    });
  },
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  setTime({ commit }) {
    return axios
      .get("/api/v1/time")
      .then(it => commit("setTime", it.data.time))
      .catch(e => commit("setTime", "ERROR:: " + e));
  },
};

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? "even" : "odd"),
};

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
