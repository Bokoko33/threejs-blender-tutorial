<template>
  <nav class="nav">
    <ul class="nav-list">
      <li v-for="(link, index) in links" :key="index" class="nav-item">
        <NuxtLink class="nav-link" :to="link.href">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Home', href: '/' },
        { text: 'page01', href: 'page01' },
        { text: 'page02', href: 'page02' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  color: #fff;
}
</style>
