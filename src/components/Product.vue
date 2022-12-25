<template>
  <div class="home">
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
          <div class="modal-main__description-container__control">
            <button class="modal-main__description-container__control-submit" @click="submit">ADD TO CART</button>
          </div>
        </div>
      </div>
    </Modal>
    <div class="grid-item" @click="openModal">
      <div class="grid-item__inner">
        <img :src="require('../assets/images/pr_' + data.image)" class="grid-item__img">
        <div class="grid-item__title">
          <span>{{ data.price + '$'}} <br>{{ data.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  // eslint-disable-next-line
  name: "Product",
  components: {
    Modal,
  },
  emits: [
      "add"
  ],
  props: {
    data: {
      type: Object,
      default() {
        return {
        }
      }
    }
  },
  data() {
    return {
      isNeed: false,
    }
  },
  methods: {
    openModal() {
      this.isNeed = true;
    },
    closeModal() {
      this.isNeed = false;
    },
    submit() {
      this.$emit('submit', this.data);
    }
  }
}
</script>

<style lang="scss">
.grid-item {
  margin: 0;
  padding: 0;
  &__inner {
    position: relative;
    display: flex;
    cursor: pointer;
    overflow: hidden;
  }
  &__inner:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    z-index: 2;
    transition: all 0.4s ease;
    content: '';
  }
  &__inner:hover:before {
    opacity: 1;
  }
  &__title {
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-family: Arial, sans-serif;
    font-size: 24px;
    color: white;
    overflow: hidden;
    z-index: 10;
  }
  &__title > span {
    display: block;
    transform: translateY(30px);
    transition: transform 0.4s ease;
  }
  &__img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    transition: all 0.4s ease;
  }
}
.grid-item__inner:hover .grid-item__title > span {
  transform: translateY(0);
}
.grid-item__inner:hover .grid-item__img {
  transform: scale(1.05);
}
.modal-main {
  width: 750px;
  height: 450px;
  padding: 0;
  margin: 0;
  &__image-container {
    float: left;
    width: 450px;
    height: 450px;
    display: block;
    &__image {
      width: 100%;
      height: 100%;
    }
  }
  &__description-container {
    float: left;
    width: 300px;
    height: 450px;
    display: block;
    &__control {
      justify-content: center;
      text-align: center;
      font-size: 14px;
      &-submit {
        color: white;
        background: black;
        &:hover {
          background: gray;
          transition: 0.4s;
        }
      }
    }
  }
}
.modal-head {
  width: 750px;
  height: 75px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  &__close-button {
    position: absolute;
    right: 25px;
    cursor: pointer;
  }
}
.modal-head > span {
  font-size: 35px;
}
</style>