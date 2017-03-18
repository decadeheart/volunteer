function openModal() {
	document.getElementById('myModal').style.display="block";
}
function closeModal(){
	document.getElementById('myModal').style.display="none";
}
var slideIndex=1;
showSlides(slideIndex);
function plusSlides(n){
	showSlides(slideIndex+=n);
}
function currentSlide(n) {
	showSlides(slideIndex=n);
}
function showSlides(n) {
	var i;
	var slides=document.getElementsByClassName("mySlides");
	var dots=document.getElementsByClassName("demo");
	var captionText=document.getElementById("caption");
	if(n>slides.length){slideIndex=1;}
	if(n<1){slideIndex=slides.length;}
	for(i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	for(i=0;i<slides.length;i++){
		dots[i].className=dots[i].className.replace(" active","");
		slides[slideIndex-1].style.display="block";
		dots[slideIndex-1].calssName+=" active";
		captionText.innerHTML=dots[slideIndex-1].alt;
	}
}

// 获取弹窗
var modal = document.getElementById("fooModal");
 
// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var img = document.getElementById("foo_image");
var captionText = document.getElementById("foo_caption");
img.onclick = function(){
    modal.style.display = "block";
    captionText.innerHTML = this.alt;
}
 
// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("fooClose")[0];
 
// 当点击 (x), 关闭弹窗
span.onclick = function() { 
  modal.style.display = "none";
}