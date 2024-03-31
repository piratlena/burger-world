<template>
    <div class="cart">
        <div class="cart__top">
           <h2>Корзина</h2> 
           <div class="cart__top-ammount"><span>4</span></div>
        </div>
        <div class="divider"/>
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
 name: 'Cart'
}
</script>

<style lang="scss" scoped>

</style>