<template>
  <ListItemGroup
    :items="[
      {
        name: 'Back',
        icon: '/src/assets/icons/back.png',
        onclick: () => $router.back(),
      },
    ]"
  />

  <AddRepo :package-id="packageId" v-if="!inCydia" />

  <h6 class="title">Changelog: {{ name }}</h6>

  <slot />
</template>

<script lang="ts" setup>
import inCydia from "../constants/inCydia";

defineProps<{
  frontmatter: any;
}>();

const packageId = useRoute().path.match(/\/package\/([^/]+)\//)?.[1];
const name = ref<string>("");

import(/* @vite-ignore */`/pages/package/${packageId}/control.json`).then((res) => {
  name.value = res.default[0].control.Name;
});
</script>
