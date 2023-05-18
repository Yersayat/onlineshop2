<template>
  <div class="v-cart-item">


    <div class="v-cart-item__info">
      <img :src="require('../assets/images/' + cart_item_data.image)" alt="">
      <p>sdsdf</p>
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>

    </div>
    <div class="v-cart-item__quantity">

      <button>Удалить</button>
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
  mounted() { },
  methods: {}
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.v-cart-item img {
  width: 200px;

}
</style>
