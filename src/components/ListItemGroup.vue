<template>
   <div class="mt-2rem">
      <h6 class="title"> {{ title }} </h6>
      <list-item :items="items" @back="$emit('back')" @click-item="$emit('click-item', $event)" :class="classUl" :button-more="buttonMore" :button-back="buttonBack" :load="load" :multiple="multiple" :size="size" />
      <slot name="default" />
   </div>
</template>
<script>
   import ListItem from "@/components/ListItem.vue"
   export default {
      components: { ListItem },
      props: {
         title: {
            type: String,
            required: true
         },
         items: {
            type: [Array, Object],
            requred: true
         },
         buttonMore: Boolean,
         buttonBack: Boolean,
         load: Function,
         classUl: [Array, String, Object],
         multiple: Boolean,
         size: Number
      }
   }
</script>