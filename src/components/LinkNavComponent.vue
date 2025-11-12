<template>
    <li :class="className">
        <router-link :to="link">{{name}} <slot></slot></router-link>
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
            required: false
        },
        className: {
            type: String,
            required: true
        }
    }
}
</script>