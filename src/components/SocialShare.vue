<template>
   <list-item-group title="Social" :items="$options.social" />
</template>
<script>
   import ListItemGroup from "@/components/ListItemGroup.vue"
   import config from "@/config"
   
   export default {
      components: { ListItemGroup },
      social: config.Social
   }
</script>