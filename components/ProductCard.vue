<template>
  <div class="card">
    <div class="card__top">
      <NuxtImg
          :src="product.img"
          :alt="product.alt"/>
      <div class="card__info">
        <span class="card__price">{{ product.price }}₽</span>
        <span class="card__title">{{ product.title }}</span>
      </div>
    </div>
    <div class="card__bottom">
      <span class="card__text">{{ product.weight }}г</span>
      <MainButton
          :classes="['main-button__light']"
          @click="setCartProduct(product.id)"
      >
        Добавить
      </MainButton>
    </div>
  </div>
</template>

<script>

import {products} from "../data.js";

export default {
  name: 'ProductCard',
  emits: ['setCartProduct'],
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cartProduct: null,
      products: products
    }
  },
  methods: {
    setCartProduct(product) {
      this.cartProduct = product
      this.$emit('setCartProduct', this.cartProduct)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>