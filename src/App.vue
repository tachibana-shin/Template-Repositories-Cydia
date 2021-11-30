<template>
  <div id="app" :theme="darkmode ? 'dark' : 'light'">
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
const darkmode = computed<boolean>({
  get() {
    return Boolean(Number(localStorage.get("darkmode"))) ?? false;
  },
  set(v) {
    localStorage.set("darkmode", Number(v));
  },
});
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: block;
}

#app {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #f5f5fa;
  font: 14px -apple-system-font, ".Helvetica NeueUI", "Helvetica Neue",
    sans-serif;
  padding: 20px 0 35px;

  .bg-white {
    background-color: #fff;
  }

  .text-black {
    color: #000;
  }

  .text-blue {
    color: rgb(102, 128, 249);
  }

  .hover__bg-grey {
    &:hover {
      background-color: rgb(217, 217, 217);
    }
  }

  .before__bg-secondary {
    &:before {
      background-color: #c8c7cc;
    }
  }

  &[theme="dark"] {
    background-color: #161616;

    .bg-white {
      background-color: #000 !important;
    }

    .text-black {
      color: #fff !important;
    }

    .text-blue {
      color: #eee !important;
    }

    .hover__bg-grey {
      &:hover {
        background-color: rgb((255-217), (255-217), (255-217)) !important;
      }
    }

    .before__bg-secondary {
      &:before {
        background-color: rgb(55, 56, 51) !important;
      }
    }

    .border-custom {
      border-color: rgba(255, 255, 255, 0.2) !important;
    }
  }

  .title {
    color: rgb(109, 109, 114);
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .border-custom {
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .mt-2rem {
    margin-top: 2rem;
  }

  .py-12px {
    padding: {
      top: 12px;
      bottom: 12px;
    }
  }

  .px-15px {
    padding: {
      left: 15px;
      right: 15px;
    }
  }
}
</style>
