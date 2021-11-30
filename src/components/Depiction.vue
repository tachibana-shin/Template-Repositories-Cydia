<template>
  <AddRepo package-id="com.example" v-if="!inCydia" />

  <div class="tweak-header">
    <img class="icon" :src="packageIcon" />
    <div class="info">
      <h1 class="name h6">{{ packageInfo.control.Name }}</h1>
      <div class="d-flex justify-content-between w-100">
        <h6 class="text-secondary">{{ packageInfo.control.Version }}</h6>
        <h6 class="text-secondary">{{ propertiesShow.Size }}</h6>
      </div>
    </div>
  </div>

  <ListItemGroup
    :items="[
      {
        name: `Author`,
        icon: `/src/assets/icons/email.png`,
        after: packageInfo.control.Author.replace(/<[^>]+>/y, ''),
        to: `mailto://${packageInfo.control.Author.match(/<([^>]+)>/y)?.[1]}`,
      },
    ]"
  />

  <SocialShare no-name />

  <div id="google-translate" class="text-center" />

  <!-- notify -->
  <div
    class="my-3 alert"
    :class="[`alert-${message.type}`]"
    v-html="message.html"
    v-if="message"
  />

  <!-- check support -->
  <div>
    <h6 class="title">Package Example</h6>
    <div class="alert alert-success text-center mb-0" v-if="true">
      Compatible with 11, 12
    </div>
    <div class="alert alert-danger text-center mb-0" v-else>
      Not compatible with {{ iOSVersion }}
    </div>
    <p class="small text-secondary text-center mt-1">
      Current iOS {{ iOSVersion }}
    </p>
  </div>

  <!-- description -->
  <div>
    <h6 class="title">Description</h6>
    <div class="bg-white border-custom">
      <slot />
    </div>
  </div>

  <!-- this is open source -->
  <div class="mt-3" v-if="sourceCode">
    <div class="alert alert-info text-center" style="background-color: #c5e8fe">
      This tweak open source.
      <a :href="sourceCode" target="_blank">Source Code</a>
    </div>
  </div>

  <!-- screenshots -->
  <div class="mt-3 screenshots" v-if="screenshots.length > 0">
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

  <!-- changelog -->
  <div class="mt-3" v-if="changelog">
    <h6 class="title">Changelog</h6>
    <div v-html="changelog" />
  </div>

  <!-- package info -->
  <div class="mt-3">
    <h6 class="title">Package info</h6>
    <ul class="properties bg-white">
      <li
        v-for="[propName, value] in Object.entries(propertiesShow)"
        :key="propName"
      >
        <span class="propName">{{ propName }}</span>
        <span class="value">{{ value }}</span>
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
import iOSVersion from "../computed/iOSVersion";
import filesize from "filesize";
import { format } from "timeago.js";

const { frontmatter } = defineProps<{ frontmatter: any }>();

const route = useRoute();

const inCydia = navigator.userAgent.includes("Cydia");
const message = frontmatter.notification;
const screenshots: string[] =
  frontmatter.screenshots || (route.meta.screenshots as string[]) || [];
const sourceCode = frontmatter["source-code"];
const changelog = route.meta.changelog;
const packageInfo: any = (route.meta.packageInfo as any)[0];
const propertiesShow = {
  Name: packageInfo.control.Name,
  Package: packageInfo.control.Package,
  Author: packageInfo.control.Author,
  Version: packageInfo.control.Version,
  Section: packageInfo.control.Section,
  Depends: packageInfo.control.Depends,
  // Description: packageInfo.control.Description,
  Conflicts: packageInfo.control.Conflicts,
  Architecture: packageInfo.control.Architecture,
  MD5sum: packageInfo.MD5sum,
  SHA256sum: packageInfo.SHA256sum,
  SHA512sum: packageInfo.SHA512sum,
  Size: filesize(packageInfo.size),
  "Last Update": format(packageInfo.birthtimeMs, "en_US", {
    relativeDate: Date.now(),
  }),
  uid: packageInfo.uid,
  tag: packageInfo.tag,
  dev: packageInfo.dev,
};

for (const key in propertiesShow) {
  if ((propertiesShow as any)[key] == null) {
    delete (propertiesShow as any)[key];
  }
}

const packageIcon = ref<string>("/src/assets/icons/unknown.png");
if (packageInfo.control.Icon?.match(/https?:\/\//)) {
  packageIcon.value = packageInfo.control.Icon;
} else {
  import(`/src/assets/icons/${packageInfo.control.Section}.png`).then((res) => {
    packageIcon.value = res.default;
  });
}
</script>

<style lang="scss" scoped>
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

.properties {
  list-style: none;
  padding: 5px 16px;

  > li {
    display: flex;
    padding: 0.5rem 0;

    .propName {
      width: 45%;
      max-width: 120px;
    }
    .value {
      width: 100%;
      text-align: right;
      padding-left: 5px;
      display: block;
      word-break: break-all;
      color: #777;
      display: block;
      white-space: wrap;
    }
  }
}

.tweak-header {
  display: flex;
  margin: 9px;

  .icon {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
  .info {
    padding: 6px;
    width: 100%;
  }
}
</style>
