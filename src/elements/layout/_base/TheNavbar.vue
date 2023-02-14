<template>
  <nav id="navigation" role="navigation">
    <ul>
      <li
        v-for="navItem in NavData"
        v-bind:key="navItem.title"
        :class="{ isSelected: navItem.to === route.path }"
      >
        <a :href="navItem.to">{{ navItem.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { NavData } from "@/constants/data";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
