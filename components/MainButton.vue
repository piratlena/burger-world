<template class="main-button">
    <button 
    class="main-button"
    :disabled="disabled"
    :class="{
        '__orange': classes.includes('orange'),
        '__light': classes.includes('light')
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