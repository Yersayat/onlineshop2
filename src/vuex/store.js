import axios from 'axios';
import Vuex from 'vuex'


let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
   
  },
  mutations:{
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false
        state.cart.map(function(item) {
          if(item.article === product.article) {
            isProductExist = true
            item.quantity ++
            return
          }
        })
        if  (!isProductExist) {
          product.quantity = 1
          state.cart.push(product)
        }
      } else {
        product.quantity = 1
        state.cart.push(product)
      }
      
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1) // по количесву
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }

    },
  },
  actions:{
    async GET_PRODUCTS_FROM_API({commit}) {
      try {
        const products = await axios(
          'http://localhost:3000/products', {
          method: "GET"
        }
        );
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },

    INCREMENT_CART_ITEM({commit}, index) { //3rd action --> v-cart-item.vue
      commit('INCREMENT', index)
    },

    DECREMENT_CART_ITEM({commit}, index) { //7th action index
      commit('DECREMENT', index)
    },

    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  getters:{
    PRODUCTS(state) {
      return state.products;
    }, 
    CART(state) {
      return state.cart;
    }
  },
  
});

export default store;