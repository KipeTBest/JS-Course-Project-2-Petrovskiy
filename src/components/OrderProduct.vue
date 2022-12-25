<template>
  <div class="order">
    <Modal v-if="isNeed" @closeModal="closeModal">
      <div class="modal-head">
        <span>{{ data.name + ' ' + data.class }}</span>
        <i class="material-icons modal-head__close-button" @click="closeModal">cancel</i>
      </div>
      <div class="modal-main">
        <div class="modal-main__image-container">
          <img :src="require('../assets/images/pr_' + data.image)" class="modal-main__image-container__image">
        </div>
        <div class="modal-main__description-container">
          <div class="modal-main__description-container__description">
          <span>
            <hr>
            <h6>Material</h6>
            {{ data.description }}
            <hr>
            <h6>Price</h6>
            {{ data.price + '$' }}
            <hr>
            <h6>Color</h6>
            {{ data.color }}
            <hr>
            <h6>Weight</h6>
            {{ data.weight + 'kg' }}
            <hr>
          </span>
          </div>
        </div>
      </div>
    </Modal>
    <div class="orderProduct"  @click="openModal">
      <div class="product-container">
        <div class="product-container__image-container">
          <img :src="require('../assets/images/pr_' + data.image)" class="product-container__image-container__image">
        </div>
        <div class="product-container__data-container">
          <ul class="product-container__data-container__items">
            <li class="product-container__data-container__item">{{ data.price + ' $' }}</li>
            <li class="product-container__data-container__item">{{ data.num }}</li>
            <li class="product-container__data-container__item">{{ data.num * data.price + ' $' }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  // eslint-disable-next-line
  name: "OrderProduct",
  components: {
    Modal
  },
  data() {
    return {
      isNeed: false
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  methods: {
    closeModal() {
      this.isNeed = false;
    },
    openModal() {
      this.isNeed = true;
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
      padding-right: 160px;
      font-size: 20px;
      &:first-child {
        padding-left: 240px;
      }
      &:last-child {
        padding-right: 0;
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