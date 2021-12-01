<template>
  <AddRepo />

  <div class="alert alert-info text-center">
    <strong>{{ control.countPackage }}</strong> packages uploaded.<br />
    Last update at
    {{ new Date(control.pkgLastUpdate[0].birthtimeMs).toLocaleDateString() }}
  </div>

  <SocialShare />
  <PackageUpdates />
  <AllSectionsFlatPkgs />
  <ThemeChange />
  <Copyright />
</template>

<script lang="ts" setup>
import control from "./control.json";
</script>
