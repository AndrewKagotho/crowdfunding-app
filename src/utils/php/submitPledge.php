<?php
  require 'dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $pledgeID = $data->pledgeID;
  $amount = $data->amount;
  $left = $data->left - 1;

  $sql = "INSERT INTO `history`(`historyID`, `pledgeID`, `amount`, `date`) VALUES ('$left','$pledgeID','$amount',NOW())";
  $sql2 = "UPDATE `pledges` SET `total`='$left' WHERE `pledgeID` = '$pledgeID'";

  $result = mysqli_query($conn, $sql);
  $result2 = mysqli_query($conn, $sql2);

  echo $result;
?>