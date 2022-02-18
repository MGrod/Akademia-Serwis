import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: {
      cars: [
        {
          id: 1,
          name: "Audi",
          prices: 50000
        },
        {
          id: 2,
          name: "BMW",
          prices: 100000
        },
        {
          id: 3,
          name: "BENTLEY",
          prices: 400000
        },
        {
          id: 4,
          name: "Ferrari",
          prices: 350000
        },
      ]
    },
    engine: {
      engine: [
        {
        id: 5,
        name: "2.0",
        prices: 5000
        },
      {
        id: 6,
        name: "2.5",
        prices: 7500
        },
      {
        id: 7,
        name: "3.0",
        prices: 10000
        },
      {
        id: 8,
        name: "5.0",
        prices: 30000
        },
      ]
    },
    color: {
      color: [
        {
        id: 9,
        name: "czarny",
        prices: 2000
        },
      {
        id: 10,
        name: "biały",
        prices: 2500
        },
      {
        id: 11,
        name: "czerwony",
        prices: 3500
        },
      {
        id: 12,
        name: "zielony",
        prices: 3500
        },
      ]
    },
    type: {
      type: [
        {
        id: 13,
        name: "Coupe",
        prices: 20000
        },
      {
        id: 14,
        name: "Sedan",
        prices: 25000
        },
      {
        id: 15,
        name: "Kabriolet",
        prices: 40000
        },
      {
        id: 16,
        name: "Kombi",
        prices: 35000
        },
      ]
    },
    transmission: {
      transmission: [
        {
        id: 17,
        name: "manualna",
        prices: 5000
        },
      {
        id: 18,
        name: "automatyczna",
        prices: 7500
        },
      ]
    },
  },
  mutations: {

  },
  actions: {
  
  },
  modules: {

  },
});
