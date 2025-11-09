<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <li class="footer__item">
                            <router-link :to="links[0].link">
                                <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">
                            </router-link>
                        </li>
                        <link-nav-component 
                        :className="links[1].className" 
                        :link="links[1].link"
                        :name="links[1].text" 
                        />
                        <link-nav-component 
                        :className="links[2].className" 
                        :link="links[2].link"
                        :name="links[2].text" 
                        />
                        <link-nav-component 
                        :className="links[3].className" 
                        :link="links[3].link"
                        :name="links[3].text" 
                        />
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>
<!-- footer d-flex flex-wrap -->
<!-- footer__item -->
<script>
import LinkNavComponent from '@/components/LinkNavComponent.vue';

export default {
    components: { LinkNavComponent },
    data() {
        return {
            links: [
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo_black.svg'
                },
                {
                    id: 1,
                    text: 'Our coffee',
                    link: '/our-coffee',
                    className: "footer__item"
                },
                {
                    id: 2,
                    text: 'For your pleasure',
                    link: '/goods-page',
                    className: "footer__item"
                },
                {
                    id: 3,
                    text: 'Contact us',
                    link: '/contacts',
                    className: "footer__item"
                },
            ]
        }
    }
}
</script>