<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title> Alexander Ivankov| Web-разработка</title>
	<script type="text/javascript" src="js/d3.js"></script>
	<script type="text/javascript" src="js/jquery-3.2.0.js"></script>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">	
</head>
<body>
	<div id="preloader">
		<div class="loaderTxt">Alexander Ivankov</div>
		<sup>&beta;</sup>
		<div class="loader"></div>
	</div>
	<header class="Menu">
		<nav>
			<button class="humburger">
				<span></span>
			</button>
			<ul class="spskUl">
				<li class="spsk"><a id="up" href="#">Главная <br><hr class="actv" size="2" color="#b02f19" noshade=""></a></li>
				<li class="spsk"><a id="pageOne" href="#">Обо мне <br><hr  size="2" color="#b02f19" noshade=""></a></li>
				<li class="spsk"><a id="pageTwo" href="#">Образование <br><hr size="2" color="#b02f19" noshade=""></a></li>
				<li class="spsk"><a id="pageThree" href="#">Навыки <br><hr size="2" color="#b02f19" noshade=""></a></li>
				<li class="spsk"><a id="pageFor" href="#">Услуги <br><hr size="2" color="#b02f19" noshade=""></a></li>
				<li class="spsk"><a id="pageFive" href="#">Портфолио <br><hr size="2" color="#b02f19" noshade=""></a></li>
				<li class="spsk"><a id="down" href="#">Контакты <br><hr size="2" color="#b02f19" noshade=""></a></li>
			</ul>
		</nav>
	</header>
	<div class="main">
	<section class="d">
	<div id="Main" class="wrapper wrapperAi ">
		<div class="mainTxt">
			<div class="logo">
				<div class="logo_wrapper">
					<div class="logo_conteiner"></div>
				</div>
			</div>
			<div class="AI"><p>Alexander Ivankov</p></div>
			<div class="Ai">
				<p class="Ai1">Front-end программист</p>
				<p class="Ai2">Web дизайнер</p>
			</div>
		</div>
		<div class="mainImg">
			<div class="arrowMain"></div>
		</div>
	</div>	
	</section>
	<section class="d">
	<div id="about" class="wrapper">
		<div class="aboutImg"></div>
		<div class="ll">
			<div class="abouttext">
				<div class="abTxtTheme"><p>Обо мне</p></div>
				<div class="abTxtMain">
				<P>Привет! Я - Александр Иванков, front-end
	программист и графический дизайнер,
	специализируюсь на разработке сайтов
	с нуля, лендингов, UX/UI дизайне,
	разработке логотипов и фирменного стиля</P>
				</div>
				<div class="aboutContacts">
					<div>Moscow</div>
					<a href="tel:+79828142488">+7 982 814 24 88</a><br>
					<a name='mailAb' href="mailto:AlexanderIvankoff@gmail.com">AlexanderIvankoff@gmail.com</a>
				</div>
				<form class='aboutform'>
						<button class="buttonDark">Резюме</button>
				</form>

			</div>
	<!-- 		<div class="aboutCount">01</div> -->
		</div>
		</div>
	</section>
	<section class="d">
	<div id="education" class="wrapper">
		<div class="educationMain">
			<div class="educationTheme">
				<p>Обра<br class="brTxt">зова<br class="brTxt">ние</p>
			</div>
			<div class="University">
				<div class="University1">
					<div class="vgu"><p>ВятГу<span>2009-2014</span></p></div>
					<div class="facultet"><p>Факультет Автоматики и Вычислительной техники</p></div>
					<div class="spec"><p>Электропривод и автоматизация</p></div>
				</div>
				<div class="University2">
					<div class="vgu"><p>ВятГу<span>2012-2014</span></p></div>
					<div class="facultet"><p>Социально-Экономический факультет</p></div>
					<div class="spec"><p>Экономика и менеджмент организаций</p></div>
				</div>
			</div>	
		</div>
		<div class="educationRead">
			<div class="readText">
				<div class="nowRead"><p>Сейчас читаю</p></div>
				<div class="book"><p><span>Уитни Кесенбери, Кевин Брокс</span><br>Сторителлинг в проектировании интерфейсов</p></div>
				<hr size="4" color="#b02f19" noshade="">
				<div><a href="#" class="spisok" >Список прочитанных книг</a></div>
			</div>
<!-- 			<div class="educationCount">02</div> -->
		</div>
	</div>
	</section>
	<section class="d">
	<div id="skill" class="wrapper">
		<div class="sk">
			<div class="themeSkill">
				<p> Навыки</p>
			</div>
			<hr class="skillHr" size="5" noshade="" color="#b02f19">
			<div class="skTxt">
			    <p><span class="bld">Иностранные языки</span><br>Английский язык - Intermediate</p>
			</div>
			<div class="skTxt"><p><span class="bld">Знаком с</span><br>Gulp, Git, npm, Node.js, D3.js</p></div>
			<div class="skTxt"><p><span class="bld">Скорость "слепой" печати</span><br>qwerty ~ 160 сим/мин, <br class="brTxt">йцукен ~ 200 сим/мин</p></div>
<!-- 			<div class="skillCount">03</div> -->
		</div>
		</div>
	</section>
	<section class="d">
	<div id='IDo' class="wrapper">
		<div class="doTheme"><p><span>Что</span> я делаю</p></div>
		<div class="doWeb">
			<p class="doWebTxt">Web</p>
			<hr size="3" noshade="" color="#b02f19">
			<p>Адаптивная и <br>кроссбраузерня верстка</p>
			<p>Разработка Landing Page</p>
			<p>Анимация</p>
		</div>
		<div class="doFooter">
			<div class="doDesign">
				<p class="doDesignTheme">Design</p>
				<hr size="3" noshade="" color="#b02f19">
				<p>UI/UX дизайн</p>
				<p>Разработка дизайна сайта</p>
				<p>Разработка логотипов</p>
			</div>
			<div class="doZakaz">
				<p class="doZakazTxt"><span>Готов</span><br>выполнить<br>ваш заказ</p>
				<hr size="5" noshade="" color="#b02f19">
				<p class="doZakazCont">Связаться</p>
			</div>
		<!-- 	<div class="doCount">04</div> -->
		</div>
		</div>
	</section>
	<section class="d">
	<div class="wrapper portfolioMain">
		<div class="prt">
			<div class="portfolio"><p>Портфолио</p></div>
			<hr size='2' noshade="" color="#AF301A">
			<div class='portfolioTxtSmall'><p>Мои последние работы</p></div>
			<div class="portfolioFilter">
				<div><p><span>#</span>All</p></div>
				<div><p><span>#</span>Typography</p></div>
				<div><p><span>#</span>Logo</p></div>
				<div><p><span>#</span>Web</p></div>
				<div><p><span>#</span>Art</p></div>
			</div>
		</div>
		<div class="portfolioImg">
			<div class="works imgport_1"><div class="works_hide"> <div class="worksBorder"></div></div></div>
			<div class="works imgport_2"><div class="works_hide"> <div class="worksBorder"></div></div></div>
			<div class="works imgport_3"><div class="works_hide"> <div class="worksBorder"></div></div></div>
			<div class="works imgport_4"><div class="works_hide"> <div class="worksBorder"></div></div></div>
			<div class="works imgport_5"><div class="works_hide"> <div class="worksBorder"></div></div></div>
			<div class="works imgport_6"><div class="works_hide"> <div class="worksBorder"></div></div></div>
		</div>
		<!-- <div class="portfolioCount">05</div> -->
	</div>
	</section>
	<section class="d">
	<footer class="wrapper">
	<div class="footerMain">
		<div class="footerContact">
			<p>Котакты</p>
			<hr size="8" noshade="" color="#b02f19">
			<a href="tel:+79828142488"><i class="fa fa-phone" aria-hidden="true"></i> &nbsp;+7 982 814 24 88</a>
			<br>
			<a href="mailto:AlexanderIvankoff@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; AlexanderIvankoff@gmail.com</a>
			<p class="sity"><i class="fa fa-skype" aria-hidden="true"></i>&nbsp;&nbsp; MoonW1nd</p>
			<a href="https://www.instagram.com/moonw1nd/"><i class="fa fa-instagram" aria-hidden="true"></i>&nbsp;&nbsp; MoonW1nd</a>	<br>
			<a href="https://www.facebook.com/alexanderivankoff"><i class="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp; Александр Иванков</a>	<br>
			<a href="https://vk.com/s.ivankoff"><i class="fa fa-vk" aria-hidden="true"></i>&nbsp; Sashka Ivankoff</a>
		</div>
		<form class="FooterForm">
			<input class="txt" type="text" name="name"  placeholder="Ваше имя"><br>
			<input class="txt" type="text" name="email" " placeholder="Адрес электронной почты"><br>
			<textarea class="txtArea" name="message"  placeholder="Ваше сообщение"></textarea><br>
			<div class="container_button">
                <div class="result"></div>
			<button class="formSubmit" type="submit" name="submit" >
			<p>Отправить &nbsp; <i class="fa fa-long-arrow-right formArrow" aria-hidden="true"></i></p>
			</button>
			</div>
		</form>
	</div>
	<div class="copyRihtMine">
		<div class="copyRiht">
			<p class="cR"><sup>&copy;</sup> 2017 <span>Alexander Ivankov</span></p>
			<p>Все права защищены. Копирование материала без ссылки на первоисточник, либо письменного разрешения, преследуется по закону</p>
			<p>Designed and powered by Alexander Ivankov</p>
		</div>
			<script type="text/javascript">(function() {
			  if (window.pluso)if (typeof window.pluso.start == "function") return;
			  if (window.ifpluso==undefined) { window.ifpluso = 1;
			    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
			    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
			    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
			    var h=d[g]('body')[0];
			    h.appendChild(s);
			  }})();</script>
			<div class="pluso" data-background="transparent" data-options="medium,square,line,horizontal,nocounter,theme=02" data-services="vkontakte,facebook,twitter,odnoklassniki,google,email,moimir,print"></div>
	</div>
	</footer>
	</section>
	</div>
</body>
<script type="text/javascript" src='js/main.js'></script>
</html>	
