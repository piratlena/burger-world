<template>
  <div class="product-list">
    <ProductCard
        v-for="product in products"
        :product="product"
        @set-cart-product="$emit('setCartProduct', product.id)"
    />
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      cartProductList: [],
      cartItem: null,
    }
  },
}

</script>

<style lang="scss" scoped>

</style>