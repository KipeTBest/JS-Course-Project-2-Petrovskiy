import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        updateProducts: (state, products) => {
            state.products = products;
        },
        updateCart: (state, product) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.id === product.id) {
                        isProductExists = true;
                        item.num++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        removeFromCart: (state, index) => {
            state.cart.splice(index, 1)
        },
        removeCart: (state, index) => {
            if (state.cart[index].num > 1) {
                state.cart[index].num--
            }
        },
        addCart: (state, index) => {
            state.cart[index].num++
        },
        clearCart: (state) => {
            state.cart.splice(0, state.cart.length);
        }
    },
    actions: {
        fetchProducts({commit}) {
            return axios('http://localhost:3000/products', {method: "GET"})
                .then((products) => {
                    commit('updateProducts', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        fetchCart({commit}, product) {
            commit('updateCart', product);
        },
        deleteCart({commit}, index) {
            commit('removeFromCart', index);
        },
        addC({commit}, index) {
            commit('addCart', index)
        },
        removeC({commit}, index) {
            commit('removeCart', index)
        },
        makeOrder({commit}) {
            commit('clearCart')
        }
    },
    getters: {
        allProducts(state) {
            return state.products;
        },
        allCartProducts(state) {
            return state.cart;
        }
    }
})

export default store;