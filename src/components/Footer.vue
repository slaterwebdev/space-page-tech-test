<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="footer">
    <p>© {{ currentYear }} NHM. All rights reserved.</p>
    <div class="footer__links">
      <a>Policies</a>
      <a>Terms</a>
      <a>Privacy</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include flex($justify: space-between, $align: center);
  width: 100%;
  padding: 1rem;
  box-shadow: $shadow;
  background-color: black;
  color: white;

  &__links {
    @include flex();
    gap: 1rem;

    a {
      @include smooth-hover();
    }
  }
}
</style>
