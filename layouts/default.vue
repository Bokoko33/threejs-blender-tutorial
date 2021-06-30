<template>
  <div>
    <TheNavigation />
    <Nuxt />
    <WebGL />
  </div>
</template>

<script>
import TheNavigation from '~/components/common/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
};
</script>
