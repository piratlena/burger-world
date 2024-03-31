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
            <span class="card__text">{{ product.ammount }}г</span>
            <MainButton :classes="['main-button__light']">Добавить</MainButton>
        </div>
       

    </div>
</template>

<script>

export default {
name: 'ProductCard',
props: {
    product: {
        type: Object,
        required: true
    }
}
}
</script>

<style lang="scss" scoped>

</style>