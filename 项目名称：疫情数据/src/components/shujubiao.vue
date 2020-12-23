<template>
    <div id="zxt">

    </div>
</template>
<style>
    #zxt{
        width: 780px;
        height: 780px;
        margin: 0 auto;
    }
</style>
<script>
export default {
    mounted(){
        var zxt = echarts.init(document.getElementById('zxt'))
    var option = {
        title:{
            text:'疫情数据柱形图'
        },
        tooltip:{},
        legend:{
            data:['确诊人数','死亡人数']
        },
        xAxis:{
            data:[3.17,3.18,3.19,3.20,]
        },
        yAxis:{},
        series:[{
            name:'确诊人数',
            type:'bar',
            data:[10,20,30,40]
        },{
            name:'死亡人数',
            type:'bar',
            data:[10,20,30,40]
        }]
    }
    zxt.setOption(option)
    }
}
</script>