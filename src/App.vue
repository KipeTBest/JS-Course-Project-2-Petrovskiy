<template>
  <main-container>
    <template v-slot:header>
      <Header></Header>
    </template>
    <main>
      <router-view></router-view>
    </main>
    <template v-slot:footer>
      <Footer></Footer>
    </template>
  </main-container>
</template>

<script>
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    MainContainer,
    Header,
    Footer
  }
}
</script>
