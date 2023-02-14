<template>
  <div>
    <TheSidebar />
    <main id="main">
      <RouterView class="main_contents" />
    </main>
    <TheNavbar />
  </div>
</template>

<script setup lang="ts">
import TheSidebar from "@/elements/layout/_base/TheSidebar.vue";
import TheNavbar from "@/elements/layout/_base/TheNavbar.vue";
</script>

<style lang="scss" scoped></style>
