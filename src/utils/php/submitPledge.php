<?php
  require 'dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $pledgeID = $data->pledgeID;
  $amount = $data->amount;

  $sql = "INSERT INTO `history`(`pledgeID`, `amount`, `date`) VALUES ('$pledgeID','$amount',NOW())";

  $result = mysqli_query($conn, $sql);

  echo $result;

  // if($result) {
  //   echo "<script language = 'javascript'>
  //     location.href = 'javascript:history.go(-1)'
  //   </script>";
  // }
?>