<template>
  <div class="collapse">
    <Collapse v-model="value" accordion>
      <CollapseItem :title="`${ct.provinceShortName}`" v-for="(ct,k) of yqsj" :key="k" :name="`${ct.provinceShortName}`">
        <Table :datas="ct.cities">
          <TableItem title="疫情地区" prop="cityName"></TableItem>
          <TableItem align="center" title="疑似" prop="suspectedCount" sort="auto"></TableItem>
          <TableItem align="center" title="现有" prop="currentConfirmedCount" sort="auto"></TableItem>
          <TableItem align="center" title="累计" prop="confirmedCount" sort="auto"></TableItem>
          <TableItem align="center" title="治愈" prop="curedCount" sort="auto"></TableItem>
          <TableItem align="center" title="死亡" prop="deadCount" sort="auto"></TableItem>
          <div slot="empty">自定义提醒：暂时无数据</div>
        </Table>
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script>
export default {
  data(){
    return {
      value:['上海'],
    }
  },
  props:['yqsj'],
  watch:{
    value(){
      // console.log(this.value)
    }
  }
}
</script>
<style>
.collapse{
  margin: 0 auto;
  width: 780px;
  background: #fff;
 border-radius: 5px;

}
.collapse .h-collapse-item-header{
  font-weight: bold;
  width: 770px;
  margin-left: 3px
}
.collapse .h-collapse-item:last-of-type{
  border: 0 !important;
}
.collapse .h-collapse-item-header:hover{
  color: #10aeb5 !important ;
}
</style>