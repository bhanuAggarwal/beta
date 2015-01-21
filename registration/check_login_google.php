<?php
include('connection.php');
$user_id=$_GET['email'];
$name=$_GET['name'];
$gender=$_GET['gender'];

$result=mysql_query("SELECT * FROM WHERE email=".$user_id."");

if($result!=""){
	//MAIN PAGE
}
else{
	header("location: ./googlesingup.php?name="+name+"&email="+user_id+"&gender="+gender+"");
	
}

?>

?>