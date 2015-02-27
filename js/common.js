//smartRollover.js
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].src.match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}

$(function() {
	$('.tn_btn_maxheight').on('click',function(){
		var mh_father = $(this).parent( ".tn_box_maxheight" )
		if(mh_father.hasClass('open')){
			mh_father.removeClass('open');
			$(this).html('...続き&raquo;');
		}else{
			mh_father.addClass('open');
			$(this).html('閉じる');
		}		
	});
	$('.acco_box .acco_a').on("click",function(){
		$(this).toggleClass('opened');
		$(this).next('.acco_dv').slideToggle('slow');
	});
});
