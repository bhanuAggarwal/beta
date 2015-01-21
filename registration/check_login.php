<?php

include('connection.php');
$user_id=$_GET['useremail'];
echo $user_id;
//$user_id="abc";
$result=mysql_query("SELECT * FROM new_user WHERE email=".$user_id."");
echo $result;
//echo "SELECT * FROM new_user WHERE email=".$user_id."";

//echo $result;


if($result!=""){
	//MAIN PAGE
}
else{
	header("location: ./registration.php");
}

?>