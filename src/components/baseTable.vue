<template>
  <div class="tableCom">
    <table border="1">
      <!-- 表头占位 -->
      <thead>
        <tr>
          <th v-for="(head,hIndex) in tableHead" :key="hIndex">{{head.title}}</th>
        </tr>
      </thead>
      <!-- 内容 -->
      <tbody>
        <tr v-for="(item,index) in tableData" :key="index">
          <td v-for="(head,hIndex) in tableHead">{{ item[head.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableHead:{
      type: Array
    },
    tableData: {
      type: Array
    },
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.tableCom {
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    tr {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>