var accessButton=document.getElementById("button");
var accessMenu=document.getElementById("menu");
var accessButtonIcon=document.getElementById("menu_ikon");	
var accessMain=document.getElementById("main2");
function showHideMenu() {		
		if (accessButton.getAttribute("class")==="tohide") {
			accessMenu.setAttribute("style", "display: none;");
			accessButton.setAttribute("class", "toshow");
			accessButton.innerHTML="Показать разделы сайта";
		} 
		else if (accessButton.getAttribute("class")==="toshow") {
			accessMenu.setAttribute("style", "display: block;");
			accessButton.setAttribute("class", "tohide");
			accessButton.innerHTML="Скрыть разделы сайта";
		} 
		
}
function widthScrollBand() {
	// создадим элемент с прокруткой
var div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// при display:none размеры нельзя узнать
// нужно, чтобы элемент был видим,
// visibility:hidden - можно, т.к. сохраняет геометрию
div.style.visibility = 'hidden';

document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

return scrollWidth;
}
function showHideMenu2() {
if (accessButton.getAttribute("class")==="tohide") {
			accessMenu.setAttribute("style", "display: none;");
			accessButton.setAttribute("class", "toshow");
			accessButton.innerHTML="Показать разделы сайта";
		} 
}
function managerMenu() {
	accessMenu.setAttribute("style", "display: none;");
	if (document.body.clientWidth>=(480-widthScrollBand())) {
		accessMenu.setAttribute("style", "display: block;");
		accessButton.setAttribute("style", "display: none;");
		accessButtonIcon.setAttribute("style", "display: none;");	
	} else {
		accessButton.setAttribute("style", "display: block;");
		accessButtonIcon.setAttribute("style", "display: block;");	
		accessMenu.setAttribute("style", "display: none;");
		}
}
window.onload=managerMenu;
accessButtonIcon.onclick=showHideMenu;
window.onresize=managerMenu;
accessMain.onclick=showHideMenu2;


function resizeScreen() {
	if (document.body.clientWidth>=480) {
		accessMenu.setAttribute("style", "display: block;");
		accessButton.setAttribute("style", "display: none;");
		accessButtonIcon.setAttribute("style", "display: none;");
	}
}


var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
