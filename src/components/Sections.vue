<template>
  <ListItemGroup name="Sections" :items="items" />
</template>

<script lang="ts" setup>
  import list from "/pages/section/list.json"
  import { usePackageIcon } from "../uses/packageIcon"

  const items = list.map(item => {
    return {
      name: item.name,
      icon: usePackageIcon(null, item.name),
      to: item.to
    }
  })
</script>