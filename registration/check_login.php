<?php

include('connection.php');
$user_id=$_GET['useremail'];
//$user_id="abc";
$result=mysql_query("SELECT name FROM new_user WHERE email=".$user_id."");
echo "SELECT name FROM new_user WHERE email=".$user_id."";

echo $result;


if($result!=""){
	header("location:../");
}
else{
	header("location: ./registration.php");
}

?>