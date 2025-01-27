<template>
  <Navbar />
  <SpacePage />
  <Footer />
</template>
<script>
import SpacePage from "@/components/SpacePage.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    SpacePage,
    Navbar,
    Footer,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}

body {
  overflow-x: hidden;
}
</style>
