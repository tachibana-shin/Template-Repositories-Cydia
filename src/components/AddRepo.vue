<template>
   <ListItemGroup title="Tachibana Shin (たちばなしん) Repo" :items="list">
      <p class="small text-center text-secondary mt-2">Repo: https://tachibana-shin.github.io/repo</p>
   </list-item-group>
</template>

<script lang="ts" setup>
const props = defineProps<{
  idPackage: string
}>()

const list = [{
  icon: ('src/assets/cydia7.png'),
  name: 'Open Cydia',
  href: props.idPackage ? `cydia://url/https://cydia.saurik.com/api/share#?source=https://tachibana-shin.github.io/repo&package=${props.idPackage}` : 'cydia://url/https://cydia.saurik.com/api/share#?source=https://tachibana-shin.github.io/repo'
}]
</script>