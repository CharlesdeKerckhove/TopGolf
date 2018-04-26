<?php
	session_start();
	$host = 'localhost';
	$dbname = 'topgolf';
	$user = 'idbmhzrq_Admin';
	$pass = 'qwertyuiop123';

	try {
		$DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
	}
	catch(PDOException $e) {
		echo $e->getMessage();
	}
?>