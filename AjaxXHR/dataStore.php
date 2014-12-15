<?php
header("content-type: text/xml");
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';

	$dData =$_GET['food'];
	$dataArray = array('bool', 'int', 'float', 'string', 'char');
	if(in_array($dData, $dataArray))
		echo 'Your data type is '.$dData'!';
	elseif($dData=='')
			echo 'Enter another datatype to evaluate your query, '.$dData.'! is not an appropriate datatype';

echo '</response>';
?>