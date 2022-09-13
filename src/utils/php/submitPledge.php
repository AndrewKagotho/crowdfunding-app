<?php
  require 'dbconn.php';

  $status = $_POST['pledge'];
  $amount = $_POST['amount'];
  $name = $_POST['name'];

  echo 'Status: '.$status .', Amount : ' .$amount .', Name: ' .$name;
?>