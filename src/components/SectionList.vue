<template>
  <ListItemGroup name="Sections" :items="items" />
</template>

<script lang="ts" setup>
const items = new Array(10).fill(0).map(() => ({
  name: "Package Example",
  icon: "/src/assets/icons/Addons.png",
  to: "#",
}));
</script>
