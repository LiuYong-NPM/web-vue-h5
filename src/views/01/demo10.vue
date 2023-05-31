<template>
  <div class="demo-nine demo-page">
    <van-nav-bar
      title="非封闭式环形进度条"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="circle-progress">
      <canvas id="canvas" width="180" height="150"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "demoTen",
  trendsRoute: true,
  data() {
    return {
      canvas: "",
      percent: "",
      ctx: "",
      circleX: "",
      circleY: "",
      radius: "",
      cradius: "",
      lineWidth: "",
      fontSize: "",
      color: "",
      process: "",
      circleLoading: null,
      fillText: '2/10'
    };
  },
  mounted() {
    this.toCanvas("canvas", "#FF7538", 20);
  },  
  methods: {
    //两端圆点
    smallcircle1(cx, cy, r) {
      this.ctx.beginPath();
      this.ctx.lineWidth = 1;
      this.ctx.fillStyle = "#FF7538";
      this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
      this.ctx.fill();
    },
    smallcircle2(cx, cy, r) {
      this.ctx.beginPath();
      this.ctx.lineWidth = 1;
      this.ctx.fillStyle = "#fff";
      this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
      this.ctx.fill();
    },
    //画圆
    circle(cx, cy, r) {
      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = "#eee";
      this.ctx.arc(cx, cy, r, (Math.PI * 2) / 3, (Math.PI * 1) / 3);
      this.ctx.stroke();
    },
    //画弧线
    sector(cx, cy, r, startAngle, endAngle) {
      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineWidth;
      // 进度条颜色
      this.ctx.strokeStyle = this.color;
      //圆弧两端的样式
      this.ctx.lineCap = "round";
      //圆弧
      this.ctx.arc(cx,cy,r,(Math.PI * 2) / 3,(Math.PI * 2) / 3 + (endAngle / 100) * ((Math.PI * 5) / 3),false);
      this.ctx.stroke();
    },
    //刷新
    loading() {
      if (this.process >= this.percent) {
        clearInterval(this.circleLoading);
      }
      //清除canvas内容
      this.ctx.clearRect(0, 0, this.circleX * 2, this.circleY * 2);
      //中间的字
      this.ctx.font = this.fontSize + "px PingFangSC-Medium, PingFang SC";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillStyle = "#FF7538";
      this.ctx.fillText(this.fillText, this.circleX, this.circleY);
      //圆形
      this.circle(this.circleX, this.circleY, this.radius);
      //圆弧
      this.sector(this.circleX, this.circleY, this.radius, (Math.PI * 2) / 3, this.process);
      //两端圆点
      this.smallcircle1(
        this.cradius + Math.cos(((2 * Math.PI) / 360) * 120) * this.radius,
        this.cradius + Math.sin(((2 * Math.PI) / 360) * 120) * this.radius,
        0
      );
      this.smallcircle2(
        this.cradius +
          Math.cos(((2 * Math.PI) / 360) * (120 + this.process * 3)) * this.radius,
        this.cradius +
          Math.sin(((2 * Math.PI) / 360) * (120 + this.process * 3)) * this.radius,
        2
      );
      //控制结束时动画的速度
      if (this.process / this.percent > 0.9) {
        this.process += 0.3;
      } else if (this.process / this.percent > 0.8) {
        this.process += 0.55;
      } else if (this.process / this.percent > 0.7) {
        this.process += 0.75;
      } else {
        this.process += 1.0;
      }
    },
    /** 生成环形进度条 **/
    toCanvas(id, color, progress) {
      //canvas进度条
      this.canvas = document.getElementById(id);
      this.percent = progress //最终百分比
      this.ctx = this.canvas.getContext("2d");
      this.circleX = this.canvas.width / 2; //中心x坐标
      this.circleY = this.canvas.height / 2; //中心y坐标
      this.radius = 60; //圆环半径
      this.cradius = 75; // canvas半径
      this.lineWidth = 6; //圆形线条的宽度
      this.fontSize = 28; //字体大小
      this.process = 20.0; //进度
      this.color = color;
      this.circleLoading = window.setInterval(() => {
        this.loading(progress);
      }, 20);
    }
  }
};
</script>