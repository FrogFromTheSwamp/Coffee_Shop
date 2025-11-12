<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">

            <link-nav-component 
                :link="links.header.link"
                :className="links.header.className"
            >
                <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
            </link-nav-component>

            <link-nav-component
            v-for="link in links.other"
            :key="link.id"
            :className="link.className" 
            :link="link.link" 
            :name="link.text" />
        </ul>
    </header>
</template>

<script>
import LinkNavComponent from '@/components/LinkNavComponent.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
    components: { LinkNavComponent },

    data() {
        return {
            links: {
                header: {
                    id: uuidv4(),
                    link: '/',
                    icon: 'Logo.svg',
                    className: 'header__item'
                },

                other: [
                    {
                        id: uuidv4(),
                        text: 'Our coffee',
                        link: '/our-coffee',
                        className: 'header__item'
                    },
                    {
                        id: uuidv4(),
                        text: 'For your pleasure',
                        link: '/goods-page',
                        className: 'header__item'
                    },
                    {
                        id: uuidv4(),
                        text: 'Contact us',
                        link: '/contacts',
                        className: 'header__item'
                    },
                ]
            }
        }
    }
}
</script>
