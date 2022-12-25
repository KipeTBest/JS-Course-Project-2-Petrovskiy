<template>
  <div class="home">
    <Video></Video>
    <div class="information">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-3 information__first-col">
          <h1>Watch Company</h1>
          <hr>
          <h6 class="information__first-col__txt"><b>Director:</b> Rick Sanchez</h6>
          <h6 class="information__first-col__txt"><b>Chief master:</b> Bart Simpson</h6>
          <h6 class="information__first-col__txt"><b>Master:</b> Bender</h6>
          <h6 class="information__first-col__txt"><b>Designer:</b> Kirill Petrovskiy</h6>
          <h6 class="information__first-col__txt"><b>Manager:</b> Patrick</h6>
        </div>
        <div class="col-md-7 information__second-col">
          <h6>
            Our company has been manufacturing luxury watches since 1788. During this time,
            we have grown from one modest store in the Universiade Village to an international
            organization with stores in every major capital of the world. Our craftsmen make
            products by hand, carefully following all quality standards, so that the end customer
            likes the product. Ready-made works are provided at your choice, but you can order a
            personal work from the masters, where you yourself will participate in the design process,
            select the necessary functions, as well as the materials from which the watch will be made.
          </h6>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="products">
        <h2>Our Products</h2>
        <hr style="width: 800px; margin-left: 22.5%">
      </div>
    </div>
    <div class="products-grid">
      <Product v-for="product in allProducts" :key="product.id" :data="product" @submit="addToCart"></Product>
    </div>
  </div>
</template>

<script>
import Video from "@/components/Video.vue";
import Product from "@/components/Product.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    Video,
    Product,
  },
  computed: {
    ...mapGetters([
        "allProducts"
    ])
  },
  methods: {
    ...mapActions([
        "fetchProducts",
        "fetchCart"
    ]),
    addToCart(data) {
      this.fetchCart(data);
    }
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style lang="scss">
.products-grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
}
.information {
  padding-top: 100px;
  text-align: center;
  margin: 20px;
  &__first-col__txt {
    text-align: left;
  }
  &__second-col {
    margin-top: 50px;
  }
}
.products {
  text-align: center;
}
</style>