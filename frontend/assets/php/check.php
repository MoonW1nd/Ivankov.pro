<?php
    $name = isset($_POST['name'])?$_POST['name']:"";
    $email = isset($_POST['email'])?$_POST['email']:"";
    $message = isset($_POST['message'])?$_POST['message']:"";
// if(!empty($name) && !empty($email) && !empty($message)) {
	$email_validate = filter_var($email, FILTER_VALIDATE_EMAIL);
// 	if(check_lenght($name,2,40) && check_lenght($message,2,2000) && $email_validate) {
// 		echo "Спасибо за сообщение";
// 	}
// 	else{
// 		echo "Введены некоректные данные";
// 	}
// }
// else {
// 	echo "Заполните пустые поля";
// }
if (empty($name)) {
	if(empty($email)) {
		if(empty($message)){
			echo "123";//Пустые все 3 поля
		}
		else{
			echo "12";//пустые только первые 2
		}
	}else{
		if(empty($message)){
		echo "13";//Пустые первые и 3 поля	
		}else {
		echo "1";
		}
	}	
}elseif(empty($email)) {
		if(empty($message)){
			echo "23";//Пустые 23 поля
		}
		else{
			echo "2";//пустые только первые 2
		}
	}else{
		if(empty($message)){
		echo "3";//Пустые первые и 3 поля	
		}else { //все поля заполнены
			if (!check_lenght($name,2,40)) {
				echo "4";
			}elseif (!$email_validate) {
				echo "5";
			}elseif (!check_lenght($message,2,2000)) {
				echo "6";
			}else
				echo "7"; 
			}
		} 
function clean ($value = "") {
	$value = trim($value);
	$value = stripcslashes($value);
	$value = strip_tags($value);
	$value = htmlspecialchars($value);
	return $value;
}	
function check_lenght ($value = "", $min, $max) {
	$result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
	return !$result;
}