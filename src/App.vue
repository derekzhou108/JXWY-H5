<template>
  <div id="app">
    <div style="overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;">
      <img v-if="percent == 100" v-for="(img,index) in fileList" :key="index" :src="img" style="width: 100px;height: 100px;">
    </div>

    <img :class="'abs bg' + (videoEnd ? ' end' : '')" src="@/assets/bg.png" v-show="!showPreload && $route.query.type != 1">
    <img :class="'abs bg' + (videoEnd ? ' end' : '')" src="@/assets/bg_m.png" v-show="!showPreload && $route.query.type == 1">

    <img class="abs btn-voice" src="@/assets/music_on.png" v-show="!showPreload && music" @click="musicOff">
    <img class="abs btn-voice" src="@/assets/music_off.png" v-show="!showPreload && !music" @click="musicOn">
    <img class="abs btn-next" src="@/assets/next.png" v-show="!showPreload && !videoEnd" @click="next">

    <div class="abs preload" v-show="showPreload">
      <div class="loading-img">
        <img class="img" src="@/assets/loading.png">
        <img class="mask" src="@/assets/loading_mask.png" :style="'top:' + (100 -percent) + '%'">
      </div>
      <div>{{percent}}%</div>
    </div>

    <transition name="fade">
      <div class="abs video-wrap" v-show="showVideo" @touchmove.stop="e => false">
        <video ref="video"
          class="video"
          src="http://1255423641.vod2.myqcloud.com/c7d61bc0vodgzp1255423641/303c219b5285890782387803487/FtCbARwiDLYA.mp4"
          muted="true"
          preload="auto"
          x-webkit-airplay="true"
          height="100%"
          playsinline="true"
          webkit-playsinline="true"
          style="display: inline;"></video>
      </div>
    </transition>
    <transition name="fade">
      <div class="abs video-end" v-show="videoEnd && $route.path == '/'">
        <img class="abs line" style="z-index: 10;padding: 5px;box-sizing: border-box;" src="@/assets/line.png">
        <img class="abs logo" src="@/assets/logo.png">
        <img class="video" src="@/assets/bg_video.png">
        <div class="abs pick-text">
          <img src="@/assets/pick.png">
        </div>
        <div class="abs btn-make-post" @click="makePost"></div>
      </div>
    </transition>
    <transition name="fade1">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import music from "@/assets/music.mp3";
import files from "./files.js";
// import enableInlineVideo from "iphone-inline-video";
let audio,
  video,
  fileList = [];
for (let key in files) {
  fileList.push(...files[key]);
}
export default {
  name: "App",
  data() {
    return {
      music: true,
      percent: 0,
      showPreload: true,
      showVideo: false,
      videoEnd: false,
      fileList
    };
  },
  created() {
    this.$router.replace("/");
  },
  mounted() {
    audio = document.createElement("audio");
    audio.src = music;
    document.body.appendChild(audio);
    audio.preload = true;
    audio.autoplay = false;
    audio.loop = true;
    audio.volume = 1;
    audio.muted = false;

    document.addEventListener(
      "touchstart",
      function() {
        audio.play();
        if(this.showVideo) {
          video.play();
        }
      },
      false
    );
    document.addEventListener(
      "WeixinJSBridgeReady",
      () => {
        audio.play();
        video.play();
      },
      false
    );
    this.audioPlay();

    this.loadImage(0);
    this.videoInit();
  },
  methods: {
    audioPlay() {
      audio.play();
    },
    musicOn() {
      audio.muted = false;
      this.music = true;
    },
    musicOff() {
      audio.muted = true;
      this.music = false;
    },
    videoInit() {
      video = this.$refs.video;
      if(this.browser.versions.ios) {
        // enableInlineVideo(video);
      }
    },
    videoPlay() {
      video.play();
      this.videoLoop(5, 8, video.currentTime);
    },
    videoLoop(start, end, t) {
      if (video.currentTime > start) {
        this.videoEnd = true;
        this.showVideo = false;
      }
      if (video.currentTime > end) {
        if (this.browser.versions.ios) {
          video.currentTime = start;
        } else {
          this.showVideo = false;
          video.pause();
        }
      }
      if (this.showVideo) {
        setTimeout(() => {
          this.videoLoop(start, end, video.currentTime);
        }, 100);
      }
    },
    loadImage(index) {
      let img = new Image();
      img.src = fileList[index];
      this.percent = parseInt((index / fileList.length) * 100);
      img.onload = () => {
        index++;
        if (index < fileList.length) {
          this.loadImage(index);
        } else {
          this.percent = 100;
          this.showPreload = false;
          if (this.browser.versions.android) {
            this.videoEnd = true;
          }
          this.showVideo = true;
          this.videoPlay();
        }
      };
    },
    next() {
      this.videoEnd = true;
      this.showVideo = false;
    },
    makePost() {
      this.showVideo = false;
      this.$router.replace("/step-1");
    }
  }
};
</script>

<style lang="less">
.IIV::-webkit-media-controls-play-button,
.IIV::-webkit-media-controls-start-playback-button {
  opacity: 0;
  pointer-events: none;
  width: 5px;
}
a {
  text-decoration: none;
}
p {
  margin: 0;
}
div {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.abs {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 0.5s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#app {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ff7b91;
  @keyframes shake {
    45% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(5deg);
    }
    55% {
      transform: rotate(-3deg);
    }
    60% {
      transform: rotate(3deg);
    }
    65% {
      transform: rotate(0deg);
    }
  }
  .bg.end {
    z-index: 13;
  }
  .pick-text {
    position: absolute;
    bottom: 23%;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 13;
    animation: shake 2s linear infinite;
    img {
      margin: 0 auto;
      display: block;
      width: 373px;
      height: 140px;
    }
  }
  .btn-voice {
    right: 36px;
    top: 36px;
    z-index: 300;
    width: 52px;
    height: 50px;
  }
  .btn-next {
    right: 48px;
    bottom: 48px;
    z-index: 300;
    width: 99px;
    height: 54px;
  }
  .preload {
    z-index: 11;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: #ffd1d1;
    .loading-img {
      position: relative;
      margin-bottom: 33px;
      width: 122px;
      height: 103px;
      background: #fff;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
      }
      .img {
        z-index: 13;
      }
      .mask {
        top: 100%;
        z-index: 12;
      }
    }
  }
  .video-wrap {
    z-index: 12;
    .video {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 13;
      transform: translate(-50%, -50%);
      width: 100%;
      object-fit: cover;
    }
  }
  .video-end {
    z-index: 14;

    .logo {
      top: 26px;
      left: 54px;
      width: 131px;
      height: 109px;
    }
    .video {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      width: 100%;
    }
    .btn-make-post {
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 472px;
      height: 117px;
      background: url("~@/assets/bg_btn.png") no-repeat center center/contain;
    }
  }
}
</style>
