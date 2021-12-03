<template>
  <ListItemGroup name="Theme" :items="items" />
</template>

<script lang="ts" setup>
import { useLocalStorage } from "../uses/localStorage";
import useAssetsIcon from "../uses/useAssetsIcon";

const localStorage = useLocalStorage();

const items = reactive([
  {
    name: "Change Theme",
    icon: useAssetsIcon("darkmode-light.png"),
    onclick() {
      const oldVal = localStorage.darkmode || false;

      localStorage.darkmode = !oldVal;
    },
  },
]);

watch(() => localStorage.darkmode, (v) => {
  items[0].icon = v ? useAssetsIcon("darkmode-dark.png") : useAssetsIcon("darkmode-light.png");
})
</script>
