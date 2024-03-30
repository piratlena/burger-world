<template>
    <div class="product-list">
        <ProductCard
        v-for="product in products"
        :product="product"
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
    }
}
}

</script>

<style lang="scss" scoped>

</style>