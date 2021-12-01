<template>
  <div class="container-fluid py-4">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/alert";
@import "bootstrap/scss/utilities/flex";
@import "bootstrap/scss/utilities/spacing";
@import "bootstrap/scss/utilities/display";
@import "bootstrap/scss/utilities/text";

html {
  .bg-white {
    background-color: #fff;
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
  .title {
    color: rgb(109, 109, 114);
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .border-custom {
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  body {
    background-color: #f5f5fa;
  }
  font: 16px -apple-system-font, ".Helvetica NeueUI", "Helvetica Neue",
    sans-serif;

  &.dark {
    body {
      background-color: #161616;
      color: #fff;
    }

    .bg-white {
      background-color: #000 !important;
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
}
</style>
