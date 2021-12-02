<template>
  <ListItemGroup
    :items="[
      {
        name: 'Back',
        icon: useAssetsIcon('back.png'),
        onclick: () => $router.back(),
      },
    ]"
  />

  <AddRepo v-if="!inCydia" />

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
import inCydia from "../constants/inCydia";
import { usePackageIcon } from "../uses/packageIcon";
import useAssetsIcon from "../uses/useAssetsIcon";

defineProps<{
  frontmatter: any;
}>();

const route = useRoute();

const sectionInfo = route.meta.packageInfo as SectionControlFile;
const items = sectionInfo.packages.map((pkg) => ({
  name: pkg.name,
  icon: usePackageIcon(pkg.icon, sectionInfo.name),
  version: pkg.lastVersion,
  to: inCydia
    ? `https://tachibana-shin.github.io/repo/package/${pkg.packageID}`
    : `/package/${pkg.packageID}`,
}));
</script>
