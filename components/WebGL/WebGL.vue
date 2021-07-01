<template>
  <div class="webgl-canvas-warpper">
    <canvas ref="canvas" class="webgl-canvas"></canvas>
  </div>
</template>

<script>
import { WebglCanvas } from './js/webgl-canvas';

export default {
  data() {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {
      webglCanvas: null,
    };
  },
  watch: {
    '$route.name'(to, from) {
      // url変更を検知して背景色や文字を設定
      this.webglCanvas.pageTransition(to);
    },
  },
  mounted() {
    // canvas要素を渡す。
    this.webglCanvas = new WebglCanvas({
      $canvas: this.$refs.canvas,
    });
    this.webglCanvas.init(this.$route.name);
  },

  destroyed() {
    // canvasを作ったり壊したりする前提の場合はここに処理停止する処理を書く（今回省略）。
  },
  methods: {
    // この中にthree.jsの処理をばりばり書かない。
  },
};
</script>

<style lang="scss" scoped>
.webgl-canvas-warpper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  z-index: -1;
}

.webgl-canvas {
  width: 100%;
  height: 100%;
}
</style>
