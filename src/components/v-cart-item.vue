<template>
  <div class="v-cart-item">


    <div class="v-cart-item__info">
      <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="">
      <p>sdsdf</p>
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>

    </div>
    <div class="v-cart-item__quantity">
      <p>Количество:</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span> <!-- 1st -->
        {{ cart_item_data.quantity }}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
      
      <button @click="deleteFromCart">Удалить</button>
    </div>

  </div>
</template>

<script>

 // 4th action ->> v-cart.vue

export default {
  name: 'v-cart-item',
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  
  methods: {
   
    incrementItem() { //new add 2nd -> store.js
      this.$emit('increment')
},
    decrementItem() { //new add
      this.$emit('decrement')
},
    
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },

  
  
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image {
    width: 200px;
  }

  .quantity__btn {
    cursor: pointer;
  }

}


</style>
