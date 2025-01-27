<script>
import { Bars3Icon } from "@heroicons/vue/24/solid";
export default {
  name: "Navbar",
  components: {
    Bars3Icon,
  },
};
</script>

<template>
  <nav class="navbar">
    <h2 class="navbar__title">Natural History Museum</h2>
    <button class="navbar__menu"><Bars3Icon /></button>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  @include flex($justify: space-between, $align: center);
  width: 100%;
  padding: 1rem;
  box-shadow: $shadow;
  background-color: black;
  color: white;

  &__title {
    padding: 0.4rem;
    border: 0.1rem solid $accent-color;
    @include smooth-hover();
  }

  &__menu {
    border: none;
    background: none;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    @include smooth-hover();
  }
}
</style>
