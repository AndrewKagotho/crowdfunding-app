<?php
  require 'dbconn.php';

  $pledgeID = $_POST['pledgeID'];
  $amount = $_POST['amount'];

  $sql = "INSERT INTO `history`(`pledgeID`, `amount`, `date`) VALUES ('$pledgeID','$amount',NOW())";

  $result = mysqli_query($conn, $sql);
?>