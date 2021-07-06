<template>
  <div ref="title" class="title">
    <p ref="tag" class="title-tag">
      #Three.js #WebGL #blender #3D #creativecoding
    </p>
    <h1 class="title-main">
      Three.js and Blender<br />
      Tutorial
    </h1>
    <p ref="sub" class="title-sub">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    this.$refs.title.style.color = this.$store.state.currentColors.sub1;
    // this.$refs.tag.style.color = this.$store.state.currentColors.sub1;
    // this.$refs.sub.style.color = this.$store.state.currentColors.sub1;
  },
  methods: {
    changeColor() {
      gsap.to(this.$refs.title, {
        color: this.$store.state.currentColors.sub1,
        duration: 2,
        ease: 'Power3.easeInOut',
      });
      // gsap.to(this.$refs.sub, {
      //   color: this.$store.state.currentColors.sub1,
      //   duration: 2,
      //   ease: 'Power3.easeInOut',
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.05em;
}
.title {
  padding-top: 15.6vh;
  color: var(--current-color-sub1);
}

.title-tag {
  font-size: 14px;
}

.title-main {
  font-size: min(5.8vw, 80px);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  margin-top: 16px;
}

.title-sub {
  position: relative;
  width: min(38vw, 500px);
  line-height: 1.8;
  margin-top: 56px;
  font-size: 16px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 4em;
    height: 1px;
    background-color: currentColor;
    left: 0;
    top: -8px;
  }
}
</style>
