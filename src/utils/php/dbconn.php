<?php
  // header("Access-Control-Allow-Origin: *");
  // header("Access-Control-Allow-Headers: Accept");
  // header("Access-Control-Allow-Methods: *");
  // header("Content-Type: application.json; charset=UTF-8");
  // header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  $dbserver = 'containers-us-west-84.railway.app:5450';
  $dbuser = 'root';
  $dbpass = 'zBadd7z8UfXyDJNhyKOB';
  $dbname = 'railway';

  $conn = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);

  if(!$conn)
    echo 'Connection unsuccessful';
?>