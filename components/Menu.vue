<template>
    <div class="menu">
       <CategoryTab
          v-for="category in categories">
           <NuxtImg 
           :src="category.image"
           :key="category.id"
           /> 
           <span>{{ category.name }}</span>
       </CategoryTab> 
    </div>
</template>

<script>
export default {
name: 'Menu',
data() {
    return {
        categories: [
            {id: '1', image: '/icons/burger.svg', name: 'Бургер'}, 
            {id: '2', image: '/icons/snack.svg', name: 'Закуски'}, 
            {id: '3', image: '/icons/hot-dog.svg', name: 'Хот-доги'},
            {id: '4', image: '/icons/hot-dog.svg', name: 'Комбо'},
            {id: '5', image: '/icons/kebab.svg', name: 'Шаурма'},
            {id: '6', image: '/icons/pizza.svg', name: 'Пицца'},
            {id: '7', image: '/icons/wock.svg', name: 'Вок'},
            {id: '8', image: '/icons/doughnut.svg', name: 'Десерты'},
            {id: '9', image: '/icons/souces.svg', name: 'Соусы'},
        ]
    }
}
}
</script>

<style lang="scss" scoped>

</style>