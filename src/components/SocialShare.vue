<template>
  <ListItemGroup :name="noName ? undefined : `Social`" :items="items" />
</template>

<script lang="ts" setup>
defineProps<{
  noName?: boolean;
}>();

const items = [
  {
    icon: "/src/assets/icons/github.png",
    name: "Github",
    to: "#",
  },
  {
    icon: "/src/assets/icons/reddit.png",
    name: "Reddit",
    to: "#",
  },
  {
    icon: "/src/assets/icons/twitter.png",
    name: "Follow Tachibana Shin",
    to: "#",
  },
  {
    icon: "/src/assets/icons/ipa.png",
    name: "Tools Jailbreak",
  },
];
</script>
