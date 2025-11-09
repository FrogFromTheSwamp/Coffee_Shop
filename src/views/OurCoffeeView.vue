<template>
    <main>
        <div class="banner coffepage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <title-component
                :title="infoOurCoffee[0].title"
                />
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
                            <input id="filter" type="text" placeholder="start typing here..."
                                class="shop__search-input">
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="shop__filter">
                            <div class="shop__filter-label">
                                Or filter
                            </div>
                            <div class="shop__filter-group">
                                <button class="shop__filter-btn">Brazil</button>
                                <button class="shop__filter-btn">Kenya</button>
                                <button class="shop__filter-btn">Columbia</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card 
                            classItem="shop__item"
                            :name="coffee[0].title"
                            :price="coffee[0].price"
                            :image="coffee[0].image"
                            />
                            <product-card 
                            classItem="shop__item"
                            :name="coffee[1].title"
                            :price="coffee[1].price"
                            :image="coffee[1].image"
                            />
                            <product-card 
                            classItem="shop__item"
                            :name="coffee[2].title"
                            :price="coffee[2].price"
                            :image="coffee[2].image"
                            />
                            <product-card 
                            classItem="shop__item"
                            :name="coffee[3].title"
                            :price="coffee[3].price"
                            :image="coffee[3].image"
                            />
                            <product-card 
                            classItem="shop__item"
                            :name="coffee[4].title"
                            :price="coffee[4].price"
                            :image="coffee[4].image"
                            />
                            <product-card 
                            classItem="shop__item"
                            :name="coffee[5].title"
                            :price="coffee[5].price"
                            :image="coffee[5].image"
                            />
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

export default {
    components: { NavBarComponent, ProductCard, TitleComponent },
    data() {
        return {
            infoOurCoffee: [
                {
                    title: 'Our Coffee'
                }
            ],
            coffee: [
                {
                    id: 0,
                    image: 'coffee-1.jpg',
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73
                },
                {
                    id: 1,
                    image: 'coffee-2.jpg',
                    title: 'Presto Coffee Beans 1kg',
                    price: 15.99
                },
                {
                    id: 2,
                    image: 'coffee-3.jpg',
                    title: 'AROMISTICO Coffee 1kg',
                    price: 6.99
                },
                {
                    id: 3,
                    image: 'coffee-1.jpg',
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73
                },
                {
                    id: 4,
                    image: 'coffee-2.jpg',
                    title: 'Presto Coffee Beans 1kg',
                    price: 15.99
                },
                {
                    id: 5,
                    image: 'coffee-3.jpg',
                    title: 'AROMISTICO Coffee 1kg',
                    price: 6.99
                }
            ]
        }
    }
}
</script>