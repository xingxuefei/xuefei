<template>
    <div>
        <div id="demo">
            <h1>抗击疫情，人人有责</h1>
        </div>
         
      <!-- <img src="../assets/timg.jpg" alt=""> -->
        <div class="dbzcq">
                <h1 class="dbzcq_title">欢迎注册</h1>
                
                <div>
                    <Form
                  ref="form"
      :validOnChange="validOnChange"
      :showErrorTip="showErrorTip"
      :labelPosition="labelPosition"
      :labelWidth="110"
      :model='model'
      :rules='validationRules'
                    >
      <FormItem label="用户名" prop="username">
        <template v-slot:label><i class="h-icon-user"></i> 用户名</template>
        <input type="text" v-model="model.username"  placeholder="请输入邮箱" @blur.capture="checkUsername">
      </FormItem>
            <FormItem label="密码" icon="h-icon-complete" prop="password">  
        <input type="password" v-model="model.password"  placeholder="请输入密码" @blur.capture="checkPassword">
      </FormItem>
      <FormItem label="重复密码" icon="h-icon-complete" prop="conpassword">
        <input type="password" v-model="model.conpassword"  placeholder="请再次输入密码" @blur.capture="checkConpassword">
      </FormItem>
      <FormItem label="验证码" icon="h-icon-complete" prop="yzm">
        <input type="text" v-model="model.yzm"  placeholder="请输入下方验证码" @blur.capture="yzmyz">
        <span :style="{userSelect:'none',color:`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},1)`,fontSize:'24px',fontStyle:Math.floor(Math.random()*2)?'oblique':'none',background:`rgba(255,255,255,1)`,padding:`0 5px`,textDecoration:Math.floor(Math.random()*2)?'none':'line-through'}">{{yzm}}</span> 
        <Button @click="yyy">看不清点我</Button>
      </FormItem>
        </Form>
        </div>
                <Button class="h-btn h-btn-primary h-btn-l" @click="handle" :loading='zczt'>注册</Button>
                <Button class="h-btn h-btn-primary h-btn-l" @click="toback">取消</Button>
    </div>
            <div class="container" :style="{backgroundImage:bg,opacity:yc}" >
            </div>
    </div>
  
</template>
<style>
.fg{
  width: 100px;
  height: 30px;
  margin-top: -30px;
}
.dbzcq_title{
  color: rgb(65, 181, 226);
}
#demo{
    margin:30px 50px;
    margin-bottom:0px;
    color:#fff;
}
.container{
    color:#fff;
    /* margin:0px 50px; */
    margin-bottom:0px;
    width:100%;
    height:100%;
    text-align: right;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
}
p{
    margin-top:30px;
}
.dbzcq{
    top:0;
    left:0;
    right:0;
    bottom: 0;
    z-index: 999;
    width:300px;
    height:480px;
    font-size:18px;
    margin: 90px auto;
    text-align:center;
    position: absolute;
    padding:60px 20px 0;

    background: rgba(65, 181, 226, 0.4);
}
</style>
<script>
export default {
  data() {
    return {
      model:{
      yzm: '',
      username: '',
      password: '',
      conpassword: '',
      },
      yc:1,
      dbzcq:'12',
      zczt:false,
      showErrorTip: true,
      validOnChange: true,
      labelPosition: 'left',
      bg:` url(${require('../assets/1.jpg')})`,
      //不能为空的表单
      validationRules:{
        required: ['username', 'password','conpassword','yzm']
      },
      yzm:''
    };
  },
  methods:{
      toback(){
        this.$router.push("/")
      },
      checkUsername(){
        
          let usernameRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if(usernameRegExp.test(this.model.username)){
              this.usernameState = "success";
              return true;
          }else{
             this.$Message.error(
                 `输入的邮箱不正确`
            );
             this.usernameState = "error";
             return false;
          }
      },
      yzmyz(){
          if(this.yzm==this.model.yzm){
              return true;
          }else{
             this.$Message.error(
                 `输入的验证码不正确`
            );
             return false;
          }
      },
      checkPassword() {
      let passwordRegExp = /^[0-9A-Za-z]{8,16}$/;
      if (passwordRegExp.test(this.model.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.$Message.error(
                 `密码长度不够`
            );
        return false;
      }
    },
    checkConpassword() {
      if (this.model.password == this.model.conpassword) {
        return true;
      } else {
        this.$Message.error(`两次密码不一样`)
        return false;
      }
    },
    handle() {
      this.zczt = true
      //调用之前的检测用户名、密码及两次密码是否一致函数
      //需要注意的是:此时会引发短路求值的现象
      //A.在逻辑或运算时,第一个表达式的结果为true会造成短路
      //B.在逻辑与运算时,第一个表达式的结果为false会造成短路
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()&&this.yzmyz()){
        //此时需要将用户名、密码等信息的提交到WEB服务器
        this.axios.post('http://127.0.0.1:5050/reg','username=' + this.model.username  + '&password='  + this.model.password).then(res=>{
            //注册失败
            if(res.data.code == 201){
              // 显示模态对话框(类似于window.alert()方法)
                this.$Message({
                    text: `该用户已存在`
                });
            }
            //注册成功
            if(res.data.code == 200){
              this.$Message({
                  text: `注册成功1秒后跳转到主页··········`
                });
                setTimeout(()=>this.$router.push('/'),1000)
            }
      this.zczt = false
        });
      }else{
      this.zczt = false
      }
    },
    yyy(){
      this.yzm = ''
      for (var i = 0; i < 4; i++) {
        var s = String.fromCharCode((65 + Math.floor(Math.random()*26)))
        this.yzm +=  Math.floor(Math.random()*2)? Math.floor(Math.random()*10):Math.floor(Math.random()*2)?s.toLocaleLowerCase():s.toLocaleUpperCase()
    }
    }
  },
  mounted(){
    var i = 1
    var dbzcc = ()=>{    
        this.yc = 0
      setTimeout(()=>{
        clearInterval(b)
          this.bg = `url(${require(`../assets/${i=i++==4?1:i}.jpg`)})`
          this.yc = 1
        b = setInterval(dbzcc,2000)
      },1000)
    }
    var b =setInterval(dbzcc,2000)
        this.yyy()
  }
  
};
</script>