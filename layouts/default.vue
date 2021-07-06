<template>
  <div :style="styles" class="page">
    <Decoration ref="decoration" />
    <client-only>
      <WebGL />
    </client-only>
    <Nuxt />
    <div class="page-inner">
      <TheNavigation ref="navigation" />
      <TheTitle ref="title" />
    </div>
  </div>
</template>

<script>
import TheNavigation from '~/components/common/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  computed: {
    styles() {
      return {
        '--current-color-base': this.$store.state.currentColors.base,
        '--current-color-sub1': this.$store.state.currentColors.sub1,
        '--current-color-sub2': this.$store.state.currentColors.sub2,
      };
    },
  },
  watch: {
    '$route.name'(to, from) {
      // url変更を検知して背景色や文字を設定
      this.$store.commit('setCurrentColors', to);

      this.$refs.decoration.scaleEllipse();
      this.$refs.navigation.changeColor();
      this.$refs.title.changeColor();
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
}

.page-inner {
  position: relative;
  width: 80vw;
  max-width: 1280px;
  height: 84vh;
}
</style>
