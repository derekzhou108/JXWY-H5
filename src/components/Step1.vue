<template>
  <div class="abs step-1">
    <img class="abs wave-left" src="@/assets/step_1/wave_left.png">
    <img class="abs wave-right" src="@/assets/step_1/wave_right.png">
    <div class="abs center">
      <img class="abs male" src="@/assets/step_1/male.png" @click="next(1)">
      <img class="abs female" src="@/assets/step_1/female.png" @click="next(0)">
      <img class="abs tips" src="@/assets/step_1/tips.png">
    </div>

  </div>
</template>

<script>
export default {
  name: "Step1",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    next(type) {
      this.$router.replace("/step-2?type=" + type);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.step-1 {
  z-index: 100;
  .wave-left {
    top: 124px;
    left: 0;
    width: 165px;
    height: 91px;
  }
  .wave-right {
    top: 124px;
    right: 0;
    width: 175px;
    height: 82px;
  }
  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 632px;
    height: 622px;
  }
  .male {
    top: 0;
    left: 0;
    width: 212px;
    height: 453px;
  }
  .female {
    top: 18px;
    right: 6px;
    width: 223px;
    height: 437px;
  }
  .tips {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 509px;
    height: 121px;
  }
}
</style>
