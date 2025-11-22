<template>
    <main>
        <div class="banner coffepage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <title-component :title="'Our Coffee'" />
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <form action="#" class="shop__search">
                            <label class="shop__search-label" for="filter">Looking for</label>
                            <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input"
                                @input="onSearch($event)">
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="shop__filter">
                            <div class="shop__filter-label" @click="onSort('', '')">
                                Or filter
                            </div>
                            <div class="shop__filter-group">
                                <button class="shop__filter-btn" @click="onSort('Brazil', 'country')">Brazil</button>
                                <button class="shop__filter-btn" @click="onSort('Kenya', 'country')">Kenya</button>
                                <button class="shop__filter-btn"
                                    @click="onSort('Columbia', 'country')">Columbia</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card v-for="coffee_card in coffee" :key="coffee_card.id" classItem="shop__item"
                                :cardItem="coffee_card" @onNavigate='navigate' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import { navigate } from '@/mixins/navigate';
import debounce from 'debounce';

export default {
    components: { NavBarComponent, ProductCard, TitleComponent },
    computed: {
        coffee() {
            return this.$store.getters['getCoffee']
        }
    },
    data() {
        return {
            name: 'coffee'
        }
    },
    mixins: [navigate],
    mounted() {
        fetch('http://localhost:3000/coffee')
            .then(res => res.json())
            .then(data => {
                this.$store.dispatch('setCoffeeData', data)
            })
    },

    methods: {
        onSearch: debounce(function(event) {
            const searchValue = event.target.value.toLowerCase().trim();
            fetch('http://localhost:3000/coffee')
                .then(res => res.json())
                .then(allCoffee => {
                    const filteredCoffee = allCoffee.filter(coffee =>
                        coffee.name.toLowerCase().includes(searchValue)
                    );
                    this.$store.dispatch('setCoffeeData', filteredCoffee);
                });
        }, 500),

        onSort(value, name) {
            console.log(value)
            let url = `http://localhost:3000/coffee?${name}=${value}`
            console.log(url)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.$store.dispatch('setCoffeeData', data)
                })
        }
    }

}
</script>