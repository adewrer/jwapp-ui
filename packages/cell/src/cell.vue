<template>
  <a class="jw-cell" :href="href">
    <span class="jw-cell-mask" v-if="isLink"></span>
    <div class="jw-cell-wrapper">
      <div class="jw-cell-left">
        <slot name="icon">
          <i v-if="icon" class="r-icon" :class="icon"></i>
        </slot>
        <div>
          <slot name="title">
            <span class="jw-cell-title" v-text="title"></span>
          </slot>
        </div>
      </div>
      <div class="jw-cell-right">
        <slot name="icon">
          <i v-if="isLink" class="r-icon" :class="arrowIcon"></i>
        </slot>
      </div>
    </div>
  </a>
</template>
<script>
/**
 * jw-cell
 * @module components/cell
 * @desc 单元格
 * @param url 跳转地址
 */
export default {
  name: "jwcell",
  props: {
    isLink: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    arrowIcon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          //this.added = true;
          this.$el.addEventListener("click", this.click);
        });
        return resolved.fullPath || resolved.path;
      }
      return "javascript:;";
    }
  },
  methods: {
    click($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../example/assets/rene.scss";

.jw-cell {
  position: relative;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  min-height: 48px;
  padding: 0 18px;
  background-color: $colorf;
  display: flex;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  .jw-cell-mask{}
  .jw-cell-mask::after {
      background-color: #000;
      content: " ";
      opacity: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
    }
    .jw-cell-mask:active::after {
      opacity: 0.1;
    }
  .jw-cell-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: inherit;
  }
  .r-icon {
    font-size: $size18 !important;
  }
  .jw-cell-title {
    font-size: $size14;
    color: $color3;
    font-weight: bold;
  }
  .jw-cell-left {
    display: flex;
    align-items: center;
    .r-icon {
      margin-right: $size18;
    }
  }
}
</style>