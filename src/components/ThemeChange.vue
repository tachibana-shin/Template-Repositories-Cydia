<template>
  <ListItemGroup name="Theme" :items="items" />
</template>

<script lang="ts" setup>
import { useLocalStorage } from "../uses/localStorage";

const localStorage = useLocalStorage();

const items = [
  {
    name: "Change Theme",
    onclick() {
      const oldVal = localStorage.darkmode || false;

      localStorage.darkmode = !oldVal;
    },
  },
];
</script>
