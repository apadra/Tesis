<?php
require("dbinfo.php");
header('Access-Control-Allow-Origin: *');
header('Content-type: text/plain; charset=utf-8');

$search = $_POST['estado'];


if($_POST['estado']==""){

echo "";
}else{


// Opens a connection to a MySQL server
$connection=mysql_connect ($server, $username, $password);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}


$query = "SELECT Nombre FROM sitios WHERE Nombre LIKE '%$search%' UNION SELECT name FROM markers WHERE name LIKE '%$search%' ";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}



while($row= mysql_fetch_array($result)){

     echo '<div class="busdiv"><a href="#" class="bus">'. utf8_encode($row['Nombre']). "</a></div>";
    echo '<div class="busdiv"><a href="#" class="bus">'. utf8_encode($row['name']). "</a></div>";
     
}

}
?>	