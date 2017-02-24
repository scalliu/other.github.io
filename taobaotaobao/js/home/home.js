$(function() {
	//	$.ajax({
	//		type:"get",
	//		//\n
	//		//参照页面是category.html 这个页面
	//		url:"./common.html",
	//		async:true,
	//		data:"",
	//		dataType:"html",
	//		//怎么获取html 内容
	//		success:function(data){			 
	//			var a = data.getElementsByClassName("common-fixFooterNav");
	//			 console.log(a)
	////			var  tempObj  = $(".common-fixNav").clone(true);
	////			console.log(tempObj[0 ])
	////			$(".common-fixNav").html(tempObj)
	//		},
	//		error:function(d){
	//			console.log(d)
	//		}
	//		
	//	});
	//$(".zw-common-footer").load("../../world/html/common/common.html #zw-common-footer",function(x,y,z){});
	$(".common-fixNav1").load("./common.html .common-fixNav", function(a, b, c) {
			
	})
	$(".common-fixFooterNav").load("./common.html .common-fixFooterNav", function(a, b, c) {
		console.log(b);
	})
}); //jq结尾