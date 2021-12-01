<template>
  <component :is="component" :frontmatter="frontmatter" />
</template>

<script lang="ts" setup>
defineProps<{
  frontmatter: any
}>()

let component = "Unknown"

if (route.path.startsWith("/package/")) {
  component = "Depiction"
} else if (route.path.startsWith("/section/")) {
  component = "Section"
}
</script>