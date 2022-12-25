<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg head">
      <div class="container">
        <a class="navbar-brand logo" href="/">Watch</a>
        <div class="collapse collapse-fontsize navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(menu, index) in headerMenuList" :key="index">
              <router-link class="nav-link active" aria-current="page" :to="menu.path">
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

  // eslint-disable-next-line
  name: "Header",
  data() {
    return {
      headerMenuList: [
        {name: 'Home', path: '/'},
        {name: 'Cart', path: '/cart'},
        {name: 'Profile', path: '/profile'}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../assets/layouts/index.scss";
.logo {
  padding-right: 1068px;
}
.collapse-fontsize {
  font-size: 16px;
}
.head {
  display: flex;
  background: rgba(255, 255, 255, 0.85);
  position: fixed;
  z-index: 10;
  width: 100%;
}
</style>