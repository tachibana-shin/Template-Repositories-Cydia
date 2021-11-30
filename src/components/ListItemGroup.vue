<template>
  <h6 class="title" v-if="name">{{ name }}</h6>

  <ul class="list-item bg-white border-custom">
    <li v-for="(item, index) in items" :key="index">
      <component
        :is="item.to ? (item.to.includes(`://`) ? `a` : `router-link`) : `span`"
        :to="!item.to?.includes(`://`) && item.to"
        :href="item.to"
        :target="item.to?.includes(`://`) && `_blank`"
        class="item__child d-flex justify-content-between align-items-center hover__bg-grey before__bg-secondary"
        @click="item.onclick"
      >
        <div class="d-flex align-items-center">
          <span
            :style="{
              'background-image': `url(${item.icon})`,
            }"
            class="icon"
            v-if="item.icon"
          />
          <p>
            {{ item.name }}
            <small v-if="item.version">{{ item.version }}</small>
          </p>
        </div>
        <span class="text-secondary mr-4" v-if="item.after">{{
          item.after
        }}</span>
      </component>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  name?: string;
  items: {
    name: string;
    icon?: string;
    to?: string;
    version?: string;
    after?: string;
    onclick?: () => void;
  }[];
}>();
</script>

<style lang="scss" scoped>
@use "sass:math";

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
}

.list-item {
  padding: 0;
  list-style: none;

  li {
    margin: 0;
    padding: 0;

    & > .item__child {
      text-decoration: none;
      color: inherit;
    }

    & > * {
      //margin-left: 15px;
      //padding: 12px 15px;
      padding: 6px 15px;
      min-height: math.div(40rem, 16);
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
        left: (2em + math.div(30, 16));
      }

      .icon {
        @extend %logo-cydia;
        background-image: url("src/assets/icons/unknown.png");
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
      display: none;
    }
  }
}
</style>
