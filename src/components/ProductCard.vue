<template>
    <div :class="classItem" @click="onEmmit(cardItem.id)">
        <img :src="cardItem.image" :alt="cardItem.image">
        <div class="best__item-title">
            {{ cardItem.name }}
        </div>
        <div class="best__item-price">{{ cardItem.price }}</div>
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