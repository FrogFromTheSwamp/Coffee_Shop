<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <link-nav-component 
                            :link="links.header.link" 
                            :className="links.header.className"
                        >
                        <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
                        </link-nav-component>
                        <link-nav-component v-for="link in links.other" :key="link.id" :className="link.className"
                            :link="link.link" :name="link.text" />
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
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
                    icon: 'Logo_black.svg',
                    className: "footer__item"
                },
                other: [
                    {
                        id: uuidv4(),
                        text: 'Our coffee',
                        link: '/our-coffee',
                        className: "footer__item"
                    },
                    {
                        id: uuidv4(),
                        text: 'For your pleasure',
                        link: '/goods-page',
                        className: "footer__item"
                    },
                    {
                        id: uuidv4(),
                        text: 'Contact us',
                        link: '/contacts',
                        className: "footer__item"
                    }
                ]

            }
        }
    }
}
</script>