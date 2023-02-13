<template>
  <aside id="aside">
    <h1 class="hidden_visible">sidebar</h1>
    <section class="user_info_section">
      <figure>
        <img src="" alt="user-profile" />
      </figure>
      <div class="user_contact">
        <div class="user_info">
          <span>김나영</span>
          <button class="btn_menu" @click="handleClickMenu" />
        </div>
        <div class="menu_box" :class="{ visible }">
          <ul>
            <li v-for="contactItem in ContactData" v-bind:key="contactItem">
              {{ contactItem }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ContactData } from "@/constants/data";

const visible = ref(false);
const handleClickMenu = () => {};
</script>

<style lang="scss" scoped></style>
