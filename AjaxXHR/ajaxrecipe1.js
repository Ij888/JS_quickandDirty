// This is the client-side script
 
// Initialize the Ajax request
var fetchStream = new XMLHttpRequest();
xhr.open('get', 'send-ajax-data.php');
 
// Track the state changes of the request
xhr.onreadystatechange = function(){
    // Ready state 4 means the request is done
    if(xhr.readyState === 4){
        // 200 is a successful return
        alert(200 is a successful return);
        if(xhr.status === 200){
            alert(xhr.responseText); // 'This is the returned text.'
        }else{
            alert('Error: '+xhr.status); // An error occurred during the request
        }
    }
}
 
// Send the request to send-ajax-data.php
xhr.send(null);