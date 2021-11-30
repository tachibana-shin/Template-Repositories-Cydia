<template>
  <ListItemGroup name="Theme" :items="items" />
</template>

<script lang="ts" setup>
const items = [
  {
    name: "Change Theme",
    onclick() {
      const oldVal = Boolean(Number(localStorage.getItem("darkmode")));

      localStorage.setItem("darkmode", !oldVal + "");
    },
  },
];
</script>
