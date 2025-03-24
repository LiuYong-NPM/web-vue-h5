<!--
    @created by 刘勇 2025-03-24 09:55:44 星期一
    @Updated by 刘勇 2025-03-24 09:55:44 星期一
    @description 富文本编辑器
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="页面标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="demo-content">
      <!-- quill.js -->
      <!-- <quill-editor
        v-model="content"
        :options="editorOptions"
        @blur="onEditorBlur"
        @focus="onEditorFocus"
      /> -->

      <div style="border: 1px solid #ccc">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editor"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="html"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="onCreated"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";

import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
export default {
  name: "RichTextBox",
  trendsRoute: true,
  components: {
    // quillEditor,
    Editor,
    Toolbar,
  },
  data() {
    return {
      content: "", // 绑定编辑器内容
      editorOptions: {
        placeholder: "请输入内容...",
        theme: "snow", // 主题风格（snow/bubble）
        modules: {
          toolbar: [
            ["bold", "italic", "underline"], // 粗体、斜体、下划线
            [{ header: 1 }, { header: 2 }], // 标题
            [{ list: "ordered" }, { list: "bullet" }], // 列表
            ["link", "image"], // 链接、图片
            ["clean"], // 清除格式
          ],
        },
      },

      editor: null,
      html: "<p>hello</p>",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容..." },
      mode: "default", // 'default' or 'simple'
    };
  },

  methods: {
    onEditorBlur() {
      console.log("编辑器失焦", this.content);
    },
    onEditorFocus() {
      console.log("编辑器聚焦", this.content);
    },

    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
  },

  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = "<p>模拟 Ajax 异步设置内容 HTML</p>";
    }, 1500);
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
};
</script>

<style lang="scss" scoped>
.demo-page {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  .demo-content {
    flex: 1;
    overflow: auto;
  }
}

/* 调整编辑器高度 */
.quill-editor {
  height: 400px;
}
</style>
