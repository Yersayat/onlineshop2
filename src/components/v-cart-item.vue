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
      {{ cart_item_data.quantity }}
      <button @click="deleteFromCart">Удалить</button>
    </div>

  </div>
</template>

<script>
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

}


</style>
