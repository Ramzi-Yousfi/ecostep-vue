import { defineStore } from 'pinia'
// Import axios to make HTTP requests
export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        products: [],
        loading: false,
        error: null
    }),
    getters: {
        getProducts() {
            return this.products
        },
        getLoading() {
            return this.loading
        },
        getError() {
            return this.error
        }
    },
    actions: {
        async fetchProducts() {
            this.products = []
            this.loading = true
            try {
                this.products = await fetch('http://localhost:3000/products')
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async fetchOneProduct(id) {
            this.products = []
            this.loading = true
            try {
                this.products = await fetch(`http://localhost:3000/products/${id}`)
                    .then((response) => response.json())
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false
            }
        }

    }
})