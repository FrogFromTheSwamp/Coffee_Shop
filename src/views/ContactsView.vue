<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <title-component :title="'Contact us'" />
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">

                        <form @submit.prevent="submit" action="#" class="mt-5">
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.name.$model" type="text" class="form-control" id="name-input">
                                    <span v-for="error in v$.name.$errors" :key="error.$uid" class="text-danger small">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.email.$model" type="email" class="form-control" id="email-input">
                                    <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-danger small">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="phone-input" class="mb-0">
                                        Phone
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.phone.$model" type="tel" class="form-control" id="phone-input">
                                    <span v-for="error in v$.phone.$errors" :key="error.$uid" class="text-danger small">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-start">
                                    <label for="pmessage" class="mb-3 mt-3 text-center">
                                        Your message
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <textarea v-model="v$.message.$model" class="form-control" name="message"
                                        id="message" rows="5" placeholder="Leave your comments here"></textarea>
                                    <span v-for="error in v$.message.$errors" :key="error.$uid"
                                        class="text-danger small">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row align-items-center">
                                <div class="col col-12 col-sm-9">
                                    <label for="agree-checkbox" class="mb-0 text-dark">
                                        I agree with the offer agreement
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-3">
                                    <div class="form-check d-flex justify-content-sm-end justify-content-start">
                                        <input v-model="v$.agree.$model" type="checkbox" class="form-check-input"
                                            id="agree-checkbox" style="width: 1.2em; height: 1.2em;">
                                    </div>
                                    <div class="mt-2">
                                        <span v-for="error in v$.agree.$errors" :key="error.$uid"
                                            class="text-danger small">
                                            {{ error.$message }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-outline-dark send-btn">Send us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';

import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'

import { minLength } from '@/validators/minLength';
import { checkboxValid } from '@/validators/checkboxValid';

export default {
    components: { NavBarComponent, TitleComponent },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            agree: false
        }
    },
    validations() {
        return {
            name: { required },
            email: { required, email },
            phone: {},
            agree: { required, checkboxValid: helpers.withMessage('Required element!', checkboxValid) },
            message: { required, maxLength: maxLength(20), minLength: helpers.withMessage('This value min 5 characters!', minLength) }
        }
    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return
            const message = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            }

            fetch('http://localhost:3000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })

            this.resetForm()
        },

        resetForm() {
            this.v$.$reset()
            this.name = ''
            this.email = ''
            this.phone = ''
            this.message = ''
            this.agree = false
        }
    }
}
</script>