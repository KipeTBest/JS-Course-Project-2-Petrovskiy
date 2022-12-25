<template>
  <div class="cartProduct">
    <div class="product-container">
      <div class="product-container__image-container">
        <img :src="require('../assets/images/pr_' + cart_product_data.image)" class="product-container__image-container__image">
      </div>
      <i class="material-icons product-container__data-container__delete" @click="deleteFromCart">close</i>
      <div class="product-container__data-container">
        <ul class="product-container__data-container__items">
          <li class="product-container__data-container__item">{{ cart_product_data.price + ' $' }}</li>
          <i class="material-icons product-container__data-container__item-add" @click="add">add</i>
          <li class="product-container__data-container__item">{{ cart_product_data.num }}</li>
          <i class="material-icons product-container__data-container__item-remove" @click="remove">remove</i>
          <li class="product-container__data-container__item">{{ cart_product_data.price * cart_product_data.num + ' $'}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: "CartProduct",
  props: {
    cart_product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
    add() {
      this.$emit('add')
    },
    remove() {
      this.$emit('remove')
    }
  }
}
</script>

<style scoped lang="scss">
.product-container {
  width: 1200px;
  height: 400px;
  display: flex;
  &__image-container {
    width: 400px;
    height: 400px;
    &__image {
      width: 100%;
      height: 100%;
    }
  }
  &__data-container {
    text-align: center;
    width: 800px;
    height: 400px;
    margin-top: 190px;
    &__items {
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      display: inline-block;
      font-size: 20px;
      &:first-child {
        padding-left: 400px;
        padding-right: 40px;
      }
      &:last-child {
        padding-right: 0;
        padding-left: 40px;
      }
      &-add, &-remove {
        margin: 10px;
        cursor: pointer;
      }
    }
    &__delete {
      position: absolute;
      right: 160px;
      cursor: pointer;
    }
  }
}
</style>