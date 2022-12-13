<?php
//connect using servername, account username, account password, and database
$db = new mysqli("localhost", "web", "Rm6D?PKBy&K3QhJ!", "CCLR");
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}

//Checks to make sure all three fields are filled, then changes the sql statement
if (!empty($_GET['sec'])){
  if (!empty($_GET['twn'])){
    if (!empty($_GET['rge'])){
      $sql = "SELECT * FROM `cclr2` WHERE SEC = ? AND TSP = ? AND RGE = ?";
    } else {
      echo "Fields are required.";
      $db->close();
      exit();
    }
  } else {
    echo "Fields are required.";
    $db->close();
    exit();
  }
} else {
  echo "Fields are required.";
  $db->close();
  exit();
}

//prepare & execute
$stmt = $db->prepare($sql);
$sec = $_GET['sec'];
$twn = $_GET['twn'];
$rge = $_GET['rge'];
$stmt->bind_param("sss", $sec,$twn,$rge);
$stmt->execute();
//Display the results in an html table
$result = $stmt->get_result();
$db->close();

header("Content-Type: application/json"); // Advise client of response type

$rows = array();
while($r = mysqli_fetch_assoc($result)) { //make the results obj an array
    $rows[] = $r;                           //this returns ALL the results, junk & unused data.
}

echo json_encode($rows); // Write it to the output
?>