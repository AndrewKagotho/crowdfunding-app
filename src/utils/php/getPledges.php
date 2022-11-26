<?php
  // header("Access-Control-Allow-Origin: *");

  $resArray = [];
  $counter = 0;

  require 'dbconn.php';

  $sql = 'SELECT * FROM `pledges`';

  $result = mysqli_query($conn, $sql);

  while($object = mysqli_fetch_object($result)) {
    $resArray[$counter] = $object;
    $counter++;
  }

  echo json_encode($resArray);
?>