<?php

// if(isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept");
  header("Access-Control-Allow-Methods: *");
  header("Content-Type: application.json; charset=UTF-8");
// }

  if ($_SERVER['HTTP_HOST'] == 'localhost') {
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '';
    $dbname = 'crowdfundingdb';
  }

  $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
?>