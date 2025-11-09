<template>
    <li :class="className">
        <router-link :to="link">{{name}}</router-link>
    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: true
        }
    }
}
</script>