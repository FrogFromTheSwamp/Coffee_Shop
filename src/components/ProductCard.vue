<template>
    <div :class="classItem" @click="onEmmit(cardItem.id)">
        <img :src="require(`@/assets/img/${cardItem.image}`)" :alt="cardItem.image">
        <div class="best__item-title">
            {{ cardItem.title }}
        </div>
        <div class="best__item-price">{{ cardItem.price | addCurrency }}</div>
    </div>
</template>

<script>
export default {
    props: {
        classItem: {
            type: String,
            required: false
        },
        cardItem: {
            type: Object,
            required: true
        }
    },
    methods: {
        onEmmit(id) {
            this.$emit('onNavigate', id)
        }
    }
}
</script>