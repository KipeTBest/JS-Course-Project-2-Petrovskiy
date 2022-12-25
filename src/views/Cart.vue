<template>
  <div class="cart">
    <div class="cart-container">
      <div class="cart-container__header">
        <h2 class="cart-container__header-text">YOUR CART</h2>
        <button @click="goToOrder" class="cart-container__header-button">ORDERS</button>
      </div>
      <div class="cart-container__items-info">
        <hr>
        <ul class="cart-container__items">
          <li class="cart-container__item">ITEM</li>
          <li class="cart-container__item">PRICE</li>
          <li class="cart-container__item">COUNT</li>
          <li class="cart-container__item">TOTAL PRICE</li>
        </ul>
        <hr>
      </div>
      <div class="cart-container__products">
        <CartProduct
            v-for="(cartProduct, index) in allCartProducts"
            :key="cartProduct"
            :cart_product_data="cartProduct"
            @deleteFromCart="deleteFromCart(index)"
            @add="add(index)"
            @remove="remove(index)"
        ></CartProduct>
      </div>
      <hr>
      <div class="cart-container__footer">
        <span>SUBTOTAL </span>
        <span>{{ cartTotalCost + ' $' }}</span>
        <button @click="doOrder" class="cart-container__footer-button">CHECKOUT</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct";
import { mapGetters, mapActions } from "vuex";

export default {
  // eslint-disable-next-line
  name: "Cart",
  components: {
    CartProduct
  },
  data() {
    return {
      ls_data: []
    }
  },
  computed: {
    ...mapGetters([
        "allCartProducts"
    ]),
    cartTotalCost() {
      if (this.allCartProducts.length) {
        let result = []

        for (let item of this.allCartProducts) {
          result.push(item.price * item.num)
        }
        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result;
      } else return 0;
    }
  },
  methods: {
    ...mapActions([
        'deleteCart',
        'addC',
        'removeC',
        'makeOrder'
    ]),
    deleteFromCart(index) {
      this.deleteCart(index);
    },
    add(index) {
      this.addC(index);
    },
    remove(index) {
      this.removeC(index);
    },
    goToOrder() {
      this.$router.push('/order')
    },
    isEmpty(obj) {
      for (let i in obj) {
        // eslint-disable-next-line
        if (obj.hasOwnProperty(i)) {
          return false;
        }
      }
      return true;
    },
    doOrder() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (this.isEmpty(user)) {
        alert('Register before ordering.');
      } else {
        if (user.email.length > 0 && user.password.length > 0) {
          const data = localStorage.getItem('order');
          if (data !== undefined) {
            this.ls_data = JSON.parse(data);
            // eslint-disable-next-line
            if (this.isEmpty(this.ls_data)) {
              localStorage.setItem('order', JSON.stringify(this.allCartProducts))
            } else {
              Array.prototype.push.apply(this.ls_data, this.allCartProducts);
              localStorage.setItem('order', JSON.stringify(this.ls_data));
            }
          } else localStorage.setItem('order', JSON.stringify(this.allCartProducts))
          this.makeOrder();
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cart {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 55px;
  &-container {
    display: block;
    margin: 0 auto;
    width: 1200px;
    &__header {
      width: 1200px;
      height: 60px;
      display: inline-block;
      &-text {
        float: left;
      }
      &-button {
        background: black;
        color: white;
        font-size: 25px;
        border-radius: 5px;
        display: block;
        float: right;
        &:hover {
          background: gray;
          transition: 0.4s;
        }
      }
    }
    &__items {
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      display: inline-block;
      padding-right: 40px;
      &:first-child {
        padding-right: 800px;
        padding-left: 50px;
      }
      &:last-child {
        padding-right: 0;
      }
    }
    &__footer {
      text-align: center;
      display: block;
      padding-right: 10px;
      padding-left: 1000px;
      padding-bottom: 20px;
      &-button {
        background: black;
        color: white;
        font-size: 25px;
        border-radius: 5px;
        &:hover {
          background: gray;
          transition: 0.4s;
        }
      }
    }
  }
}
</style>