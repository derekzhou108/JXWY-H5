<template>
  <div class="abs step-2">
    <div class="photo-clip">
      <p class="opra-tips">为保证质量<br>推荐使用深色系背景</p>
      <div class="clip-wrap">
        <div class="abs clip-area" v-show="loadImg"></div>
        <div class="abs clip-tips" v-show="!loadImg">
          <div class="box" :style="'width:' + width + 'px;height:' + height + 'px;'">
            <img class="icon-photo" src="@/assets/step_2/photo.png">
            <p>点击上传<br/>或者拍摄照片</p>
          </div>
          <input type="file" class="abs file" accept="image/*">
        </div>
      </div>
      <p class="opra-tips">可双指操作，放大缩小或旋转图片，选取最合适的位置。</p>
      <div class="btn-area">
        <div class="btn btn-reset">
          <input type="file" class="abs file" accept="image/*">
        </div>
        <div class="btn btn-confirm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step2",
  data() {
    return {
      showTips: true,
      loadImg: "",
      imgSrc: "",
      width: 0,
      height: 0
    };
  },
  mounted() {
    let width = window.innerWidth/2;
    let ratio = window.innerWidth / window.innerHeight;
    let height = parseInt(width / ratio);
    this.width = width;
    this.height = height;
    new PhotoClip(".clip-area", {
      size: [width, height],
      file: ".file",
      ok: ".btn-confirm",
      style: {
        maskBorder: "4px dashed #e60012"
      },
      loadComplete: img => {
        this.loadImg = img;
      },
      done: src => {
        let type = this.$route.query.type;
        this.$router.replace("/step-3?type=" + type, route => {
          route.meta.imgSrc = src;
        });
      },
      fail: e => {
        alert("亲，" + e);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
input.file {
  top: 0;
  left: 0;
  z-index: 103;
  opacity: 0;
}
.step-2 {
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  .photo-clip {
    padding: 40px 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 85%;
    height: 85%;
    background-color: #ffffff;
    border-radius: 10px;
    .opra-tips {
      width: 420px;
      font-family: PingFang-SC-Bold;
      font-size: 26px;
      line-height: 40px;
      color: #000000;
      text-align: center;
    }
    .clip-wrap {
      position: relative;
      margin-top: 22px;
      margin-bottom: 40px;
      width: 90%;
      height: 80%;
      overflow: hidden;
      .clip-area {
        z-index: 101;
      }
      .clip-tips {
        z-index: 102;
        background: rgba(0, 0, 0, 0.45);
        .box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 103;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 4px dashed #e60012;
          background: url("~@/assets/step_2/tips.png") no-repeat center
            center/cover;
          .icon-photo {
            display: block;
            width: 75px;
            height: 60px;
          }
          p {
            margin-top: 8px;
            font-family: PingFang-SC-Bold;
            font-size: 26px;
            line-height: 40px;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
    .btn-area {
      margin-top: 30px;
      margin-bottom: 9px;
      display: flex;
      justify-content: center;
      width: 100%;
      .btn {
        position: relative;
        width: 219px;
        height: 70px;
      }
      .btn-reset {
        background: url("~@/assets/step_2/reset.png") no-repeat center
          center/contain;
        overflow: hidden;
        input {
          display: block;
          width: 219px;
          height: 70px;
        }
      }
      .btn-confirm {
        margin-left: 74px;
        background: url("~@/assets/step_2/ok.png") no-repeat center
          center/contain;
      }
    }
  }
}
</style>
