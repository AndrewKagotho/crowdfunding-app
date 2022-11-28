<?php
  $resArray = [];
  $counter = 0;

  require './index.php';

  $sql = 'SELECT * FROM `pledges`';

  $result = mysqli_query($conn, $sql);

  while($object = mysqli_fetch_object($result)) {
    $resArray[$counter] = $object;
    $counter++;
  }

  echo json_encode($resArray);
?>