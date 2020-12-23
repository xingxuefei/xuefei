<template>
    <div id="china">
        <div style="text-align:center;clear:both;">
        </div>
        <Button id="back">返回全国</Button>
        <div id="china-map"></div>

    </div>
</template>
<style>
#china{
    /* background: #fff; */
    width: 780px;
    margin: 0 auto;
}
#china-map {
  width: 800px;
  height: 800px;
  margin: auto;
}
#box{
	display:none;
	background-color: goldenrod;
	width: 180px;
	height: 30px;
}
#box-title{
	display:block;
}
</style>
<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    props:['yqsj'],
    methods:{
        
    },
    mounted(){
    var myChart = echarts.init(document.getElementById('china-map'));
    var oBack = document.getElementById("back");
    var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
    var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
    class yqsf{
        constructor(name,value){
            this.name=name;
            this.value=value;
            this.itemStyle={normal:{areaColor:this.value>10000?'#B80909':this.value>1000?'#E64546':this.value>100?'#F57567':this.value>10?'#FF9985':this.value>=1?'#FFE5DB':'#fff'}}
        }
    }
    var seriesData = [];
    var shengnei = []
    this.yqsj.forEach(e=>{
    var b = new yqsf(e.provinceShortName,e.confirmedCount)
        e.cities.forEach(d=>{
            var c = new yqsf(d.cityName,d.confirmedCount)
            shengnei.push(c)
        })
    seriesData.push(b)
    })
    shengnei.push(new yqsf('静海区',0))
    oBack.onclick = function () {
      initEcharts("china", "中国疫情大数据");
    };

    initEcharts("china", "中国疫情大数据");

    // 初始化echarts
    function initEcharts(pName, Chinese_) {
      var tmpSeriesData = pName === "china" ? seriesData :shengnei;

      var option = {
        title: {
          text: Chinese_ || pName,
          left: 'center'
        },
          tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c} 累计确诊人数'
          },
          visualMap:{
            type:'',
            pieces:[
              {min:0,max:1},
              {min:1,max:10},
              {min:10,max:100},
              {min:100,max:1000},
              {min:1000,max:10000},
              {min:10000,},
            ]
          },
        series: [
          {
            name: Chinese_ || pName,
            type: 'map',
            mapType: pName,
            roam: false,//是否开启鼠标缩放和平移漫游
            data: tmpSeriesData,
            top: "3%",//组件距离容器的距离
              zoom:1.1,
              selectedMode : 'single',

              label: {
                  normal: {
                      show: true,//显示省份标签
                      textStyle:{color:"#000"}//省份标签字体颜色
                  },
                  emphasis: {//对应的鼠标悬浮效果
                      show: true,
                      textStyle:{color:"#323232"}
                  }
              },
              itemStyle: {
                  normal: {
                      borderWidth: .5,//区域边框宽度
                      borderColor: '#0550c3',//区域边框颜色
                      areaColor:"#4ea397",//区域颜色
                  },

                  emphasis: {
                      borderWidth: .5,
                      borderColor: '#4b0082',
                      areaColor:"#C7FFFD",
                  }
              },
          }
        ]

           };

      myChart.setOption(option);

      myChart.off("click");

      if (pName === "china") { // 全国时，添加click 进入省级
        myChart.on('click', function (param) {
          console.log(param.name);
          // 遍历取到provincesText 中的下标  去拿到对应的省js
          for (var i = 0; i < provincesText.length; i++) {
            if (param.name === provincesText[i]) {
              //显示对应省份的方法
              showProvince(provinces[i], provincesText[i]);
              break;
            }
          }
            if (param.componentType === 'series') {
                var provinceName =param.name;
                $('#box').css('display','block');
                $("#box-title").html(provinceName);

            }
        });
      } else { // 省份，添加双击 回退到全国
        myChart.on("dblclick", function () {
          initEcharts("china", "中国疫情大数据");
        });
      }
    }

    // 展示对应的省
    function showProvince(pName, Chinese_) {
      //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
      loadBdScript('$' + pName + 'JS', './js/map/province/' + pName + '.js', function () {
        initEcharts(Chinese_);
      });
    }

    // 加载对应的JS
    function loadBdScript(scriptId, url, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      if (script.readyState) {  //IE
        script.onreadystatechange = function () {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {  // Others
        script.onload = function () {
          callback();
        };
      }
      script.src = url;
      script.id = scriptId;
      document.getElementsByTagName("head")[0].appendChild(script);
    };
    }
}
</script>