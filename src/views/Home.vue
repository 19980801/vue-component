<template>
  <div class="home">
    <div>
      <h1>表格简单封装</h1>
      <baseTable :tableHead="tableHead" :tableData=tableData></baseTable>
    </div>
  </div>
</template>

<script>
import baseTable from '@/components/baseTable';

export default {
  name: 'Home',
  components: {
    baseTable
  },
  data() {
    return {
      tableHead: [
        { title: "委托时间", key: "time" },
        { title: "委托车辆", key: "car" },
        { title: "货物类型", key: "type" },
        { title: "发货地", key: "by" },
        { title: "目的地", key: "to" },
        { title: "运单状态", key: "bill" },
        { title: "运单(吨)", key: "weight" },
        { title: "结算状态", key: "set" },
      ],
      tableData: [
        {
          time: "2020-07-02 17:23:53",
          car: "豫GB3181",
          type: "13石子",
          by: "河南省/三门峡市/渑池县",
          to: "河南省/焦作市/修武县",
          bill: "运输中",
          weight: "10",
          set: "10",
        }, {
          time: "2020-07-02 17:23:53",
          car: "豫GB3181",
          type: "13石子",
          by: "河南省/三门峡市/渑池县",
          to: "河南省/焦作市/修武县",
          bill: "运输中",
          weight: "10",
          set: "10",
        }, {
          time: "2020-07-02 17:23:53",
          car: "豫GB3181",
          type: "13石子",
          by: "河南省/三门峡市/渑池县",
          to: "河南省/焦作市/修武县",
          bill: "运输中",
          weight: "10",
          set: "10",
        }, {
          time: "2020-07-02 17:23:53",
          car: "豫GB3181",
          type: "13石子",
          by: "河南省/三门峡市/渑池县",
          to: "河南省/焦作市/修武县",
          bill: "运输中",
          weight: "10",
          set: "10",
        }, {
          time: "2020-07-02 17:23:53",
          car: "豫GB3181",
          type: "13石子",
          by: "河南省/三门峡市/渑池县",
          to: "河南省/焦作市/修武县",
          bill: "运输中",
          weight: "10",
          set: "10",
        }, {
          time: "2020-07-02 17:23:53",
          car: "豫GB3181",
          type: "13石子",
          by: "河南省/三门峡市/渑池县",
          to: "河南省/焦作市/修武县",
          bill: "运输中",
          weight: "10",
          set: "10",
        },
      ]
    }
  }
}
</script>
