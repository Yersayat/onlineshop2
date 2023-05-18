<template>
  <div class="v-catalog-item">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="">
    <p class="v-catalog-item__price">{{product_data.price}} тенге</p>
    <button 
    class="v-catalog-item__add_to_cart_btn btn" 
    @click="addToCart">
    Добавить в корзину
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }

    }
  },
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {  
    addToCart() {
      this.$emit('addToCart',this.product_data)
    }
  }
}
</script>

<style lang="scss">

.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image {
    width: 200px;
  }
}

</style>
