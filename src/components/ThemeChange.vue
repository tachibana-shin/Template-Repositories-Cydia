<template>
  <ListItemGroup name="Theme" :items="items" />
</template>

<script lang="ts" setup>
import { useLocalStorage } from "../uses/localStorage";
import useAssetsIcon from "../uses/useAssetsIcon";

const localStorage = useLocalStorage();

const items = [
  {
    name: "Change Theme",
    icon: computed<string>(() => {
      return localStorage.darkmode ? useAssetsIcon("darkmode-light.png") : useAssetsIcon("darkmode-dark.png"),
    }),
    onclick() {
      const oldVal = localStorage.darkmode || false;

      localStorage.darkmode = !oldVal;
    },
  },
];
</script>
