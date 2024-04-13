<template>
  <div class="cart">
    <div class="cart__top">
      <h3>Корзина</h3>
      <div class="cart__top-amount"><span>4</span></div>
    </div>
    <div class="divider"/>
    <div class="cart__item"
         v-for="item in cartList"
         :key="item.id"
    >
      <div class="cart__item-inner">
        <div class="cart__item-left">
          <img :src="item.img"/>
          <div class="cart__item-info">
            <div class="cart__item-top">
              <span class="cart__item-title">{{ item.title }}</span>
              <span class="cart__item-weight">{{ item.weight }}</span>
            </div>
            <span class="cart__item-price">{{ item.price }}</span>
          </div>
        </div>
        <div class="cart__item-btn">
          <span
              class="cart__item-dec"
              @click.prevent="decreaseAmount(item.id)"
          >
            -
          </span>
          <span class="cart__item-amount">{{amount}}</span>
          <span
              class="cart__item-inc"
              @click.prevent="increaseAmount(item.id)"
          >
            +
          </span>
        </div>
      </div>
      <div class="divider"/>
    </div>
    <div class="cart__bottom">
      <div class="cart__bottom-price">
        <span>Итого</span>
        <span class="total">{{ total}}</span>
      </div>
      <MainButton class="cart__btn" :classes="['main-button__orange']"
      >
        Оформить заказ
      </MainButton>
      <div class="cart__bottom-delivery">
        <NuxtImg src="/icons/delivery.svg"/>
        <span>Бесплатная доставка</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      amount: 0,
      total: 0
    }
  },
  props: {
    cartList: {
      type: Array,
      require: true
    },
  },
  methods: {
    decreaseAmount(id) {
      this.cartList.forEach(item => {
        if (item.id === id) {
          if(this.amount >= 1) {
            this.amount -= 1
            this.countTotalPrice(item.price, this.amount)
            return item.amount = this.amount
          } else {
            this.amount = 0
            this.countTotalPrice(item.price, this.amount)
            item.amount = this.amount
          }
        }
      })
    },
    increaseAmount(id) {
      this.cartList.forEach(item => {
        if(item.id === id) {
          this.amount += 1
          this.countTotalPrice(item.price, this.amount)
          return item.amount = this.amount
        }
      })
    },
    countTotalPrice(price, amount) {
      this.total = price * amount
    }
  }
}
</script>

<style lang="scss" scoped>

</style>