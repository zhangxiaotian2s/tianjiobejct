var popu_servant_box = $("#popu_layer_servant_box"); 
               		$(document).on("mouseover", "#popup_layer_servant_ul li", function(){ 	
               			var servant_name         = $(".popu_layer_servant_mes").find("strong"), 
               			    servant_position     = $(".popu_layer_servant_mes").find("span"), 				
               			    servant_commpany     = $(".popu_layer_servant_mes").find("p"), 				
               			    servant_img          = $(".popu_layer_img_box").find("img"), 				
               			    servant_btn          = $(".popu_layer_servant_btn").find("a"); 			
               			    var $this  = $(this), 			
               			    $this_img  = $this.find("img"),
               			    $top_value = $this.position().top+6; 			
               			    function get_attr(attrname){ 				
               			    	return $this_img.attr(attrname) 			
               			    } 			
               			    var popup_servant_attr={
               			    	imgurl:get_attr("src"), 				
               			    	servant_name:get_attr("data-servant-name"), 				
               			    	servant_position:get_attr("data-servant-position"), 				
               			    	servant_commpany:get_attr("data-servant-commpany"), 				
               			    	servant_isfriend:get_attr("data-servant-isfriend") 			
               			    } 		
               			    popu_servant_box.show()
               			    $("#popu_layer_servant_box").css('top',$top_value)     				
               			    servant_name.html(popup_servant_attr.servant_name) 				
               			    servant_img.attr("src",popup_servant_attr.imgurl) 				
               			    servant_position.html(popup_servant_attr.servant_position) 				
               			    servant_commpany.html(popup_servant_attr.servant_commpany) 			
               			    if(popup_servant_attr.servant_isfriend=='0'){ 				
               			    	servant_btn.removeClass().addClass("add_firends") 			
               			    }else{ 				
               			    	servant_btn.removeClass().addClass("start_chat") 			
               			    }  		
               		}); 		 		
               		$(document).on("mouseleave", "#servant_box", function(){ 			
               			popu_servant_box.hide() 		
               		});
               		