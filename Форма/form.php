<?php

if (isset($_POST["name"]) && isset($_POST["password"] && isset($_POST["email"]) ) { 

	// Формируємо массив для JSON відповіді
    $result = array(
    	'name' => $_POST["name"],
    	'password' => $_POST["password"]
        'email' => $_POST["email"]
    ); 

    // Переводимо массив в JSON
    echo json_encode($result); 
}

if (($_POST["username"]) && ($_POST["password"]) { 

	// Формируємо массив для JSON ответа
    $resultat = array(
    	'username' => $_POST["email"],
    	'password' => $_POST["password"]
    ); 

    // Переводимо массив в JSON
    echo json_encode($resultat); 
}
?>