<?php
require_once('./includes/database.php');

if($_GET['p']){  
    require_once('./pages.'.$_GET['p'].'.php');
} else {
    require_once('./pages/selectTraining.php');
}
?>