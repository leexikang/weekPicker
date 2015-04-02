$(document).ready(function(){
			$(".btn-week").click(function(){

				if($(this).hasClass('btn-primary')){
					$(this).removeClass('btn-primary');
					$(this).addClass('btn-default');
					var input = $("#week").val();
					var deleteText = $(this).text() + ",";
					var result =   input.replace(deleteText, "");
					$("#week").val(result);

				}else{

					$(this).removeClass('btn-default');
					$(this).addClass('btn-primary');
					var $input = $("#week");
					$input.val($input.val()+$(this).text()+",");

				}
			});
		});
