<template>
  <div ref="wrapper" class="webgl">
    <canvas ref="canvas" class="webgl-canvas"></canvas>
    <div ref="marker" class="webgl-marker"></div>
  </div>
</template>

<script>
import { WebGL } from './js/webgl';

export default {
  data() {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {
      webgl: null,
    };
  },
  watch: {
    '$route.name'(to, from) {
      // url変更を検知して背景色や文字を設定
      this.webgl.pageTransition(to);
    },
  },
  mounted() {
    // canvas要素を渡す。
    this.webgl = new WebGL({
      $wrapper: this.$refs.wrapper,
      $canvas: this.$refs.canvas,
    });
    this.webgl.init(this.$route.name, this.$refs.marker);
  },
};
</script>

<style lang="scss" scoped>
.webgl {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  pointer-events: none;
}

.webgl-canvas {
  width: 100%;
  height: 100%;
}

// canvas上のオブジェクトが参照するマーカーの役割
.webgl-marker {
  position: absolute;
  width: 40px;
  height: 40px;
}

.webgl-marker {
  top: 45%;
  right: 20%;
}
</style>
