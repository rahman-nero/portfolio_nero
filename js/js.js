window.addEventListener('DOMContentLoaded', function(){
// линия в правом меню , которая зачеркивает пункты когда ты на них
let line = document.querySelector('.line_through'); 

// Функция которая пердвигает нас и элементы в левом меню
function leftMenuScroll(heightScroll, spanT,textSpan, numberSpan, oveflow = 'block'){
faCicle.forEach(function(circle,index) {circle.style.color = '';});
	block_up.style.bottom = heightScroll + 'px';
	  movingSpanText.style.top = spanT + 'px';
		movingSpanNumber.style.top = spanT + 'px';
	movingSpanText.innerHTML = textSpan; //  и они меняют значение в них при перемещении
movingSpanNumber.innerHTML = numberSpan; // и они меняют значение в них при перемещении
oveflowButton.style.display = oveflow;// и эта кнопка в верхней меню 'Send ME' которая появлетсчя 
	// мы берем кружок 'fa-circle' и унего устанавливаем цвет - чтобы узнать где мы
}


// MENU ICON

let menuOpenIcon = document.querySelector('.link_open_menu span');
let openingMenu = document.querySelector('.menu');

menuOpenIcon.addEventListener('click', function() {
	openingMenu.classList.toggle('menuOpen');
});

/*
	Левое меню сделать так чтобы принажатий на ссылку в меню, перемещались блоки
*/
let leftMenu = document.querySelector('.main_block_left_scroll'), //Левое меню
	spanInMenu = leftMenu.querySelectorAll('span'), // линий в в меню
	faCicle = leftMenu.querySelectorAll('.fa-circle'), // Кружочки
	oveflowButton = document.querySelector('.oveflowButton'); // верхнее меню появление кнопки 'Send me'


let movingSpanText = document.querySelector('.activeBlock'), // блок который показывает на какой месте ты: пример "Home .." 
	movingSpanNumber =  document.querySelector('.numberMenu'); // блок который показывает на какой по номеру месте ты: пример "01 .." 

let block_up = document.querySelector('.main_block_container_center'); // пермещение главного контента - за это отвечает 
let heightBlocks = document.querySelector('.main_block_container'); // вычислеем в низу Ю сколько выота блока, для того чтобы перемещать блоки

spanInMenu.forEach(function(element){
	element.addEventListener('click', function(){

	if (element.className == 'workSlide') {

		leftMenuScroll(heightBlocks.clientHeight, 270, 'Work', '02');
		element.previousSibling.previousSibling.style.color = '#0F33FF';
		line.style.top = '80' + 'px'; // Зачеркиваем пункт 'Work' в правом выдвегающем меню 
	}else if (element.className == 'aboutSlide') {

		leftMenuScroll(heightBlocks.clientHeight * 2, 270 + 168, 'About', '03');
		element.previousSibling.previousSibling.style.color = '#0F33FF';
		line.style.top = '135' + 'px';
	}else if (element.className == 'liveSlide') {
		leftMenuScroll(heightBlocks.clientHeight * 3, 270 + 168 * 2, 'Living', '04');
		element.previousSibling.previousSibling.style.color = '#0F33FF';
		line.style.top = '190' + 'px';
	}else if (element.className == 'sendSlide') {

		leftMenuScroll(heightBlocks.clientHeight * 4, 270 + 168 * 3, 'Send', '05');
		element.previousSibling.previousSibling.style.color = '#0F33FF';
		line.style.top = '250' + 'px';
	}else if (element.className == 'homeSlide') {

		leftMenuScroll(0, 103, 'Home', '01','none');
 		element.previousSibling.previousSibling.style.color = '#0F33FF';
 		line.style.top = '25' + 'px';
	}
	openingMenu.classList.remove('menuOpen'); // эта типа фича, когда открыта меню верхняя, и ты нажимаешь на пункт в левом меню, это меню скрывается

	});
		
});

	


 // Наведение на кнопку Check my portfolio ;) -)

let buttonBackground = document.querySelector('.background_button');
let buttonCheck = document.querySelector('.button_down');

buttonCheck.addEventListener('mouseover', () =>{
	buttonBackground.style.width = '100%';
});
buttonCheck.addEventListener('mouseout', () =>{
	buttonBackground.style.width = '50%';
});

buttonCheck.addEventListener('click', () =>{
	leftMenuScroll(heightBlocks.clientHeight, 270, 'Work', '02');
});


let sendButton = document.querySelectorAll('.send-down');
sendButton.forEach(function(element){
 	element.addEventListener('click',() =>{
 		leftMenuScroll(heightBlocks.clientHeight * 4, 270 + 168 * 3, 'Send', '05');
 		line.style.top = '250' + 'px';
 	});

});


// Слайдеp который перелистывает работы

if (document.documentElement.clientWidth <= 1200) { // Если чел с телефона то к слайдеру применять эти стили. в ином случае нижние

	oveflowButton.style.display = 'block'; // Кнопка Send me в верхней меню 

	// Зачеркивание пунктов в правом меню : пример если ты на Home блоке в выдвегающем менб ссылка home будет зачеркнута 
	document.addEventListener('scroll',function(element){ // при скролинге применять стили к линией
		document.documentElement.scrollTop >= 0 ? line.style.top = '25' + 'px' : false;
		document.documentElement.scrollTop >= 900 ? line.style.top = '80' + 'px' : false;
		document.documentElement.scrollTop >= 1800 ? line.style.top = '135' + 'px' : false;
		document.documentElement.scrollTop >= 2700 ? line.style.top = '190' + 'px' : false;
		document.documentElement.scrollTop >= 3600 ? line.style.top = '250' + 'px' : false;	
	});


}
// Form

let modalForm = document.querySelector('.modal_answer'),
	closeModal = modalForm.querySelector('.close-modal'); //Модальное окно при отправке формы

let form = document.querySelector('form');

form.addEventListener('submit', function (event){
	event.preventDefault();
	let request =  new XMLHttpRequest();
	request.open('POST', 'email.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-url');

	request.addEventListener("readystatechange", () => {
	if (request.readyState === 4 && request.status === 200) {

	  modalForm.style.display = 'block';
    }
    if (request.status !== 200) {
    	alert('Ошибка');
    }

    });
 
 request.send("name=" + form.name.value + "&email=" + form.email.value);


});
closeModal.addEventListener('click', () =>{
	modalForm.style.display = 'none';
});

});


