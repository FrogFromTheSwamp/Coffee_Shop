<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <link-nav-component 
                            :link="links.footer.link" 
                            :className="links.footer.className"
                        >
                        <img :src="require(`@/assets/logo/${links.footer.icon}`)" :alt="links.footer.icon">
                        </link-nav-component>
                        <link-nav-component v-for="link in links.other" :key="link.id" :className="links.footer.className"
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

export default {
    components: { LinkNavComponent },
    computed: {
        links() {
            return this.$store.getters["getFooterLinks"]
        }
    }
}
</script>