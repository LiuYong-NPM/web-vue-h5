<!--
    @created by 刘勇 2024-03-06 15:23:38 星期三
    @Updated by 刘勇 2024-03-06 15:23:38 星期三
    @description vue2导出Excel表格
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="vue2导出Excel表格"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <download-excel
      class="btn btn-default"
      :data="json_data"
      :fields="json_fields"
      worksheet="My Worksheet"
      name="测试下载EXCEL文档.xls"
    >
      测试下载EXCEL文档.xls
    </download-excel>
  </div>
</template>

<script>
import downloadExcel from "vue-json-excel2";

export default {
  name: "demoNineteen",
  trendsRoute: true,
  components: { downloadExcel },
  data() {
    return {
      json_fields: {
        姓名: "name",
        城市: "city",
        手机: "phone.mobile",
        座机: {
          field: "phone.landline",
          callback: (value) => {
            return `Landline Phone - ${value}`;
          },
        },
      },
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "15417543010",
            landline: "(541) 754-3010",
          },
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "18552755071",
            landline: "(2741) 2621-244",
          },
        },
      ],
    };
  },
  created() {
    this.json_data = [];
    for (let index = 0; index < 1000; index++) {
      this.json_data.push({
        name: "Tony Peña" + index,
        city: "New York",
        country: "United States",
        birthdate: "1978-03-15",
        phone: {
          mobile: "15417543010",
          landline: "(541) 754-3010",
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.demo-page {
  position: relative;

  ::v-deep .btn-default {
    height: 50px;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
