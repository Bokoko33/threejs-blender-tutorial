<template>
  <div class="page">
    <Decoration ref="decoration" />
    <client-only>
      <WebGL />
    </client-only>
    <Nuxt />
    <div class="page-inner">
      <TheTitle ref="title" />
    </div>
    <TheNavigation ref="navigation" />
  </div>
</template>

<script>
export default {
  watch: {
    '$route.name'(to, from) {
      // url変更を検知して背景色や文字を設定
      this.$store.commit('setCurrentColors', to);

      this.$refs.decoration.scaleEllipse();
      this.$refs.navigation.changeColor();
      this.$refs.title.changeColor();
      this.$refs.title.staggerAnimation();
    },
  },
  created() {
    this.$store.commit('setCurrentColors', this.$route.name);
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.page-inner {
  position: relative;
  width: 80vw;
  max-width: 1280px;
  height: 100vh;
  max-height: 800px;
}
</style>
