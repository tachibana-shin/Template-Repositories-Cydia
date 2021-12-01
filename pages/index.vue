<template>
  <AddRepo v-if="!inCydia" />

  <div class="alert alert-info text-center">
    <strong>{{ control.countPackage }}</strong> packages uploaded.<br />
    Last update at
    <strong>{{
      new Date(control.pkgLastUpdate[0].birthtimeMs).toLocaleDateString()
    }}</strong>
  </div>

  <SocialShare />
  <PackageUpdates />
  <AllSectionsFlatPkgs />
  <ThemeChange />
  <Copyright />
</template>

<script lang="ts" setup>
import control from "./control.json";
import inCydia from "../src/constants/inCydia";
</script>
