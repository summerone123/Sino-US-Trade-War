$(function () {
    // var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
    var whdef = 100/916;// 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    // var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var rem = wH * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    $('html').css('font-size', rem + "px");
    //加载统计图1---当天工作
    //loadoOption1();
    //加载统计图2---全局实时工作
    loadoOption2();
    //加载统计图3----近6个月受理汇总
    loadoOption3();
    //加载统计图4----热门事项排行榜
    loadoOption4();
}) ;

//加载统计图1数据
function  loadoOption1(){
    myChart1.clear();

      var data = [
        {name: '北京', value: 9268},
        {name: '广东', value: 5830},

        {name: '上海', value: 4561},
        {name: '江苏', value: 2295},
        {name: '浙江', value: 2004},
        {name: '山东', value: 1915},
        {name: '海外', value: 1809},
        {name: '湖北', value: 1774},
        {name: '四川', value: 1418},
        {name: '河南', value: 1408},
        {name: '福建', value: 1161},
        {name: '湖南', value: 993},
        {name: '河北', value: 978},
        {name: '安徽', value: 916},
        {name: '陕西', value: 858},
        {name: '香港', value: 807},
        {name: '辽宁', value: 795},
        {name: '天津', value: 740},
        {name: '重庆', value: 499},
        {name: '江西', value: 492},
        {name: '山西', value: 450},
        {name: '黑龙江', value: 440},
        {name: '云南', value: 402},
        {name: '广西', value: 383},
        {name: '内蒙古', value: 354},
        {name: '吉林', value: 332},
        {name: '贵州', value: 240},
        {name: '甘肃', value: 228},
        {name: '海南', value: 201},
        {name: '新疆', value: 194},
        {name: '台湾', value: 103},
        {name: '澳门', value: 92},
        {name: '宁夏', value: 76},
        {name: '青海', value: 69},
        {name: '西藏', value: 67}
    ];

    var yData = [];
    var barData = [];

    for (var i = 0; i < 10; i++) {
        barData.push(data[i]);
        yData.push(i + data[i].name);
    }

    var option = {
        title: [{
            show: true,
            text: '各省关注排名情况',
            textStyle: {
                color: '#2D3E53',
                fontSize: 18
            },
            right: 10,
            top: 100
        }],
        tooltip: {
            show: true,
            formatter: function (params) {
                return params.name + '：' + params.data['value'] / 489 + '%'
            },
        },
        visualMap: {
            type: 'continuous',
            orient: 'horizontal',
            itemWidth: 10,
            itemHeight: 80,
            text: ['高', '低'],
            showLabel: true,
            seriesIndex: [0],
            min: 4500,
            max: 60,
            inRange: {
                color: ['#50fd5c','#ffd74c','#ED8587','#EB2427','#fd4e45']
            },
            textStyle: {
                color: '#7B93A7'
            },
            bottom: 30,
            left: 'left',
        },
        grid: {
            right: 10,
            top: 135,
            bottom: 100,
            width: '20%'
        },
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            inverse: true,
            nameGap: 16,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                interval: 0,
                margin: 85,
                textStyle: {
                    color: '#455A74',
                    align: 'left',
                    fontSize: 14
                },
                rich: {
                    a: {
                        color: '#fff',
                        backgroundColor: '#FAAA39',
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 2
                    },
                    b: {
                        color: '#fff',
                        backgroundColor: '#4197FD',
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 2
                    }
                },
                formatter: function (params) {
                    if (parseInt(params.slice(0, 1)) < 3) {
                        return [
                            '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                        ].join('\n')
                    } else {
                        return [
                            '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                        ].join('\n')
                    }
                }
            },
            data: yData
        },
        geo: {
            // roam: true,
            map: 'china',
            left: 'left',
            right: '300',
            // layoutSize: '80%',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    areaColor: '#fff464'
                }
            }
        },
        series: [{
            name: 'china',
            type: 'map',
            roam: false,
            geoIndex: 0,
            label: {
                show: false,
            },
            data: data
        }, {
            name: 'barSer',
            type: 'bar',
            roam: false,
            visualMap: false,
            zlevel: 2,
            barMaxWidth: 8,
            barGap: 0,
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [{
                            colorStops: [{
                                offset: 0,
                                color: '#FFD119' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#FFAC4C' // 100% 处的颜色
                            }]
                        },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00C0FA' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2F95FA' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                    barBorderRadius: 15
                }
            },
            data: barData
        }]
    };

    $.getJSON('china.json', function (data) {
        echarts.registerMap('china', data);
        var myChart1 = echarts.init(document.getElementById('ec1'));
        myChart1.setOption(option);
    });

}
//加载统计图2数据
function  loadoOption2(){
    myChart2.clear();
    $.get('data/package.json', function (data) {
        myChart2.setOption(option = {

            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: data.map(function (item) {
                    return item[0];
                }),
                axisLabel:{
                    color:'#FFB14E'
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisLabel:{
                    color:'#FFB14E'
                }
            },
            // toolbox: {
            //     left: 'center',
            //     feature: {
            //         dataZoom: {
            //             yAxisIndex: 'none'
            //         },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            dataZoom: [{
                startValue: '2017-01-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 0,
                right: 10,
                pieces: [{
                    gt: 0,
                    lte: 50,
                    color: '#50fd5c'
                }, {
                    gt: 50,
                    lte: 100,
                    color: '#096'
                }, {
                    gt: 100,
                    lte: 300,
                    color: '#ffde33'
                }, {
                    gt: 300,
                    lte: 9000,
                    color: '#50fd5c'
                }, {
                    gt: 9000,
                    lte: 20000,
                    color: '#ffde33'
                }, {
                    gt: 20000,
                    lte: 50000,
                    color: '#660099'
                }, {
                    gt: 50000,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: '当天关注中美贸易战热度',
                type: 'line',
                data: data.map(function (item) {
                    return item[1];
                }),
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 100
                    }, {
                        yAxis: 300
                    }, {
                        yAxis: 9000
                    }, {
                        yAxis: 20000
                    }, {
                        yAxis: 50000
                    }]
                }
            }
        });
    });
}


//加载统计图3数据
function  loadoOption3(){
    myChart3.clear();

    var option = {
        title: {
            text: '最近6个月邮件汇总',
            show: true,
            textStyle: {
                fontWeight: 'normal',
                fontSize: 22,
                color: '#3db3cb'
            },
            left: '2%',
            top: '2%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#3db3cb'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: 'rgba(128, 128, 128, 0.5)'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#999'
                }
            },
            data: ['2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12']
        }],
        yAxis: [{
            type: 'value',
            name: '',
            axisTick: {
                show: false
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#799dff'
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(121, 157, 255, 0.5)'
                }
            }
        }],
        series: [{
            name: '受理数',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [120, 110, 145, 122, 165, 150]
        }, ]
    }
    myChart3.setOption(option);
}


//热门事项排行
function  loadoOption4(){
    myChart4.clear();
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top:'5%',
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true,
        },
        xAxis: {
            type: 'value',
            position:'top',
            splitLine: {show: false},
            boundaryGap: [0, 0.01],
            axisLabel:{
                textStyle:{
                    color: '#6cbbe6'
                }
            },
        },
        yAxis: {
            type: 'category',
            splitLine: {show: false},
            data: ['Power','Califonia','State','Energy','Market','Utility','Electricity','Coast','millon'],
            axisLabel:{
                textStyle:{
                    fontSize: 12,
                    color: '#6cbbe6'
                }
            },
        },
        series: [
            {
                name: '办理数',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                barWidth:10,
                barGap:20,
                type: 'bar',
                data: [5010,4800,1420,3181,2012,2880,3852,491,499]
            }
        ]
    };
    myChart4.setOption(option);
}

