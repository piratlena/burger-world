<template class="main-button">
    <button 
    class="main-button"
    :disabled="disabled"
    :class="{
        'main-button__orange': classes.includes('main-button__orange'),
        'main-button__light': classes.includes('main-button__light')
    }"
    >
        <slot/>
    </button>
</template>

<script>
export default {
name: "MainButton",
props: {
    classes: {
        type: Array,
        required: true
    },
    disabled :{
        type: Boolean,
        default: false
    }
}
}
</script>

<style lang="scss" scoped>

</style>