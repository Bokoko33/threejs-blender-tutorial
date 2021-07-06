<template>
  <div class="deco">
    <div ref="ellipse00" class="deco-ellipse deco-ellipse--00"></div>
    <div ref="ellipse01" class="deco-ellipse deco-ellipse--01"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      bg: 0,
      ellipse: 1,
    };
  },
  mounted() {
    this.$refs.ellipse00.style.backgroundColor =
      this.$store.state.currentColors.base;
    this.$refs.ellipse01.style.backgroundColor =
      this.$store.state.currentColors.sub1;
  },
  methods: {
    // ２枚の円を入れ替えながら背景と右上の装飾を切り替える
    scaleEllipse() {
      const tl = gsap.timeline();
      tl.totalTime(2);
      tl.to(this.$refs[`ellipse0${this.ellipse}`], {
        scale: 4,
        duration: 1.2,
        ease: 'Power3.easeInOut',
      })
        .to(
          this.$refs[`ellipse0${this.ellipse}`],
          {
            backgroundColor: this.$store.state.currentColors.base,
            duration: 1.2,
            ease: 'Power3.easeIn',
          },
          '<'
        )
        .to(this.$refs[`ellipse0${this.bg}`], {
          scale: 0,
          duration: 0.01,
        })
        .to(this.$refs[`ellipse0${this.bg}`], {
          zIndex: 0,
          duration: 0.01,
        })
        .to(
          this.$refs[`ellipse0${this.ellipse}`],
          {
            zIndex: -1,
            duration: 0.01,
          },
          '<'
        )
        .to(this.$refs[`ellipse0${this.bg}`], {
          scale: 1,
          backgroundColor: this.$store.state.currentColors.sub1,
          duration: 0.7,
          ease: 'Back.easeOut',
          onComplete: () => {
            // 番号を入れ替え
            [this.bg, this.ellipse] = [this.ellipse, this.bg];
          },
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.deco {
  position: absolute;
  width: 100%;
  height: 100%;
}
.deco-ellipse {
  position: absolute;
  top: -20vw;
  right: -20vw;
  width: 60vw;
  height: 60vw;
  border-radius: 50%;
}

.deco-ellipse--00 {
  transform: scale(4);
  z-index: -1;
}

.deco-ellipse--01 {
  z-index: 0;
}
</style>
