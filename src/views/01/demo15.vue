<!--
    @created by 刘勇 2023-09-08 08:40:02 星期五
    @Updated by 刘勇 2023-09-08 08:40:02 星期五
    @description 页面描述
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="拖拽排序"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="list" ref="draggerRef">
      <div
        class="list-item"
        draggable="true"
        v-for="(item, index) in draggerList"
        :key="index"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demoFifteen",
  trendsRoute: true,
  data() {
    return {
      draggerList: [
        { text: "拖拽元素1" },
        { text: "拖拽元素2" },
        { text: "拖拽元素3" },
        { text: "拖拽元素4" },
        { text: "拖拽元素5" },
      ],
    };
  },
  mounted() {
    // 拖拽排序
    this.dragAndSort();
  },
  methods: {
    // 拖拽排序
    dragAndSort() {
      this.$nextTick(() => {
        const list = this.$refs.draggerRef;
        let sourceNode;

        // 用户开始拖动元素时触发
        list.ondragstart = (e) => {
          setTimeout(() => {
            e.target.classList.add("moving");
          }, 0);

          sourceNode = e.target;
        };

        // 被拖动的对象在另一对象容器范围内拖动时触发此事件
        list.ongragover = (e) => {
          e.preventDefault();
        };

        // 当被鼠标拖动的对象进入其容器范围内时触发此事件
        list.ondragenter = (e) => {
          e.preventDefault();

          if (e.target === list || e.target === sourceNode) {
            return;
          }

          const children = [...list.children];
          const sourceIndex = children.indexOf(sourceNode);
          const targetIndex = children.indexOf(e.target);
          if (sourceIndex < targetIndex) {
            list.insertBefore(sourceNode, e.target.nextElementSibling);
          } else {
            list.insertBefore(sourceNode, e.target);
          }
        };

        // 用户完成元素拖动后触发
        list.ondragend = (e) => {
          e.target.classList.remove("moving");
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.list {
  margin: 50px;
}

.list-item {
  color: #ffffff;
  margin: 5px 0;
  padding: 0 20px;
  line-height: 40px;
  background-color: green;
  user-select: none;
  border-radius: 4px;
  margin-bottom: 30px;

  &.moving {
    background-color: transparent;
    color: transparent;
    border: 1px dashed #cccccc;
  }
}
</style>
