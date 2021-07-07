<template>
  <nav ref="nav" class="nav">
    <ul ref="list" class="nav-list">
      <li
        v-for="(link, index) in links"
        :key="index"
        ref="item"
        class="nav-item"
      >
        <NuxtLink class="nav-link" :to="link.href">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      links: [
        { text: 'HOME', href: '/' },
        { text: 'PAGE01', href: 'page01' },
        { text: 'PAGE02', href: 'page02' },
      ],
    };
  },
  mounted() {
    this.$refs.nav.style.backgroundColor = this.$store.state.currentColors.sub1;
    this.$refs.list.style.color = this.$store.state.currentColors.sub2;
  },
  methods: {
    changeColor() {
      gsap.to(this.$refs.nav, {
        backgroundColor: this.$store.state.currentColors.sub1,
        duration: 2,
        ease: 'Power3.easeInOut',
      });
      gsap.to(this.$refs.list, {
        color: this.$store.state.currentColors.sub2,
        duration: 2,
        ease: 'Power3.easeInOut',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  height: 60px;
  padding: 0 48px;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 999px;
  box-shadow: 0 0 16px rgba(#222, $alpha: 0.08);
}

.nav-list {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-align: center;

  &:not(:first-of-type) {
    margin-left: 56px;
  }
}
</style>
