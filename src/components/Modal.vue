<template>
  <div class="modal__bg" ref="modal">
    <div class="modal">
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Modal",
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  },
  mounted() {
    let window = this;
    document.addEventListener('click', function (item) {
      if (item.target === window.$refs['back']) {
        window.closeModal()
      }
    });
  }
}
</script>

<style lang="scss">
.modal {
  padding: 25px;
  width: 802px;
  height: 602px;
  display: inline-block;
  background: white;
  border-radius: 30px;
  transform: translate3d(44%, 50%, 0);
  top: -30%;
  border: black solid 1px;
  &__bg {
    width: 100%;
    height: 328%;
    position: absolute;
    display: flex;
    background: rgba(0, 0, 0, 0.6);
    z-index: 11;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>