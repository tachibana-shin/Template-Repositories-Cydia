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
    to: "https://github.com/tachibana-shin",
  },
  {
    icon: "/src/assets/icons/reddit.png",
    name: "Reddit",
    to: "https://reddit.com",
  },
  {
    icon: "/src/assets/icons/twitter.png",
    name: "Follow Tachibana Shin",
    to: "https://twitter.com/tachib_shin",
  },
  {
    icon: "/src/assets/icons/ipa.png",
    name: "Tools Jailbreak",
    to: "https://tachibana-shin.github.io/jailbreak-tools"
  },
];
</script>
