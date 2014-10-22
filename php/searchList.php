<?php
require("dbinfo.php");
header('Access-Control-Allow-Origin: *');

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


$query = "SELECT a.Nombre, b.lat, b.lng from sitios a inner join markers b on a.ID_Markers = b.ID WHERE a.Nombre like '%$search%' UNION SELECT a.name as Nombre, a.lat, a.lng from markers a where a.name like '%$search%'";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}
   while($row= mysql_fetch_array($result)){
      echo '<li data-lat="'. utf8_encode($row['lat']). '" data-lng="'. utf8_encode($row['lng']). '" onclick="buscarYAbrirPin(this);"><a href="#">'. utf8_encode($row['Nombre']). "</a></li>";
    }

}
?>	


