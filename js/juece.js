var map;
var infoBoxTemp = null;

$(function () {
    // var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var whdef = 100 / 916;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    // var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值


    findInfo();
    //加载统计图1
    // loadoOption1(0);
    //加载统计图2
    loadoOption2(0);
    //加载统计图3
    loadoOption3(0);
    // guimoTop5();
    //加载距离排行榜
    loadjuliTop(109.088, 34.321);
    //重新按类型加载数据
    $("#seType").change(function () {
        //加载教育
        if ($(this).val() == 0) {
            var grade = $("#seDj");
            grade.empty();
            grade.append("<option value='' selected>请选择</option>");
            grade.append("<option value='3' >高中</option>");            //添加下拉列表
            grade.append("<option value='2'>初中</option>");
            grade.append("<option value='1'>小学</option>");
            grade.append("<option value='0' >幼儿园</option>");

            var html = '<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="教育部门" > 教育部门' +
                '<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="民办">民办' +
                '<input type="radio" class="rdo" name="seXz" onclick="searchDate()"  value="地方企业"> 地方企业' +
                '<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="事业单位"> 事业单位';
            $("#slexz").html(html);
            //加载区域边框
            getBoundary();

            findInfo();
            //加载统计图1
            loadoOption1(0);
            //加载统计图2
            loadoOption2(0);
            //加载距离排行榜
            loadjuliTop(109.088, 34.321);
            //加载医疗
        } else {

            var grade = $("#seDj");
            grade.empty();
            grade.append("<option value='' selected>请选择</option>");
            grade.append("<option value='村卫生室'>村卫生室</option>");            //添加下拉列表
            grade.append("<option value='普通诊所'>普通诊所</option>");
            grade.append("<option value='中医诊所'>中医诊所</option>");
            grade.append("<option value='综合医院'>综合医院</option>");
            var html = '<input type="radio" class="rdo" name="seXz" onclick="searchDate()" value="测试" > 测试';
            $("#slexz").html(html);
            map.clearOverlays();
            getBoundary();
            $("#jlTop").html("");
            //加载区域边框
            getBoundary();
            findInfo1();
            loadoOption1(1);
            loadoOption2(1);
            //加载距离排行榜
            loadjuliTop(109.088, 34.321);
        }
    });

});


/**
 * 地图添加标记点
 */
function findInfo() {
    //名称
    var seName = $("#seName").val();
    //类型（教育、医疗）
    var seType = $("#seType").val();
    var tophtml = "";
    //等级（教育（高中、初中、小学、幼儿园）、医疗（诊所、医院））
    var seDj = $("#seDj").val();
    //等级（正常  停业  注销）
    var seZT = $('input[name="seZT"]:checked').val();
    //性质（教育（教育部门、民办、地方企业、事业单位）、医疗（诊所、医院））
    var seXz = $('input[name="seXz"]:checked').val();

}

/**
 * 地图添加标记点
 */
function findInfo1() {
    //名称
    var seName = $("#seName").val();
    //类型（教育、医疗）
    var seType = $("#seType").val();
    var tophtml = "";
    //等级（教育（高中、初中、小学、幼儿园）、医疗（诊所、医院））
    var seDj = $("#seDj").val();
    //等级（正常  停业  注销）
    var seZT = $('input[name="seZT"]:checked').val();
    //性质（教育（教育部门、民办、地方企业、事业单位）、医疗（诊所、医院））
    // var seXz= $('input[name="seXz"]:checked').val();

}


// //加载学校规模排行榜
// function guimoTop5(){
//     var tophtml="";
//     jQuery.ajax({
//         type:"post",
//         dataType:"json",
//         cache:false,
//         url:ctx+"/front/guimoTop",
//         success:function(data){
//             //如果返回success
//             if(data.success){
//                 //循环返回json串中models的数据
//                 jQuery.each(data.models,function(index,value){
//                     if(index>4){
//                         return false;
//                     }else{
//                         tophtml = tophtml+'<li><b>'+(index+1)+'</b><label>'+value.mc+'</label> ' +
//                             '<span class="r unchanged"><strong>'+value.rnrs+'</strong></span><span class="r unchanged1">' +value.bxxz+'</span></li>';
//                     }
//                 })
//             }
//             $("#gmTop").html(tophtml);
//         }
//     });
// }


//加载距离排行榜
function loadjuliTop(jd, wd) {
    //名称
    var seName = $("#seName").val();
    //类型（教育、医疗）
    var seType = $("#seType").val();
    //等级（教育（高中、初中、小学、幼儿园）、医疗（诊所、医院））
    var seDj = $("#seDj").val();
    var tophtml = "";

}



//加载统计图1数据
function loadoOption1(type) {
    myChart1.clear();

    var data = [{
        value: 346,
        name: '1999 年'
    }, {
        value: 17842,
        name: '2000 年'
    }, {
        value: 12027,
        name: '2001 年'
    }, {
        value: 22,
        name: '2002'
    }, {
        value: 33,
        name: '其它'
    }];
    var option = {
        title: {
            text: '1000',
            subtext: '总数',
            left: 'center',
            top: '50%',
            padding: [24, 0],
            textStyle: {
                color: '#fff',
                fontSize: 18,
                align: 'center'
            }
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            top: '2%',
            left: 'center',
            data: ['1999 年', '2000 年', '2001 年', '2002 年', '其它'],
            textStyle: {
                fontSize: 12,
                color: '#6cbbe6'
            }
        },
        series: [{
            name: '受理数',
            type: 'pie',
            selectedMode: 'single',
            center: ['50%', '60%'],
            radius: ['40%', '58%'],
            color: ['#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B', '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD'],
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b}',
                    textStyle: {
                        color: '#3db3cb',
                        fontSize: 10
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle: {
                        color: '#3db3cb'
                    }
                }
            },
            data: data
        }]
    };
    myChart1.setOption(option);

}

//加载统计图2数据
function loadoOption2(type) {
    var title, data, data1, data2;
    data1 = ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'];
    //教育
    if (type == 0) {
        // title="办学数量变化趋势";
        data = ['1999', '2000', '2001', '2002'];
        data2 = [{value: 335, name: '教育部门'}, {value: 310, name: '地方企业'}, {value: 234, name: '民办'}, {
            value: 135,
            name: '事业单位'
        }];
        //医疗
    } else {
        // title="医疗机构数量变化趋势";
        data = ['1999', '2000', '2001', '2002'];
        data2 = [{value: 35, name: '综合医院'}, {value: 10, name: '村卫生室'}, {value: 23, name: '中医诊所'}, {
            value: 35,
            name: '社区卫生服务站'
        }, {value: 5, name: '普通诊所'}];
    }
    var option2 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            y: 'top',
            data: data,
            textStyle: {
                color: '#6cbbe6'
            }
        },

        calculable: true,
        grid: {
            x: 30,
            y: 30,
            x2: 20,
            height: '70%'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: data1,
                axisLabel: {
                    textStyle: {
                        color: '#6cbbe6'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#6cbbe6'
                    }
                }
            }
        ],
        series: [
            {
                name: '1999',
                type: 'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500]
            },
            {
                name: '2000',
                type: 'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [750, 700, 900, 800, 800, 1200, 1400, 1700, 2300, 2350, 2300, 2300]
            },
            {
                name: '2001',
                type: 'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [2500, 2400, 2500, 2600, 1500, 300, 400, 200, 300, 350, 300, 200]
            },
            {
                name: '2002',
                type: 'line',
                stack: '总数',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [0, 0, 0, 0, 0, 0, 300, 400, 0, 0, 0, 50]
            }
        ]
    };
    myChart2.clear();
    myChart2.setOption(option2);
}


//加载统计图3数据
function loadoOption3(type) {
    // myChart3.showLoading();
    $.get('package.json', function (data) {
        myChart3.hideLoading();

        myChart3.setOption(option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',

                    data: [data],

                    top: '18%',
                    bottom: '14%',

                    layout: 'radial',

                    symbol: 'emptyCircle',
                    lineStyle:
                        {color:'orange'},

                    itemStyle:
                        {color:'red',
                        },
                    textStyle: {
                        color:'red',
                    },

                    symbolSize: 7,

                    initialTreeDepth: 3,

                    animationDurationUpdate: 750

                }
            ]
        });
    });


}











//加载灞桥区行政区划边框




