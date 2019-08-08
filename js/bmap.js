
function bmap(_div ) {
	return bmap(_div , null , null,false , false,false);
}

/**
 * 创建百度地图
 * @param _div 地图所处div
 * @param _centerPoint 地图当前中心点
 * @param _mapZoom 当前缩放层级 0-19
 * @param _is_hybrid_map 是否卫星图
 * @param _overView 是否包含鹰眼图
 * @returns 百度地图 Bmap
 */
function bmap(_div ,_centerPoint , _mapZoom , _is_hybrid_map   , _overView , _navigation ) {
	 
	
	var map = _is_hybrid_map ? new BMap.Map(_div, {mapType: BMAP_HYBRID_MAP}) : new BMap.Map(_div);    // 创建Map实例
	
	if(_centerPoint && _mapZoom) {
		map.centerAndZoom(_centerPoint, _mapZoom);  // 初始化地图,设置中心点坐标和地图级别
		 
	} else {
		var point = new BMap.Point(116.404, 39.915);//, 11
		map.centerAndZoom(point, 11);
	}
	 
 	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
 	if(_navigation) {
 		var top_left_navigation = new BMap.NavigationControl(/*{type:BMAP_NAVIGATION_CONTROL_ZOOM}*/);  //左上角，添加默认缩放平移控件
 	 	map.addControl(top_left_navigation);      // 
 	 
 	}
 	
 	if(_overView) {
 		var overView = new BMap.OverviewMapControl();
 	 	var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});

 		map.addControl(overView);          //添加默认缩略地图控件
 	 	map.addControl(overViewOpen);      //右下角，打开
 	}
 	 
 	return map ;
}



	function ComplexCustomOverlay(point ){
		this._point = point;
    
	}
	ComplexCustomOverlay.prototype = new BMap.Overlay();
	ComplexCustomOverlay.prototype.initialize = function(map){
		this._map = map;
		var div = this._div = document.createElement("div");
		div.style.position = "absolute";  
		var arrow = this._arrow = document.createElement("div");
   
		arrow.style.position = "absolute"; 
		arrow.style.overflow = "hidden";
		div.appendChild(arrow);
		arrow.className="css_animation";  
    

		map.getPanes().labelPane.appendChild(div);
    
		return div;
	}
	ComplexCustomOverlay.prototype.draw = function(){
		var map = this._map;
		var pixel = map.pointToOverlayPixel(this._point);
		this._div.style.left = pixel.x - 25 + "px";
		this._div.style.top  = pixel.y - 25 + "px";
	}
	
	ComplexCustomOverlay.prototype.setPosition = function(point) {
		this._point = point ;
	
	}
	
	

	/**
	 * 添加一个闪烁点
	 * @param lon
	 * @param lat
	 * @returns
	 */
	function addComplexOverlay(map , point , iconUrl , id , info) {
		
		if(!id) {
			id = -1;
		}
		
		 
	   var  c = new ComplexCustomOverlay(point);
	   c.id = id ;
	   cs.push(c);
	    
	    	
	    map.addOverlay(c);
	    
	 
	    var m = new BMap.Marker(point );  // 创建标注
	    m.id = id;
	    ms.push(m);
	    if(info) {
	    	var label = new BMap.Label(info );  // 创建文本标注对象
	    	//label.setStyle({ color : "white", fontSize : "14px" }); 
	    	m.setLabel(label);
		  
	    }
	   
	  
	    	 
	    if(iconUrl) {
	   		var size = new BMap.Size(36,36);
	    	var icon = new BMap.Icon( iconUrl , size , {imageOffset: new BMap.Size(0, 0)}  );
	    	m.setIcon(icon);
	    }
	    
		map.addOverlay(m);               // 将标注添加到地图中
		
	}
	
	 	 
	var ms = [] ;
	var cs = [] ;
	
	/**
	 * 添加一个闪烁点
	 * @param lon
	 * @param lat
	 * @returns
	 */
	function mergeComplexOverlay(map , point , iconUrl , id , info) {
		var m , c ;
		
		if(!id) {
			id = -1; 
		}  
		for(var i = 0 ; i < ms.length ; i++) {
			
			if(ms[i].id = id){
				m = ms[i];
				c = cs[i];
				break ;
			}
			
		}
		
		
		if(m && c) {
			//已存在,修改经纬度
			//var point = new BMap.Point(lon , lat);
			m.setPosition(point);
			c.setPosition(point);
			c. draw();
		} else {
			//不存在重新绘制
			addComplexOverlay(map ,point , iconUrl , id , info);
		}
		 
	}
	
	function removeComplexOverlay(id) {
		var m , c ;
		
		if(!id) {
			id = -1;
		}
		
		 
		for(var i = 0 ; i < ms.length ; i++) {

			if(ms[i].id = id){
				m = ms[i];
				c = cs[i];

				ms.splice(i,1);
				cs.splice(i,1);
				break;
			}

		}
			 
		if(m)
			map.removeOverlay(m);  
		if(c)
			map.removeOverlay(c);   
		m = null;
		c = null;
	}
	
 
	var cls = [];
	
	/**
	 * 地图画一个圆圈
	 * @param center_point 中心点 point
	 * @param radius 半径 单位为米
	 * @returns
	 */
	function addCircle( center_point , radius ,id) {
		if(!id) {
			id = -1;
		}
		
		removeCircle(id);
		var c = new BMap.Circle(center_point , radius);
		c.id = id;
		map.addOverlay(c);
		
		cls.push(c);
		 
	}
	
	function removeCircle(id) {
		if(!id) {
			id = -1;
		}
		var c ;
		for(var i = 0 ; i < cls.length ; i++) {

			if(cls[i].id = id){
				 
				c = cls[i]; 
				cls.splice(i,1);
				break;
			}

		}
		
		if(c) {
			map.removeOverlay(c);    
		}
	}
	
	
	function formatDistance(distance) {
		var str = '' ;
		if(distance > 1000) {
			str = (distance / 1000).toFixed(1) + '千米';
		} else {
			str =  distance.toFixed(1) + '米';
		}
		return str ;
	}
	
	
	function createInfoMarker(point , iconUrl , info) {
		
		var m = new BMap.Marker(point );  // 创建标注
		 
		if(info) {
			var label = new BMap.Label(info ,{
				 offset: new BMap.Size(20, -20) 
			});  // 创建文本标注对象
			label.setStyle({ color : "#000", fontSize : "14px" });
			m.setLabel(label);

		}
 
		if(iconUrl) {
			console.log('iconUrl ' + iconUrl);
			var size = new BMap.Size(36,36);
			var icon = new BMap.Icon( iconUrl , size , {imageOffset: new BMap.Size(0, 0)}  );
			m.setIcon(icon);
		}
		return m ;
	}
	
	/**
	 * 拼接设备信息
	 * @param equi
	 */
	function createEquiInfo(equi) {
		var iconUrl = equi.icon && equi.icon != '' && equi.icon.length > 2 ? equi.icon : ctx + '/comm/img/equi/1' + equi.icon ;
			
		var str = 
			
			'<table style="background: white;color: black;z-index: 1000000;">'+
		 '<tr>'+
		 	'<td> 设备名称: </td>'+
		 	'<td> ' + equi.equi_name +  '</td>'+
		' </tr>'+
		  '<tr>'+
		 	'<td> 布设位置: </td>'+
		 	'<td> ' + (equi.location ? equi.location : '') +  ' </td>'+
		 '</tr>'+
		 ' <tr>'+
		 	'<td> 经纬度: </td>'+
		 	'<td> ' + equi.lon + "," + equi.lat + ' </td>'+
		' </tr>'+
		  '<tr>'+
		 	'<td> 设备状态: </td>'+
		 	'<td> 正在防护 </td>'+
		' </tr>'+
		' <tr>'+
		 	'<td> 设备图片: </td>'+
		 	'<td> <img alt="" src="' + iconUrl + '"> </td>'+
		 '</tr>'+
		 '<tr>'+
		 	'<td > 设备介绍: </td>'+
		 	'<td  > ' + equi.equi_description + '  </td>'+
		 '</tr>'+
		 '<tr>'+
		 	'<td> 技术指标: </td>'+
		 	'<td  >   </td>'+
		' </tr>'+
		 
	'</table>';
		
		
		return str ;
		
	}
	
	

	 /*
	 * 创造空情渲染结构 参考curr_air
	 * 返回格式 //当前地图上要加载的空情 结构{id:air_id,sleep:休眠时间,air:air_info,points:[移动的所有点] ,index:当前位置,line:和目标单位的连线,label:和目标单位的距离,air_marker:无人机marker,
	 *	//open_defend_index:开启防护index,close_defend_index:关闭防护index,open_order_index:开启上级指令index,close_order_index:关闭上级指令index}
	 *
	 */
	 function createCurrAir(air , min_unit_radis) {
	 	var unit_point = new BMap.Point(air.unit_lon , air.unit_lat);
	 	var points = [] ;
	 	var index = 0;
	 	//open_defend_index:开启防护index,close_defend_index:关闭防护index,open_order_index:开启上级指令index,close_order_index:关闭上级指令index
		var open_defend_index ;
		var close_defend_index ;
		var open_order_index ;
		var close_order_index ;
	 	
	 		//根据空情和防护目标来确定角度和无人机飞行轨迹
	 		
	 		var air_point = new BMap.Point(air.lon , air.lat);
	 		
	 		
	 		//算出距离
	 		var distance = map.getDistance(unit_point,air_point );
	 		
	 		//根据速度算出 步数
	 		var cnt = parseInt((distance - air_unit_mindistance) / air.speed) ;
	 	
	 		//实际按照500毫秒一个步长
	 		cnt = cnt * 2 ;
	 		 
	 	
	 		var cha_lon = (unit_point.lng - air_point.lng) * (distance - air_unit_mindistance) / distance;
	 		var cha_lat = (unit_point.lat - air_point.lat) * (distance - air_unit_mindistance) / distance;
	 	
	 		//每一步的进步经纬度
	 		var add_lon = cha_lon / cnt;
	 		var add_lat = cha_lat / cnt;
	 	
	 		for(var i = 0 ; i < cnt ; i++) {
	 			// 计算每步新的位置
	 			var _lon = air_point.lng + i * add_lon;
	 			var _lat = air_point.lat + i * add_lat;
	 		
	 			var new_point = new BMap.Point(_lon , _lat);
	 			
	 			//距离小于防护半径*1.1的时候开启防护
	 			 
	 			var p_d = map.getDistance(unit_point,new_point );
	 			if(p_d <= min_unit_radis * 1.1 && !open_defend_index) {
	 				//防护index
	 				open_defend_index = i ;
	 			}
	 				
	 			//指令是1.2倍
	 			if(p_d <= min_unit_radis * 1.2  && !open_order_index) {
	 				//防护index
	 				open_order_index = i ;
	 			}
	 				
	 			 
	 			
	 		
	 			points.push(new_point);
	 	
	 		}
	 		//前进的位置
	 		if(air.type == 1) {
	 			//无人机
	 			//返回的位置 如果是导弹,这里就没有了,导弹在这里被销毁
	 			for(var i = cnt - 1 ; i >= 0 ; i--) {
	 				// 计算每步新的位置
	 				var _lon = air_point.lng + i * add_lon;
	 				var _lat = air_point.lat + i * add_lat;
	 		
	 				var new_point = new BMap.Point(_lon , _lat);
	 		
	 				points.push(new_point);
	 				
	 				//距大于防护半径*1.1的时候开启防护
	 				 
	 				var p_d = map.getDistance(unit_point,new_point );
	 				if(p_d >= min_unit_radis * 1.1 && !close_defend_index) {
	 					//防护index
	 					close_defend_index = points.length ;
	 				}
	 					
	 				//指令是1.2倍
	 				if(p_d >= min_unit_radis * 1.2 && !close_order_index) {
	 					//防护index
	 					close_order_index = points.length  ;
	 				}
	 				 
	 	
	 			}
	 		
	 		}
	 		
	 		if(!close_order_index) {
	 			close_order_index = points.length - 4;
	 		}
	 		if(!close_defend_index) {
	 			close_defend_index = points.length - 4;
	 		}
			
			//距离label修改
	 		var p_distance = map.getDistance(unit_point,air_point );
	 		var format_distance = formatDistance(p_distance);
	 	
	 		var c_lon = (unit_point.lng + air_point.lng)/2;
			var c_lat = (unit_point.lat + air_point.lat)/2; 
		 
			
			var label = new BMap.Label(format_distance , {
									 	 position : new BMap.Point(c_lon , c_lat) 
										});  // 创建文本标注对象
			//label.setStyle({ color : "white", fontSize : "14px" }); 
			label.id=air.id;
		
			// 连线
	 		var line = new BMap.Polyline([unit_point,air_point ], {strokeColor:"red", strokeWeight:3, strokeOpacity:0.8});   //创建折线
	 	 	line.id=air.id;
			 
	 	 	
	 	 	var info = air.info_no + '(高度:' + air.height + '米,速度:' + air.speed + '米/秒)' ;
			 
	 	 	var icon_ = air.type == 1 ? ctx + '/resource/images/equi_icons/11_36.png' : ctx + '/resource/images/equi_icons/10_36.png';
	 	 	
			var air_marker = createInfoMarker(air_point , icon_ , info);
			
			//动画
			var  air_complex = new ComplexCustomOverlay(air_point);
			
			var air_info = {id:air.id,air:air,points:points,index:0,line:line,label:label,air_marker:air_marker,air_complex:air_complex,
				 open_defend_index : open_defend_index,close_defend_index:close_defend_index,open_order_index:open_order_index,
				 close_order_index:close_order_index};
			
			
			//console.log("id:" + air.id + " , open_defend_index " + open_defend_index + " , close_defend_index " + close_defend_index);
			
			return air_info ;
			
	 	
	 }
	 
	/**
	 * 缩放到可以看到地图上所有的自定义标记
	 * @returns
	 */
	function zoomAllOverlay() {
		var ps = [];
		var os = map.getOverlays();
		for(var i in os) {
			if(os[i] instanceof BMap.Marker)
				ps.push(os[i].getPosition());
			
		}
		 
		map.setViewport(ps);
	}
	
	