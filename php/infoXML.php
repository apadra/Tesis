<?php
require("dbinfo.php");
header('Access-Control-Allow-Origin: *');
header("Content-type: text/xml; charset=utf-8");

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

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
mysql_query("SET NAMES utf8");
// Select all the rows in the markers table
$query = "SELECT * FROM sitios";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

//START XML file
echo '<sitios>';

// Iterate through the rows, printing XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  // ADD TO XML DOCUMENT NODE
  echo '<sitio ';
  echo 'Nombre="' . ($row['Nombre']) . '" ';
  echo 'Piso="' . ($row['Piso']) . '" ';
  echo 'Telefono="' . ($row['Telefono']) . '" ';
  echo 'Referencia="' . ($row['Referencia']) . '" ';
  echo 'Tipo="' . ($row['Tipo']) . '" ';
  echo 'ID="'.$row['ID'].'" ';
  echo 'ID_Markers="'.$row['ID_Markers'].'" ';
  echo '/>';
}

// End XML file
echo '</sitios>';

?>			