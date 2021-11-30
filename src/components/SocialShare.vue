<template>
  <ListItemGroup name="Social" :items="items" />
</template>

<script lang="ts" setup>
const items = [
  {
    icon: "src/assets/icons/github.png",
    name: "Github",
    to: "#",
  },
  {
    icon: "src/assets/icons/reddit.png",
    name: "Reddit",
    to: "#",
  },
  {
    icon: "src/assets/icons/twitter.png",
    name: "Follow Tachibana Shin",
    to: "#",
  },
];
</script>
