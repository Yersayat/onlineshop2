<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">
      Назад
    </div>
    </router-link>
    <h1>Korzina</h1>

    
    <v-cart-item 
    v-for="(item, index) in CART" 
    :key="item.article" 
    :cart_item_data="item" 
    @deleteFromCart="deleteFromCart(index)"
    @increment="increment(index)"
    @decrement="decrement(index)" 
    /> <!-- 5th action -->
    <div class="v-cart__total">
      <p class="total__name">Сумма :</p>
      <p> {{cartTotalCost}} тенге</p>
    </div>

  </div>
</template>

<script>

import vCartItem from './v-cart-item.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  data() {
    return {}
  },
  computed: {
       ...mapGetters([
            'CART'
        ]),
        cartTotalCost() {
          let result = []

          for(let item of this.CART) {
            result.push(item.price * item.quantity)
          }
          result = result.reduce(function (sum, el){
            return sum + el
          }, 0)

          return result
        }
    }, 
  
  methods: {
    ...mapActions([
    'DELETE_FROM_CART',
    //5th action
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)       //6th action  ->> store.js
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index) 
    }
  },

  mounted() { 
    console.log(this.CART)
  },
}
</script>

<style lang="scss">
.v-cart {
  &__total {
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    padding: $padding*2;
    display: flex;
    justify-content: center ;
    background-color: #26ae68;
    color: #ffffff;
    font-size: 20px;
  }
  .total__name {
    margin-right: $margin*2;

  }
}
</style>
