import { isClient } from "@vueuse/core";

const storage = ref(
  isClient ? JSON.parse(localStorage.getItem("store") || "{}") : {}
);

watch(
  storage,
  () => {
    localStorage.setItem("store", JSON.stringify(storage.value));

    if (storage.value.darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  {
    deep: true,
  }
);

export function useLocalStorage(): any {
  return storage.value;
}
