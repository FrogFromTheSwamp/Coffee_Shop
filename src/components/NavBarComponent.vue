<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <router-link :to="links[0].link">
                    <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">
                </router-link>
            </li>
            <li class="header__item">
                <router-link :to="links[1].link">{{ links[1].text}}</router-link>
            </li>
            <li class="header__item">
                <router-link :to="links[2].link">{{ links[2].text }}</router-link>
            </li>
            <li class="header__item">
                <router-link :to="links[3].link">{{ links[3].text }}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg'
                },
                {
                    id: 1,
                    text: 'Our coffee',
                    link: '/our-coffee',
                },
                {
                    id: 2,
                    text: 'For your pleasure',
                    link: '/goods-page',
                },
                {
                    id: 3,
                    text: 'Contact us',
                    link: '/contacts',
                },
            ]
        }
    }
}
</script>
