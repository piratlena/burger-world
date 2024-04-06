<template>
  <div class="cart">
    <div class="cart__top">
      <h3>Корзина</h3>
      <div class="cart__top-amount"><span>4</span></div>
    </div>
    <div class="divider"/>
    <div class="cart__item">
       <div class="cart__item-inner">
         <div class="cart__item-left">
           <NuxtImg src="/burger-1.png" class="cart__item-img"/>
           <div class="cart__item-info">
             <div class="cart__item-top">
               <span class="cart__item-title">Супер сырный</span>
               <span class="cart__item-weight">512г</span>
             </div>
             <span class="cart__item-price">550₽</span>
           </div>
         </div>
         <div class="cart__item-btn">
           <span class="cart__item-dec">-</span>
           <span class="cart__item-amount">1</span>
           <span class="cart__item-inc">+</span>
         </div>
       </div>
      <div class="divider"/>
    </div>
    <div class="cart__bottom">
      <div class="cart__bottom-price">
        <span>Итого</span>
        <span class="total">1279₽</span>
      </div>
      <MainButton class="cart__btn" :classes="['main-button__orange']">Оформить заказ</MainButton>
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
  props: {
    order: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>