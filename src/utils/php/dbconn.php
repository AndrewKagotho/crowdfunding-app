<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept");
  header("Access-Control-Allow-Methods: *");
  header("Content-Type: application.json; charset=UTF-8");

  $dbserver = 'containers-us-west-84.railway.app:5450';
  $dbuser = 'root';
  $dbpass = 'zBadd7z8UfXyDJNhyKOB';
  $dbname = 'railway';

  $conn = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);

  if(!$conn)
    echo 'Connection unsuccessful';
?>