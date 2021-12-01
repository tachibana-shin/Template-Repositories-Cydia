<template>
  <template v-for="section in sections" :key="section.name">
    <ListItemGroup
      :name="section.name"
      :items="section.packages.concat([{
          name: 'More...',
          icon: '/src/assets/icons/moreinfo.png' as any,
          to: section.to,
        },
    ])"
    />
  </template>
</template>

<script lang="ts" setup>
import { usePackageIcon } from "../uses/packageIcon";
import listSections from "/pages/section-list-pkgs.json";

const sections = listSections.slice(0, 7).map((section) => {
  return {
    ...section,
    packages: section.packages.map((pkg) => {
      return {
        name: pkg.name,
        icon: usePackageIcon(pkg.icon, section.name),
        to: `/package/${pkg.packageID}`,
      };
    }),
  };
});
</script>
