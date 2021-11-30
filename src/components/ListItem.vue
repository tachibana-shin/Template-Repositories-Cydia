<template>
   <ul class="list-item bg-white text-black border-custom">
      <li class="no-skip" v-if="buttonBack">
         <a href="javascript:void(0)" @click="$emit('back'); state = 0" class="item__child text-blue hover__bg-grey before__bg-secondary">
            <span :style="{ backgroundImage: 'url(' + require('@/assets/back.png') + ')' }" class="icon"></span>
            <p> Quay lại </p>
         </a>
      </li>
      <li v-for="(item, index) in items" :key="index" :class="{ 'no-icon': noIcon }" v-if="item">
         <div v-if="useSlot" class="before__bg-secondary">
            <slot name="item" :index="index" :value="item" :renderValue="renderValue" />
         </div>
         <a v-else-if="item.href" :href="item.href" class="item__child text-blue hover__bg-grey before__bg-secondary">
            <span :style="{ 'background-image': 'url(' + getIcon(item) + ')', width: item.NoIcon || noIcon ? 0 : undefined }" class="icon"></span>
            <p :class="{ 'ml-0': item.NoIcon }">
               {{ item.filterName ? item.filterName(item) : item.Name }}
            </p>
         </a>
         <span class="item__child text-blue hover__bg-grey before__bg-secondary" :is="item.Package ? 'router-link' : 'span'" :to="item.Package ? '/package/' + item.Package + '@' + item.Version : undefined" @click="$emit('click-item', item); state = multiple ? 0 : state" v-else>
            <span :style="{ 'background-image': 'url(' + getIcon(item) + ')', width: item.NoIcon || noIcon ? 0 : undefined }" class="icon"></span>
            <p :class="{ 'ml-0': item.NoIcon }">
               {{ item.filterName ? item.filterName(item) : item.Name }}
               <small v-if="item.Version"> v{{ item.Version }} </small>
            </p>
         </span>
      </li>
      <li class="no-skip" v-if="buttonMore && state < 2">
         <a href="javascript:void(0)" @click="loadMore" class="item__child text-blue hover__bg-grey before__bg-secondary">
            <span style="width: 0"></span>
            <p class="ml-0">
               <i class="spinner spinner-border spinner-border-sm" v-show="state == 1"></i>
               {{ message }}
            </p>
         </a>
      </li>
   </ul>
</template>
<script>
   export default {
      props: {
         items: {
            type: [Object, Array],
            requred: true
         },
         buttonMore: Boolean,
         buttonBack: Boolean,
         load: Function,
         multiple: Boolean,
         noIcon: Boolean,
         useSlot: Boolean,
         size: Number
      },
      data: () => ({
         message: "Xem them...",
         state: 0
      }),
      watch: {
         items: {
            handler({ length }) {
               if (length <= this.size && this.state < 2) {
                  this.loadMore()
               }
            },
            immediate: true
         }
      },
      methods: {
         loadMore() {
            this.message = "Dang tai"
            this.state = 1
            this.load && this.load({
               loaded: () => [this.message, this.state] = ["Xem them...", 0],
               complete: () => [this.message, this.state] = ["Khong con nua", 2]
            })
         },
         getIcon({ Icon, Section }) {
            if (Icon && !Icon.match(/^file:\/\//)) {
               return Icon
            } else {
               try {
                  return require(`@/assets/${encodeURIComponent(Section)}.png`)
               } catch (e) {
                  console.warn("Can't find icon.")
                  return require("@/assets/unknown.png")
               }
            }
         },

         renderValue(text) {
            text = (text + "").replace(/^\s|\s$/g, "")
            const tmp = text.match(/<([^\s]+)>$/)
            let email = tmp && tmp[1]
            text = text.replace(/<([^\s]+)>$/, "")

            if (email && email.match(/@[\w\d]+$/)) {
               email = `mailto://${email}`
            }

            return {
               text,
               email
            }
         }
      }
   }
</script>
<style lang="scss" scoped>
   %logo-cydia {
      width: 2em;
      height: 2em;
      border-radius: 20%;
      display: inline-block;

      background: {
         repeat: no-repeat;
         position: center;
         size: 100%;
      }

      ;
   }

   .list-item {
      margin: 5px 0;
      padding: 6px 0;
      list-style: none;

      li {
         margin: 0;
         padding: 0;

         &.no-icon>*:before {
            left: 0;
         }

         &.no-icon:last-child>*:before {
            display: none;
         }

         &.no-icon>*:after {
            display: none;
         }

         &>.item__child {
            text-decoration: none;
         }

         &>* {
            //margin-left: 15px;
            //padding: 12px 15px;
            padding: 6px 15px;
            min-height: (40rem / 16);
            box-sizing: border-box;
            position: relative;

            &:first-child {
               border-top-left-radius: 4px;
               border-top-right-radius: 4px;
            }

            &:last-child {
               border-bottom-left-radius: 4px;
               border-bottom-right-radius: 4px;
            }

            &:after {
               content: "";
               display: block;
               background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NSIgaGVpZ2h0PSI5OSI+PHBvbHlnb24gcG9pbnRzPSIzNC43LDQ5LjcgMCw4NC40IDE1LjEsOTkuNSA2NC44LDQ5LjcgNDkuNywzNC43IDE1LjEsMCAwLDE1LjEiIHN0eWxlPSJmaWxsOiNjN2M3Y2MiLz48L3N2Zz4=);
               position: absolute;
               top: 50%;
               right: 0;
               transform: translate(-100%, -50%);
               width: 10px;
               height: 13px;
               background-size: 100% 100%;

            }

            position: relative;
            overflow: hidden;
            vertical-align: middle;
            display: flex;
            align-items: center;
            box-sizing: border-box;

            &:before {
               content: "";
               position: absolute;
               height: 1px;
               width: 100%;
               bottom: 0;
               left: (2em + 30 / 16);
            }

            .icon {
               @extend %logo-cydia;
               background-image: url("~@/assets/unknown.png");
            }

            p {
               white-space: nowrap;
               margin: 0 0 0 15px;
               padding: 0;
               display: inline-block;
               overflow: hidden;
               text-overflow: ellipsis;
               word-wrap: break-word;

               small {
                  display: block;
               }
            }
         }

         &:last-child *:before {
            display: none
         }

         &.no-skip *:after {
            display: none
         }
      }
   }
</style>