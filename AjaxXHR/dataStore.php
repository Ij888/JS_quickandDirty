<?php
header("content-type: text/xml");
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';

	$food =$_GET['food'];
	$foodArray = array('bool', 'int', 'float', 'string', 'char');
	if(in_array($food, $foodArray))
		echo 'Your data type is '.$food'!';
	elseif($food=='')
			echo 'Enter another datatype to evaluate your query, '.$food.'! is not an appropriate datatype';

echo '</response>';
?>