<template>
  <ListItemGroup name="Theme" :items="items" />
</template>

<script lang="ts" setup>
import { useLocalStorage } from "src/uses/localStorage"

const localStorage = useLocalStorage()

const items = [
  {
    name: "Change Theme",
    onclick() {
      const oldVal = Boolean(Number(localStorage[darkmode]));

      localStorage["darkmode"] = !oldVal + "");
    },
  },
];
</script>
