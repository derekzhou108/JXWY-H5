<template>
<div v-if="show" :class="'abs drag-icon' + (focus ? ' focus' : '')"
    :style="'top: ' + top + 'px;left:' + left + 'px;z-index:1' + index"
    ref="icon"
    @touchstart.stop="touchStart"
    @touchmove="touchMove">
  <img class="abs resize" src="@/assets/step_3/resize.png" @touchmove.stop="resize">
  <img class="abs remove" src="@/assets/step_3/remove.png" @click="remove">
  <img :src="src" :width="width" :height="height">
</div>
</template>
<script>
let index = 11;
export default {
  name: "DragIcon",
  props: {
    src: String,
    focus: Boolean
  },
  data() {
    return {
      show: true,
      width: 0,
      height: 0,
      maxWidth: 0,
      minWidth: 0,
      top: '-300',
      left: '-300',
      startX: 0,
      startY: 0,
      startTop: 0,
      startLeft: 0,
      startWidth: 0,
      index: index++
    };
  },
  created() {
    let img = new Image();
    img.src = this.src;
    img.onload = () => {
      this.width = img.width / 32;
      this.height = img.height / 32;
      this.maxWidth = this.width * 2.5;
      this.minWidth = this.width / 2;
      this.top = window.innerHeight / 2 - (this.height / 2)
      this.left = window.innerWidth / 2 - (this.width / 2)
    };
  },
  methods: {
    touchStart(e) {
      this.$emit('touchstart')
      let touch = e.targetTouches[0]
      this.startX = touch.clientX
      this.startY = touch.clientY
      this.startTop = this.top
      this.startLeft = this.left
      this.startWidth = this.width
      index++
      this.index = index
    },
    touchMove(e) {
      let touch = e.targetTouches[0]
      this.top = this.startTop + (touch.clientY - this.startY)
      this.left = this.startLeft + (touch.clientX - this.startX)
    },
    remove() {
      this.show = false
    },
    resize(e) {
      let max = this.maxWidth
      let min = this.minWidth
      let touch = e.targetTouches[0]
      let ratio = this.width / this.height
      let width = this.startWidth + (touch.pageX - this.startX)
      this.width = width < min ? min : width > max ? max : width
      this.height = this.width  / ratio
    }
  }
};
</script>
<style lang="less" scoped>
.drag-icon {
  width: auto;
  height: auto;
  z-index: 110;
  &.focus {
    border: 2px solid#ffffff;
    .remove, .resize {
      display: block;
    }
  }
  .resize {
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);

    display: none;
    width: 60px;
    height: 60px;
  }
  .remove {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);

    display: none;
    width: 60px;
    height: 60px;
  }
}
</style>

