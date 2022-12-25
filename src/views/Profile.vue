<template>
  <div class="profile">
    <div class="profile-container">
      <div class="profile-container__header">
        <h2>YOUR PROFILE</h2>
        <hr>
      </div>
      <div class="profile-container__main">
        <div class="container mt-4">
          <div class="row">
            <div class="col-sm-5 mx-auto">
              <form @submit.prevent>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input v-model="information.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input v-model="information.password" type="password" class="form-control" id="password">
                </div>
                  <button @click="save" class="form__container-button" type="submit">SAVE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  // eslint-disable-next-line
  name: "Profile",
  components: {
  },
  data() {
    return {
      information: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    save() {
      localStorage.setItem('user', JSON.stringify(this.information));
    }
  }
}
</script>

<style lang="scss">
.profile {
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
  }
}
.form {
  &__container-button {
    background: black;
    color: white;
    font-size: 18px;
    border-radius: 5px;
    &:hover {
      background: gray;
      transition: 0.4s;
    }
  }
}
</style>