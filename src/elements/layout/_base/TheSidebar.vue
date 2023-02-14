<template>
  <aside id="aside" role="sidebar">
    <section class="user_info_section">
      <figure>
        <img src="@/assets/images/profile.jpg" alt="user-profile" />
      </figure>
      <div class="user_contact">
        <div class="user_info">
          <span>Contact</span>
          <button
            ref="menuBoxControlEl"
            class="btn_menu"
            :class="{ visible }"
            @click="handleClickMenu"
          />
        </div>
        <div class="menu_box" :class="{ visible }">
          <ul>
            <li
              v-for="contactItem in ContactData"
              v-bind:key="contactItem.title"
            >
              <a :href="contactItem.to">{{ contactItem.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="side_list_section">
      <ul>
        <li>All</li>
        <li>
          HTML
          <button />
        </li>
        <li>
          Javascript
          <button />
        </li>
      </ul>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ContactData } from "@/constants/data";
import { useClickOutside } from "@/common/utils";

const visible = ref(false);
const menuBoxControlEl = ref(null);
const handleClickMenu = () => {
  visible.value = !visible.value;
};
useClickOutside(menuBoxControlEl, () => {
  visible.value = false;
});
</script>

<style lang="scss" scoped></style>
