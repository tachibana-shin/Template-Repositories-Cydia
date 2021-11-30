<template>
  <ListItemGroup name="Tachibana Shin (たちばなしん) Repo" :items="list" />
  <p class="small text-center text-secondary mt-2">
    Repo: https://tachibana-shin.github.io/repo
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  packageId: string;
}>();

const list = [
  {
    icon: "/src/assets/icons/cydia7.png",
    name: "Open Cydia",
    to: props.packageId
      ? `cydia://url/https://cydia.saurik.com/api/share#?source=https://tachibana-shin.github.io/repo&package=${props.packageId}`
      : "cydia://url/https://cydia.saurik.com/api/share#?source=https://tachibana-shin.github.io/repo",
  },
];
</script>
