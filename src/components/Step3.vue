<template>
  <div class="abs step-3">
    <div ref="crop" class="abs crop-view">
      <transition name="fade">
        <div class="abs filter" v-show="showFilter"></div>
      </transition>
      <img class="abs bg" :src="imgSrc">
      <img class="abs male" src="@/assets/step_3/male.png">
      <img class="abs female" src="@/assets/step_3/female.png">
      <div class="icons">
        <drag-icon v-for="(icon,index) in icons"
            :key="index"
            :src="icon"
            :focus="iconIndex == index"
            @touchstart="iconIndex=index">
        </drag-icon>
      </div>
      <div :class="'abs love-text' + (showPoster ? ' fix': '')" v-if="textIndex >= 0" v-html="textData[textIndex]"></div>
      <div class="abs cover" v-show="showPoster">
        <div :class="'abs logo' + (type == 1 ? ' m' : '')">我的恋爱观海报</div>
        <img class="abs pick" src="@/assets/step_3/pick.png">
        <img src="@/assets/step_3/footer.png" class="abs bg-footer">
        <div class="abs footer">
          <img class="icon" src="@/assets/logo.png">
          <div class="footer-text">
            开放剧情手游诚意之作<br/>
            <span>10月23日安卓首发</span>
          </div>
          <div class="code">
            <img src="@/assets/step_3/code.png">
            <p>长按Pick你的恋爱观</p>
          </div>
        </div>
      </div>
    </div>
    <div class="abs btn-area" v-show="!showPoster">
      <div class="btns">
        <div :class="'btn-filter' + (showFilter ? ' active' : '')"  @click="showFilter=!showFilter">
          <div class="text"></div>
          <div class="abs btn"></div>
        </div>
        <div id="btn_save" class="btn-save" @click="save"></div>
      </div>
      <ul class="tabs">
        <li v-for="(tab, index) in tabs" :key="index" :class="{active: index==tabIndex}" @click="tabIndex = index">{{tab}}</li>
      </ul>
      <div class="icon-wrap">
        <img class="arrow arrow-left" src="@/assets/step_3/arrow.png">
        <ul v-for="(list,i) in iconData" :key="i" v-show="tabIndex == i">
          <li v-for="(icon,index) in list"
              :key="index"
              @click="icons.push(icon);iconIndex = icons.length - 1;">
            <div :style="'background: url(' + icon + ') no-repeat center center/contain'"></div>
          </li>
        </ul>
        <ul v-show="tabIndex == 3">
          <li class="text" v-for="(text,index) in textData"
              :key="index"
              @click="textIndex = index">
            <div v-html="text"></div>
          </li>
        </ul>
        <img class="arrow arrow-right" src="@/assets/step_3/arrow.png">
      </div>
    </div>
    <canvas ref="canvas" class="canvas"></canvas>

    <div :class="'abs poster-wrap' + (type == 1 ? ' m' : '')" v-show="posterSrc">
      <img class="abs" style="z-index: 10;padding: 10px;box-sizing: border-box;" src="@/assets/line.png">
      <transition name="zoom">
        <img class="abs poster-view" :src="posterSrc" v-show="posterSrc">
      </transition>
      <div class="abs tips-share">长按图片保存，分享给Ta</div>
      <div class="abs buttons">
        <div class="button" @click="reload">重做海报</div>
        <div class="button" @click="toHome">邂逅唐嫣</div>
      </div>
    </div>
    <div class="abs mask" v-show="showPoster && !posterSrc"></div>
  </div>
</template>
<script>
import DragIcon from "./DragIcon";
import files from "../files.js";
export default {
  name: "Step3",
  components: {
    "drag-icon": DragIcon
  },
  data() {
    return {
      showFilter: false,
      posterSrc: "",
      tabs: ["我眼中的自己", "Ta眼中的你", "恋爱标签", "恋爱宣言"],
      tabIndex: 0,
      type: 0,
      iconData: {},
      icons: [],
      iconIndex: -1,
      showPoster: false,
      textData: [],
      textIndex: -1
    };
  },
  created() {
    this.imgSrc = this.$route.meta.imgSrc;
    this.type = this.$route.query.type;
    this.getIcons();
  },
  mounted() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvas = this.$refs.canvas;
    canvas.height = height * 2;
    canvas.width = width * 2;
    canvas.style.width = width;
    canvas.style.height = width;
    let ctx = canvas.getContext("2d");
    ctx.scale(2, 2);
  },
  methods: {
    getIcons() {
      let type = this.type;
      this.iconData = [
        files["type_0_" + type],
        files["type_1_" + type],
        files["type_2"]
      ];
      this.textData = [
        "带着一堆情话<br/>在起风的季节里<br/>等风也等你",
        "喜欢你<br/>笨拙而热烈<br/>一无所有又倾尽所有",
        "找个风大去见你<br/>把我吹进你怀里",
        "还是那个我<br/>为你可上九天揽月<br/>可下五洋捉鳖",
        "我想和你<br/>一房两人三餐四季",
        "这一生太难<br/>想被你哄着过完",
        "对不起<br/>没有经过你的允许<br/>擅自特别喜欢你",
        "我想买一块地<br/>对你的死心塌地",
        "听闻先生治家有方<br/>小女愿闻其详",
        "众生皆苦<br/>你是草莓味",
        "甜有100种方式<br/>吃糖&蛋糕<br/>还有每天98次的想你"
      ];
    },
    save() {
      this.showPoster = true;
      this.iconIndex = -1;
      this.$nextTick(() => {
        html2canvas(this.$refs.crop, {
          allowTaint: false,
          canvas: this.$refs.canvas,
          taintTest: false,
          useCORS: true,
          onrendered: canvas => {
            let imgData = canvas.toDataURL("image/jpg");
            this.posterSrc = imgData;
          }
        });
      });
    },
    reload() {
      this.$router.replace("/step-1");
    },
    toHome() {
      window.location.href = "http://jxwy.ksgame.com/";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@keyframes zoom-in {
  from {
    top: 0;
    height: 100%;
    width: 100%;
  }
  to {
    top: 6%;
    width: 68%;
    height: 68%;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.zoom-enter-active {
  animation: zoom-in 0.6s ease;
}
.step-3 {
  z-index: 101;
  .mask {
    top: 0;
    left: 0;
    z-index: 400;
  }
  .crop-view {
    z-index: 102;
    overflow: hidden;
    .filter {
      z-index: 104;
      background: url("~@/assets/step_3/filter.png") no-repeat center
        center/cover;
    }
    .bg {
      z-index: 103;
    }
    .male {
      top: 25%;
      right: 36px;
      z-index: 104;
      width: 40px;
      height: 66px;
    }
    .female {
      top: 25%;
      left: 36px;
      z-index: 104;
      width: 40px;
      height: 66px;
    }
    .love-text {
      left: 41px;
      bottom: 440px;
      z-index: 105;
      width: 290px;
      height: 109px;
      font-size: 30px;
      line-height: 40px;
      color: #fff;
      white-space: normal;
      &.fix {
        bottom: 368px;
      }
    }
    .cover {
      z-index: 200;
      pointer-events: none;
      img {
        display: block;
      }
      .logo {
        top: 21px;
        left: 27px;
        z-index: 201;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 238px;
        height: 52px;
        background: url("~@/assets/step_3/bg_logo.png") no-repeat center
          center/contain;
        text-align: center;
        font-family: PingFang-SC-Medium;
        font-size: 30px;
        color: #ffffff;
        &.m {
          background: url("~@/assets/step_3/bg_logo_m.png") no-repeat center
            center/contain;
        }
      }
      .pick {
        z-index: 201;
        left: 40px;
        bottom: 170px;
        width: 241px;
        height: 167px;
      }
      .footer {
        bottom: 0;
        z-index: 201;
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: auto;
      }
      .bg-footer {
        bottom: 0;
        z-index: 200;
        width: 100%;
        height: auto;
      }
      .icon {
        margin: 0 15px 13px 17px;
        width: 131px;
        height: 109px;
      }
      .footer-text {
        margin-bottom: 24px;
        flex: 1;
        font-family: PingFang-SC-Bold;
        font-size: 28px;
        line-height: 40px;
        color: #000000;
        span {
          font-size: 30px;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
        }
      }
      .code {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 25px;
        margin-bottom: 30px;
        font-family: PingFang-SC-Medium;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
        img {
          margin-bottom: 5px;
          display: block;
          width: 128px;
          height: 128px;
          padding: 2px;
          background: #fff;
        }
      }
    }
  }
  .btn-area {
    bottom: 0;
    z-index: 210;
    height: auto;
    .btns {
      padding: 0 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn-filter {
        position: relative;
        width: 130px;
        height: 60px;
        background-color: #ffffff;
        border-radius: 30px;
        .text {
          position: absolute;
          left: 50%;
          top: -100px;
          transform: translate(-50%, 0);
          width: 216px;
          height: 129px;
          background: url("~@/assets/step_3/filter_text.png") no-repeat center
            center/contain;
        }
        .btn {
          top: 0;
          left: 0;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background: #9a9494;
          transition: all 0.4s ease;
        }
        &.active {
          background: #f96f78;
          .btn {
            left: 70px;
            background: #fff;
          }
        }
      }
      .btn-save {
        width: 219px;
        height: 70px;
        background: url("~@/assets/step_3/btn_save.png") no-repeat center
          center/contain;
      }
    }
    .tabs {
      margin-top: 57px;
      display: flex;
      background: #ffffff;
      font-family: PingFang-SC-Heavy;
      font-size: 24px;
      line-height: 90px;
      color: #696969;
      li {
        flex: 1;
        text-align: center;
      }
      .active {
        background: #f96f78;
        color: #fff;
      }
    }
    .icon-wrap {
      display: flex;
      align-items: center;
      height: 160px;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      .arrow {
        width: 43px;
        height: 44px;
        animation: fade-out 0.6s linear infinite alternate;
      }
      .arrow-left {
        transform: rotate(180deg);
      }
      ul {
        flex: 1;
        height: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        li {
          display: inline-block;
          width: 226px;
          height: 100%;
          padding: 13px 0;
          box-sizing: border-box;
          vertical-align: middle;
          div {
            width: 100%;
            height: 100%;
            box-shadow: -2px 0px 0px 0px rgba(255, 255, 255, 0.3) inset;
          }
          &:last-child div {
            box-shadow: none;
          }
        }
        .text {
          width: 280px;
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-family: PingFang-SC-Medium;
            font-size: 20px;
            line-height: 40px;
            color: #fff;
            white-space: normal;
          }
        }
      }
    }
  }
  .canvas {
    position: absolute;
    z-index: 100;
  }
}
.poster-wrap {
  position: relative;
  z-index: 300;
  background: url("~@/assets/bg.png") no-repeat center center/cover;
  &.m {
    background: url("~@/assets/bg_m.png") no-repeat center center/cover;
    .tips-share {
      color: #628dbe;
    }
    .buttons .button {
      background: url("~@/assets/step_3/btn_again_m.png") no-repeat center
        center/contain;
    }
  }
  .poster-view {
    top: 6%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 304;
    width: 68%;
    height: 68%;
  }
  .tips-share {
    left: 50%;
    bottom: 13%;
    transform: translate(-50%, 0);
    z-index: 301;
    width: 402px;
    height: 112px;
    line-height: 112px;
    background: url("~@/assets/step_3/btn_share.png") no-repeat center
      center/contain;
    font-family: PingFang-SC-Heavy;
    font-size: 32px;
    color: #fa5994;
    text-align: center;
  }
  .buttons {
    left: 50%;
    bottom: 5%;
    transform: translate(-50%, 0);
    z-index: 301;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    .button {
      width: 256px;
      height: 73px;
      line-height: 73px;
      background: url("~@/assets/step_3/btn_again.png") no-repeat center
        center/contain;
      font-family: PingFang-SC-Heavy;
      font-size: 30px;
      color: #fffefe;
      text-align: center;
      &:last-child {
        margin-left: 48px;
      }
    }
  }
}
</style>
