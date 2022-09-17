<?php
  $objectArray = [];
  $pledgeTotalArray = [];
  $counter = 0;
  require 'dbconn.php';

  $sql1 = "SELECT * FROM `project` WHERE `projectID` = 'crowdfund'";
  $result1 = mysqli_query($conn, $sql1);
  $object1 = mysqli_fetch_object($result1);
  
  $sql2 = "SELECT SUM(amount) FROM `history`";
  $result2 = mysqli_query($conn, $sql2);
  $object2 = mysqli_fetch_object($result2);

  $sql3 = "SELECT * FROM `history`";
  $result3 = mysqli_query($conn, $sql3);
  $backers = mysqli_num_rows($result3);

  $sql4 = "SELECT total FROM `pledges`";
  $result4 = mysqli_query($conn, $sql4);
  while($object = mysqli_fetch_array($result4)) {
    $pledgeTotalArray[$counter] = $object['total'];
    $counter++;
  }

  $objectArray[0] = $object1;
  $objectArray[1] = $object2;
  $objectArray[2] = $backers;
  $objectArray[3] = $pledgeTotalArray;

  echo json_encode($objectArray);
?>