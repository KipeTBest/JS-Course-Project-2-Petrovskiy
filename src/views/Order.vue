<template>
  <div class="order">
    <div class="order-container">
      <div class="order-container__header">
        <h2>YOUR ORDER</h2>
      </div>
      <div class="order-container__items-info">
        <hr>
        <ul class="order-container__items">
          <li class="order-container__item">ITEM</li>
          <li class="order-container__item">PRICE</li>
          <li class="order-container__item">COUNT</li>
          <li class="order-container__item">TOTAL PRICE</li>
        </ul>
        <hr>
      </div>
      <div v-if="order.length" class="order-container__products">
        <OrderProduct
            v-for="product in order"
            :key="product.id"
            :data="product"
        ></OrderProduct>
      </div>
      <hr>
      <div class="order-container__footer">
        <button @click="clear" class="order-container__footer-clear">CLEAR ORDER</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import OrderProduct from "@/components/OrderProduct";
export default {
  // eslint-disable-next-line
  name: "Order",
  components: {
    OrderProduct
  },
  data() {
    return {
      order: []
    }
  },
  mounted() {
    const data = localStorage.getItem('order');
    if (data !== undefined) {
      data ? this.order = JSON.parse(data) : null
    }
  },
  methods: {
    clear() {
      localStorage.removeItem('order');
      this.order.splice(0, this.order.length)
    }
  }
}
</script>

<style scoped lang="scss">
.order {
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
    }
    &__items {
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      display: inline-block;
      padding-right: 130px;
      &:first-child {
        padding-right: 630px;
        padding-left: 45px;
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
      &-clear {
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