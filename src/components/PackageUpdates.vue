<template>
   <list-item-group title="Package updates" :items="packageUpdates" button-more :load="loadMorePackageUpdates" :size="size" />
</template>
<script>
   import ListItemGroup from "@/components/ListItemGroup.vue"
   export default {
      props: {
         size: {
            type: Number,
            default: 10
         }
      },
      components: { ListItemGroup },
      data: () => ({
         packageUpdates: []
      }),
      methods: {
         loadMorePackageUpdates({ loaded, complete }) {
            let end = []
            const length = this.packageUpdates.length
            this.packageUpdates.push(...(end = this.$store.getters.packages.slice(length, Math.min(this.$store.getters.packages.length, length + this.size))))
            if (end.length) {
               loaded()
            } else {
               complete()
            }
         }
      }
   }
</script>