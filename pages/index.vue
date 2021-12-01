<template>
  <AddRepo />

  <div class="alert alert-info text-center">
    <strong>{{ control.countPackage }}</strong> packages uploaded. Last update at 0
  </div>

  <SocialShare />
  <PackageUpdates />
  <AllSectionsFlatPkgs />
  <ThemeChange />
  <Copyright />
</template>

<script lang="ts" setup>
import control from "./control.json"
</script>
