<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: access");
  header("Access-Control-Allow-Methods: POST");
  header("Content-Type: application.json; charset=UTF-8");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  $dbname = 'crowdfundingdb';
  $dbserver = 'localhost';
  $dbuser = 'root';
  $dbpass = '';
  $dbname = 'crowdfundingdb';

  $conn = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);

  if(!$conn)
    echo 'Connection unsuccessful';
?>