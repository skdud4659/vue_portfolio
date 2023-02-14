import { onBeforeUnmount, onMounted } from "vue";

export const useClickOutside = (el: any, fn: Function) => {
  if (!el) return;
  const listener = (e: any) => {
    if (e.target == el.value || e.composedPath().includes(el.value)) {
      return;
    }
    if (typeof fn == "function") {
      fn();
    }
  };

  onMounted(() => {
    window.addEventListener("click", listener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });
  return {
    listener,
  };
};
