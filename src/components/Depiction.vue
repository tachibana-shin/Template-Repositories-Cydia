<template>
  <AddRepo package-id="com.example" v-if="inCydia" />

  <div id="google-translate" class="text-center" />

  <!-- check support -->
  <div>
    <h6 class="title">Package Example</h6>
    <div class="compatibility border-custom success" v-if="true">
      Compatible with 11, 12
    </div>
    <div class="compatibility border-custom" v-else>
      Not compatible with {{ iOSVersion }}
    </div>
    <p class="small text-secondary text-center mt-1">
      Current iOS {{ iOSVersion }}
    </p>
  </div>

  <!-- notify -->
  <div
    class="mt-1 alert"
    :class="[`alert-${message.type}`]"
    v-html="message.html"
  />

  <!-- description -->
  <div>
    <h6 class="title">Description</h6>
    <div class="my-1 py-12px px-15px bg-white text-black border-custom">
      <slot />
    </div>
  </div>

  <!-- screenshots -->
  <div class="mt-2rem screenshots" v-if="screenshots.length > 0">
    <h6 class="title">Screenshots</h6>
    <ul class="border-custom bg-white">
      <li>
        <div>
          <a v-for="item in screenshots" :href="item">
            <img :src="item" />
          </a>
        </div>
      </li>
    </ul>
  </div>

  <!-- this is open source -->
  <div v-if="sourceCode">
    <div
      class="mt-2rem alert alert-info text-center"
      style="background-color: #c5e8fe"
    >
      This tweak open source. <a href="sourceCode">Source Code</a>
    </div>
  </div>

  <!-- changelog -->
  <div class="mt-2rem changelog" v-if="changelog">
    <h6 class="title">Changelog</h6>
    <div v-html="changelog" />
  </div>

  <!-- package info -->
  <div class="mt-2rem package-info">
    <h6 class="title">Package info</h6>
    <ul class="properties">
      <li>
        <span class="propName">Name</span>
        <span class="value">{{ packageInfo.control.Name }}</span>
      </li>
      <li>
        <span class="propName">Package</span>
        <span class="value">{{ packageInfo.control.Package }}</span>
      </li>
      <li>
        <span class="propName">Author</span>
        <span class="value">{{ packageInfo.control.Author }}</span>
      </li>
      <li>
        <span class="propName">Version</span>
        <span class="value">{{ packageInfo.control.Version }}</span>
      </li>
      <li>
        <span class="propName">Section</span>
        <span class="value">{{ packageInfo.control.Section }}</span>
      </li>
      <li>
        <span class="propName">Depends</span>
        <span class="value">{{ packageInfo.control.Depends }}</span>
      </li>
      <li>
        <span class="propName">Description</span>
        <span class="value">{{ packageInfo.control.Description }}</span>
      </li>
      <li>
        <span class="propName">Conflicts</span>
        <span class="value">{{ packageInfo.control.Conflicts }}</span>
      </li>
      <li>
        <span class="propName">Architecture</span>
        <span class="value">{{ packageInfo.control.Architecture }}</span>
      </li>
      <li>
        <span class="propName">MD5sum</span>
        <span class="value">{{ packageInfo.MD5sum }}</span>
      </li>
      <li>
        <span class="propName">SHA256sum</span>
        <span class="value">{{ packageInfo.SHA256sum }}</span>
      </li>
      <li>
        <span class="propName">SHA512sum</span>
        <span class="value">{{ packageInfo.SHA512sum }}</span>
      </li>
      <li>
        <span class="propName">size</span>
        <span class="value">{{ packageInfo.size }}</span>
      </li>
      <li>
        <span class="propName">birthtimeMs</span>
        <span class="value">{{ packageInfo.birthtimeMs }}</span>
      </li>
      <li>
        <span class="propName">uid</span>
        <span class="value">{{ packageInfo.uid }}</span>
      </li>
      <li>
        <span class="propName">tag</span>
        <span class="value">{{ packageInfo.control.tag }}</span>
      </li>
      <li>
        <span class="propName">dev</span>
        <span class="value">{{ packageInfo.control.dev }}</span>
      </li>
    </ul>
  </div>

  <PackageUpdates />
  <SectionList />
  <SocialShare />
  <ThemeChange />
  <Copyright />
</template>

<script lang="ts" setup>
const { frontmatter } = defineProps<{ frontmatter: any }>();

import iOSVersion from "src/computed/iOSVersion";

const inCydia = navigator.userAgent.includes("Cydia");
const message = {
  type: "info",
  html: "notify",
};
const screenshots: string[] = [];
const sourceCode = false;
const changelog = "";
const packageInfo: any = {
  control: {}
}
</script>

<style lang="scss" scoped>
.compatibility {
  height: 2rem;
  line-height: 2rem;
  background-color: #ff0024;
  width: 100%;
  text-align: center;
  font-style: italic;
  border-radius: 4px;
  color: #f8f9fa;
  font-weight: 400;

  &.success {
    background-color: #00ff24;
    color: #000;
  }

  &.warning {
    background-color: #ffff24;
  }
}

.row {
  position: relative;
}

.screenshots {
  width: 100%;
  position: relative;

  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      div {
        white-space: nowrap;
        position: relative;
        width: 100%;
        padding: 12px 15px;
        overflow-x: scroll;
        overflow-y: hidden;
        margin-left: -5px;
        text-align: center;

        img {
          height: 320px;
          display: inline-block;
          object-fit: cover;
          margin-left: 5px;
        }
      }
    }
  }
}

.changelog {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      &:last-child {
        div {
          padding-bottom: 12px;
        }
      }

      div {
        padding: 12px 15px 0 15px;

        p {
          margin: 0;
          padding: 0;
          padding-left: 15px;

          .right {
            color: #777;
          }
        }
      }
    }
  }
}

.package-info {
  .right {
    flex: {
      basis: 0;
      shrink: 0;
      grow: 1;
    }

    text-align: right;
    padding-left: 5px;
    display: block;
    word-wrap: break-word;
    color: #777;
    display: block;
    white-space: wrap;
  }
}
</style>
