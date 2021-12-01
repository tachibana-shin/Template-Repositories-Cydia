<template>
  <Depiction
    v-if="route.path.startsWith(`/package/`)"
    :frontmatter="frontmatter"
  />
  <Section
    v-else-if="route.path.startsWith(`/section/`)"
    :frontmatter="frontmatter"
  />
  <Unknown v-else :frontmatter="frontmatter" />
</template>

<script lang="ts" setup>
defineProps<{
  frontmatter: any;
}>();

const route = useRoute();
</script>
