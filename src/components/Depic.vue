<template>
  <div class="row">
    <!-- /deep -->
    <!-- /open with cydia -->
    <add-repo class="col-12" :package="tweak.Package" v-if="tweak && !$inCydia" />
    <!-- //open with cydia -->
    <!-- /google translate -->
    <div class="col-12">
      <div id="google-translate" class="text-center">
      </div>
    </div>
    <!--
         //google translate
         /compatibility
      -->
    <div class="col-12" v-if="tweak">
      <h6 class="title"> {{ tweak.Name }} </h6>
      <div class="compatibility border-custom" :class="{ success: isSupported }"> {{ isSupported ? "Compatible with " + tweakInfo.Support : ("Not compatible with " + $iOSVersion) }} </div>
      <p class="small text-secondary text-center mt-1">
        Current iOS {{ $iOSVersion }}
      </p>
    </div>
    <div class="col-12" v-if="message">
      <div class="mt-1 alert" :class="[ 'alert-' + message.type ]" v-html="message.html($route)"></div>
    </div>
    <div class="col-12" v-if="tweak">
      <h6 class="title">Description</h6>
      <div class="my-1 py-12px px-15px bg-white text-black border-custom" v-html="tweak.Description.replace(/\n/g, '<br>')"></div>
    </div>
    <div class="col-12 mt-2rem screenshots" v-if="tweak && tweak.Screenshots && tweak.Screenshots.length">
      <h6 class="title"> Screenshots </h6>
      <ul class="border-custom bg-white">
        <li>
          <div>
            <a v-for="item in tweak.Screenshots" :href="item">
              <img :src="item">
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-12" v-if="tweak && tweak.OpenSource">
      <div class="mt-2rem alert alert-info text-center" style="background-color: #c5e8fe"> This tweak open source </div>
    </div>
    <div class="col-12 mt-2rem changelog" v-if="tweak && tweak.Changelog && tweak.Changelog.length && !tweak.Changelog.every(item => item.Version == tweak.Version)">
      <h6 class="title">Changelog</h6>
      <ul class="border-custom bg-white text-black">
        <li class="" v-for="item in tweak.Changelog">
          <div class="">
            <strong> {{ item.Version }} </strong>
            <p>+ Updated: <span class="right"> {{ item.birthtimeMs | timeago }} </span> </p>
            <p>+ MD5: <span class="right"> {{ item.MD5sum }} </span></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-12 mt-2rem package-info" v-if="tweak">
      <h6 class="title">Package info</h6>
      <list-item :items="tweakInfo" no-icon use-slot class="py-0">
        <template #item="{ index, value, renderValue }">
          <span class="text-capitalize"> {{ index }} </span>
          <a :href="renderValue (value).email" class="right" v-if="renderValue (value).email">
            {{ renderValue(value).text }}
          </a>
          <span class="right" v-else> {{ value }} </span>
        </template>
      </list-item>
    </div>
    <package-updates class="col-12" :size="5" />
    <browser-packages class="col-12" :size="5" />
    <social-share class="col-12" />
    <theme-change class="col-12" />
    <copyright class="col-12" />
  </div>
</template>
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

      ;
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
<script>
  function removeCharRegExp(string) {
    return string.replace(/([`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/])/g, "\\$1")
  }

  function toOutFlase($1, template) {
    const length = (template.match(/^\d+/) || [0])[0]
    return "0".repeat(length - ($1 + "").length) + $1
  }

  import filesize from "file-size"
  import { format } from "timeago.js"

  import AddRepo from "@/components/AddRepo"
  import PackageUpdates from "@/components/PackageUpdates"
  import BrowserPackages from "@/components/BrowserPackages"
  import SocialShare from "@/components/SocialShare"
  import ThemeChange from "@/components/ThemeChange"
  import Copyright from "@/components/Copyright"
  import ListItem from "@/components/ListItem"

  export default {
    components: {
      AddRepo,
      PackageUpdates,
      BrowserPackages,
      SocialShare,
      ThemeChange,
      Copyright,
      ListItem
    },
    data: () => ({
      message: {
        type: "info",
        html: route => `Loading description tweak <b>${route.params.package}</b>...`
      },
      tweak: null
    }),
    computed: {
      tweakInfo() {
        const {
          Name,
          Package,
          Author,
          Version,
          Section,
          Depends,
          Conflicts,
          Architeture,
          MD5sum,
          birthtimeMs,
          Size,
          tag,
          dev,
          Support
        } = this.tweak
        return {
          Name,
          Identifier: Package,
          Author,
          Architeture,
          Section,
          Version,
          Depends,
          Conflicts,
          MD5: MD5sum,
          Support: Support.replace(/\s/g, "").split(",").sort().reverse().join(", "),
          dev,
          tag,
          Size: filesize(Size).human(),
          Updated: format(birthtimeMs - new Date().getTimezoneOffset() * 60 * 1000)
        }
      },
      isSupported() {
        return this.tweak.Support.replace(/\s/g, "")
          .split(",")
          .some(item => item.split("&").every(item => {
            if (item.match(/^==?=?\d/)) {
              item = item.replace(/^==?=?/, "")
              return !!this.$iOSVersion.match(new RegExp(`^${removeCharRegExp(item)}`))
            }
            if (item.match(/^>=\d/)) {
              item = toOutFlase(item.replace(/^>=/, ""), this.$iOSVersion)
              return this.$iOSVersion >= item || !!this.$iOSVersion.match(new RegExp(`^${removeCharRegExp(item)}`))
            }
            if (item.match(/^>\d/)) {
              item = toOutFlase(item.replace(/^>/, ""), this.$iOSVersion)
              return this.$iOSVersion > item
            }
            if (item.match(/^<=\d/)) {
              item = toOutFlase(item.replace(/^<=/, ""), this.$iOSVersion)
              return this.$iOSVersion <= item || !!this.$iOSVersion.match(new RegExp(`^${removeCharRegExp(item)}`))
            }
            if (item.match(/^<\d/)) {
              item = toOutFlase(item.replace(/^</, ""), this.$iOSVersion)
              return this.$iOSVersion < item
            }
            if (item.match(/^\^\d/)) {
              item = item.replace(/^\^/, "")
              return !this.$iOSVersion.match(new RegExp(`^${removeCharRegExp(item)}`))
            }
            if (item == "ALL") {
              return true
            }
            return !!this.$iOSVersion.match(new RegExp(`^${removeCharRegExp(item)}`))
          }))

      }
    },
    filters: {
      timeago: e => format(e - new Date().getTimezoneOffset() * 60 * 1000)
    },
    watch: {
      "$route": {
        handler() {
          this.tweak = null
          fetch(`${this.$config.baseURL}/tweaks.json/${this.$route.params.package}.json`)
            .then(res => res.json())
            .then(json => this.tweak = json)
            /* /SEO */
            .then(({ Name, Description }) => {
              this.$store.commit("setMeta", { Name, Description })
            })
            /* //SEO */
            .then(() => this.message = null)
            .catch(() => this.message = {
              type: "danger",
              html: route => `Load description tweak <b>${route.params.package}</b> failed.`
            })
        },
        immediate: true
      }
    },
    mounted() {
      /*new google.translate.TranslateElement({
         multilanguagePage: true,
         gaTrack: true
      }, "google-translate")*/
    }
  }
</script>
