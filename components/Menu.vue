<template>
    <div class="menu">
        <div class="menu__nav">
            <CategoryTab
                v-for="category in categories">
                <NuxtImg 
                :src="category.image"
                :key="category.id"
                /> 
                <span>{{ category.name }}</span>
            </CategoryTab>
        </div>
        
        <div class="menu__content">
            <div class="menu__left">

            </div>
            <div class="menu__right">
                <h2>Бургеры</h2>
                <ProductList :products="products"/>
            </div>
            
        </div>
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
        ],

        products: [
        {
            type: 'burger', 
            id: '0', img: '/burger-1.png', 
            alt: 'Бургер Мясная Бомба', 
            title: 'Мясная бомба',
            price: '689',
            ammount: '520'
        },
        {
            type: 'burger', 
            id: '1', img: '/burger-2.png', 
            alt: 'Бургер Супер сырный', 
            title: 'Супер сырный',
            price: '550',
            ammount: '512'
        },
        {
            type: 'burger', 
            id: '2', img: '/burger-3.png', 
            alt: 'Бургер Сытный', 
            title: 'Сытный',
            price: '639',
            ammount: '580'
        },
        {
            type: 'burger', 
            id: '3', img: '/burger-4.png', 
            alt: 'Бургер Тяжелый удар', 
            title: 'Тяжелый удар',
            price: '480',
            ammount: '470'
        },
        {
            type: 'burger', 
            id: '4', img: '/burger-5.png', 
            alt: 'Бургер Вечная классика', 
            title: 'Вечная классика',
            price: '450',
            ammount: '450'
        },
        {
            type: 'burger', 
            id: '4', img: '/burger-6.png', 
            alt: 'Бургер Итальянский', 
            title: 'Итальянский',
            price: '560',
            ammount: '510'
        },
]
    }
}
}
</script>

<style lang="scss" scoped>

</style>