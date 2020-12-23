<template>
    <div id="yuyue">
        <div class="hesuan">
          <p style="font-weight:600;">核酸检测预约<span><img src="../assets/logo.jpg" alt="">健康医典</span></p>
        </div>
        <div  id="step">
          <div id="steps">
            <Steps :datas="data" :step="step" contentLayout>
            <template v-slot:icon="{ index}">
              <h-circle :percent="percent0" color="#45b984" :stroke-width="4" :size="30"><div v-font="13">{{index+1}}/3</div></h-circle>
            </template>
            <template v-slot:desc="{item}">
              {{item.desc}}
            </template>
          </Steps>
          </div>
          <Row :space="2" style="margin-top:20px; margin-bottom:20px;text-align:center;">
        <div v-show ="step==0">
            <Cell width="12" >
              <div id="my_info">
                <div>
                    <span>姓名:</span><input type="text"  placeholder="请输入姓名"> 
                </div>
                <div id="category"> 
                  <Select v-model="select" className="select-demo" :datas="param" :deletable="deletable"></Select> 
                </div>
                <div>
                  <span>证件号码:</span><input type="text" placeholder="请输入证件号码">
                </div>
                <div>
                  性别：<Radio v-model="value" :datas="param4" keyName="code" titleName="name"></Radio>
                  年龄：<input style="width:60px;" type="number"  v-model="age">
                </div>
              </div>
            </Cell>
            <Cell width="12" >
              <div id="my_info">
                <div>
                  国籍:<input type="text" placeholder="请输入国籍，例如：24">
                </div>
                <div  id="category">
                  <Select style="width:200px;" v-model="select1" className="select-demo" :datas="param1" :deletable="deletable"></Select>
                </div>
                <div>
                  居住地址:<input type="text" placeholder="请输入详细居住地址">
                </div>
                <div>
                  手机号: <input type="text" placeholder="请输入常用手机号">
                </div>
              </div>
              <div v-show ="step==1">
              </div>
            </Cell>
        </div>
          </Row>
          <div style="text-align:center;margin-top:50px;padding-bottom:30px;">
            <Button @click="step>=3||step++">下一步</Button>
            <Button @click="step<=0||step--">上一步</Button>
          </div>
        </div>
      </div>
</template>
<style>
.h-steps-process .h-steps-title{
  color: #45b984;
}
#yuyue{
    height:700px;
    background: #f8f8f8;  
}
.hesuan>p>span{
    float:right;
    font-size:25px;
}
.hesuan{
    background: #10aeb5;
    margin-top:30px;
    font-size:36px;
    color:#fff;
    padding:0 200px;
}
#steps{
  padding-top:50px;
  padding-left:50px;
  padding-right:50px;
}
#step{
  margin:30px 200px;
  background-color:#fff;
}
#my_info>div{
  margin-top:30px;
}
#category{
  width:220px;
  margin-right:0;
  margin:0 auto;
}
</style>
<script>
export default {
  data() {
    return {
      data: [
        { key: 'a', title: '个人信息', icon: 'h-icon-github', desc:'' },
        { key: 'b', title: '预约定点医院', icon: 'h-icon-trash', desc: '' },
        { key: 'c', title: '预约成功', icon: 'h-icon-completed', desc: '' },
      ],
      step: 0,
      percent0:33,
      age:0,
      deletable: false,
      select:'a1',
      param: [
        { title: '居民身份证', key: 'a1' },
        { title: '港澳台居民来往内地通行证', key: 'a2' }, 
        { title: '护照', key: 'a3' },
        { title: '台胞证', key: 'a4' }
      ],
      value: 0,
      param4: [
        { name: '男', code: 0 }, 
        { name: '女', code: 1 }
      ],
      select1:'a11',
      param1: [
        { title: '外国籍留学生', key: 'a1' },
        { title: '复工复产人员', key: 'a2' }, 
        { title: '返校老师', key: 'a3' },
        { title: '返校学生', key: 'a4' },
        { title: '医疗机构工作人员', key: 'a5' },
        { title: '口岸检疫和边防检察人员', key: 'a6' },
        { title: '监所工作人员', key: 'a7' },
        { title: '社会福利养老机构工作人员', key: 'a8' },
        { title: '孕产妇', key: 'a9' },
        { title: '新生儿', key: 'a10' },
        { title: '其它人群', key: 'a11' }
      ],
    };
  },
  watch:{
    step(v,e){
      this.percent0+=v>e?33:-33
    },
    age(){
            this.age = this.age>0?this.age:0
        }
  }
};
</script>