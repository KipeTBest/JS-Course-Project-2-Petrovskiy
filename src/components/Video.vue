<template>
  <div class="background_img">
      <video
          autoplay
          loop
          class="d-block w-100 back-video"
          src="../assets/videos/home_video.mp4"
          type="video/mp4"
      ></video>
    <div class="overlay">
      <h1 class="text">Watches <p>for women and men</p></h1>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Video"
}
</script>

<style lang="scss">
.background_img {
  width: 100%;
  height: 90vh;
  color: white;
  font-family: "Roboto", sans-serif;
}
.back-video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.overlay {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  position: absolute;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.text {
  padding-top: 22.5%;
}
p {
  font-size: 24px;
}
</style>