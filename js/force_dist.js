var laber = ["弱", '相关性', '强', "  ", '强', '相关性', '弱'];
option = {
    "xAxis": [{
        zlevel: 20,
        type: 'value',
        min: -50,
        max: 50,
        interval: 16.7,
        axisLabel: {
            margin: -150,
            formatter: function (value, index) {
                return laber[index]
            },
            lineStyle: {
                color: '#278dfb'
            }
        },
        splitLine: {
            show: false,
        },
        splitArea: {
            show: false,
        },
    }],
    "yAxis": [{
        "min": -50,
        "max": 50,
        "show": false,
        "splitLine": {
            "show": false
        },
        "splitArea": {
            "show": false
        }
    }],
    "legend": {
        "show": false,
        "data": []
    },
    "tooltip": {
        "showContent": false
    },
    "sendDataSetting": {
        "selectParams": false,
        "selectCell": false
    },
    "visualMap": [{
        "show": false,
        "dimension": 2,
        "min": 1,
        "max": 3,
        "precision": 0.01,
        // "inRange": {
        //     "symbolSize": [10, 50]
        // }
    }],
    "series": [{
        zlevel: 20,
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 150,
        label: {
            normal: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
            },
        },
        itemStyle: {
            normal: {
                color: '#5aa8ee',
            },
        },
        data: [
            [-1, 0, '中美贸易战', '#cc0033', 19]
        ],
    }, {
        zlevel: 20,
        name: '国家',
        type: 'scatter',
        symbol: 'circle',
        symbolSize: function (param, a) {
            return param[4];
        },
        itemStyle: {
            normal: {
                color: function (param) {
                    return param.data[3];
                },
            },
        },
        label: {
            color: '#000',
            normal: {
                textStyle: {
                    fontSize: 8,
                },
                position: 'bottom',
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
            },
        },

        "data": [
            [-40, -41, "俄罗斯", "#BF54Fb", 5],
            [-50, -36, "印度", "#BF54Fb", 5],
            [-31, 3, "德国", "#BF54Fb", 15],
            [17, -46, "加拿大", "#BF54Fb", 15],
            [47, -36, "墨西哥", "#BF54Fb", 15],
            [1, 34, "欧洲", "#BF54Fb", 15],
            [-45, -3, "韩国", "#BF54Fb", 5],
            [11, -7, "美国", "#BF54Fb", 30],
            [-2, -34, "日本", "#BF54Fb", 10],
            [32, 34, "英国", "#BF54Fb", 10],
            [8, 9, "中国", "#BF54Fb", 25],
        ],
        "markLine": {}
    }, {
        "name": "机构",
        "zlevel": 20,
        "type": "scatter",
        "symbol": "circle",
        "itemStyle": {
            "normal": {}
        },
        label: {
            color: "#000",
            normal: {
                textStyle: {
                    fontSize: 8
                },
                position: 'bottom',
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
            }
        },
        data: [
            [16, -47, "中国外交部", "#FCB03d", 15],
            [19, -23, "世界贸易组织", "#FCB03d", 10],
            [23, 33, "新华社", "#FCB03d", 15],
            [-3, 44, "国际货币基金组织", "#FCB03d", 10],
            [-12, 12, "中国政府", "#FCB03d", 15],
            [12, -23, "美国政府", "#FCB03d", 10],
        ],

    },
        {
            zlevel: 20,
            name: '人物',
            type: 'scatter',
            symbol: 'circle',
            symbolSize: function (param, a) {
                return param[4];
            },
            itemStyle: {
                normal: {
                    color: function (param) {
                        return param.data[3];
                    },
                },
            },
            label: {
                color: '#000',
                normal: {
                    textStyle: {
                        fontSize: 8,
                    },
                    position: 'bottom',
                    show: true,
                    formatter: function (param) {
                        return param.data[2];
                    },
                },
            },

            "data": [
                [-34, -48, "陆慷", "#BF54Fb", 5],
                [-50, -36, "印度", "#BF54Fb", 5],
                [-27, 4, "刘鹤", "#BF54Fb", 15],
                [17, -46, "加拿大", "#BF54Fb", 15],
                [47, -36, "墨西哥", "#BF54Fb", 15],
                [5, 34, "莱特西泽", "#BF54Fb", 15],
                [-45, -3, "韩国", "#BF54Fb", 5],
                [13, -8, "习近平", "#BF54Fb", 10],
                [-5, -30, "奥巴马", "#BF54Fb", 10],
                [32, 34, "英国", "#BF54Fb", 10],
                [10, 10, "特朗普", '#50fd5c', 15],
            ],
            "markLine": {}
        },
        {
            "type": "pie",
            "radius": ["0", "45%"],
            "center": ["50%", "50%"],
            "zlevel": 2,
            "avoidLabelOverlap": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": "center"
                },
                "emphasis": {
                    "show": false,
                    "textStyle": {
                        "fontWeight": "bold"
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "type": "linear",
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "colorStops": [{
                            "offset": 0.05,
                            "color": "rgba(130,198,255, 0.1)"
                        }, {
                            "offset": 0.5,
                            "color": "rgba(130,198,255, 0.2)"
                        }, {
                            "offset": 0.95,
                            "color": "rgba(130,198,255, 0.1)"
                        }]
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 3357
            }]
        }, {
            "type": "pie",
            "radius": ["0%", "90%"],
            "center": ["50%", "50%"],
            "avoidLabelOverlap": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": "center"
                },
                "emphasis": {
                    "show": false,
                    "textStyle": {
                        "fontWeight": "bold"
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "type": "linear",
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "colorStops": [{
                            "offset": 0.1,
                            "color": "rgba(130,198,255, 0)"
                        }, {
                            "offset": 0.5,
                            "color": "rgba(130,198,255, 0.2)"
                        }, {
                            "offset": 0.9,
                            "color": "rgba(130,198,255, 0)"
                        }]
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 3235
            }]
        }, {
            "type": "pie",
            "radius": ["0%", "135%"],
            "center": ["51%", "50%"],
            "avoidLabelOverlap": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": "center"
                },
                "emphasis": {
                    "show": false,
                    "textStyle": {
                        "fontWeight": "bold"
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "type": "linear",
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "colorStops": [{
                            "offset": 0.2,
                            "color": "rgba(130,198,255, 0.0)"
                        }, {
                            "offset": 0.5,
                            "color": "rgba(130,198,255, 0.2)"
                        }, {
                            "offset": 0.88,
                            "color": "rgba(130,198,255, 0.0)"
                        }]
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [{
                "value": 3235
            }]
        }],


};
myChart3.setOption(option)