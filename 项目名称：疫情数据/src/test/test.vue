<template>
  <div class="container_">
    
    <Steps :datas="data" :step="step"></Steps>
    <!-- <blockquote>slot，1.24.0+，icon, title, desc</blockquote> -->
    <Steps :datas="data" :step="step" contentLayout="transverse">
      <template v-slot:icon="{item, index}">
        <h-circle :percent="percent0" color="#45b984" :stroke-width="4" :size="30"><div v-font="13">{{index+1}}/4</div></h-circle>
      </template>
      <template v-slot:title="{item, index}"><div>{{item.title}}</div><div>{{item.title}}</div></template>
      <template v-slot:desc="{item,index}">
        {{item.desc}}
      </template>
    </Steps>
    <p class="btnfather">
      <ButtonGroup size="s">
        <Button  @click="step>=3||step++">下一步</Button>
        <Button  @click="step<=0||step--">上一步</Button>
      </ButtonGroup>
    </p>
  </div>
</template>
<style>
 .container_{
   background: #eee ;
 }
 .container_ .btnfather{
   margin-top: 50px;
   text-align: center;
 }
</style>
<script>
export default {
  data() {
    return {
      data: [
        { key: 'a', title: '步骤一', icon: 'h-icon-github', desc: 'step1 略略略' },
        { key: 'b', title: '步骤二', icon: 'h-icon-trash', desc: 'step2 略略略' },
        { key: 'c', title: '步骤三', icon: 'h-icon-completed', desc: 'step3 略略略' },
        { key: 'd', title: '步骤四', icon: 'h-icon-complete', desc: 'step4 略略略' }
      ],
      step: 0,
      percent0:25
    };
  },
  watch:{
    step(v,e){
      this.percent0+= v>e?25:-25
    }
  }
};
</script>