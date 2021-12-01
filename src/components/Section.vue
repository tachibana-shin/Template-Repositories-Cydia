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

  <AddRepo package-id="com.example" v-if="!inCydia" />

  <h6 class="title">{{ sectionInfo.name }}</h6>

  <div class="alert alert-info text-center">
    <strong>{{ sectionInfo.packages.length }}</strong> packages this in
    section.<br />
    Last update at
    {{
      new Date(
        sectionInfo.packages
          .sort((a, b) => a.birthtimeMs - b.birthtimeMs)
          .reverse()[0].birthtimeMs
      ).toLocaleString()
    }}
  </div>

  <ListItemGroup :items="items" />
</template>

<script lang="ts" setup>
import type { SectionControlFile } from "../../scripts/build-control";
import { usePackageIcon } from "../uses/packageIcon";

defineProps<{
  frontmatter: any;
}>();

const route = useRoute();

const inCydia = navigator.userAgent.includes("Cydia");
const sectionInfo = route.meta.packageInfo as SectionControlFile;
const items = sectionInfo.packages.map((pkg) => ({
  name: pkg.name,
  icon: usePackageIcon(pkg.icon, sectionInfo.name),
  version: pkg.lastVersion,
  to: `/package/${pkg.packageID}`,
}));
</script>
