var xmlHTTP = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;
	
	if(window.activeXObject){
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp = false;
		}
		}else{
			try{
				xmlHttp = new XMLHttpRequest();
			}catch(e){
				xmlHttp = false;
		}
	}
	if(!xmlHttp)
		alert("not correct, mate!")
	else
		return xmlHttp;
}

function process(){
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
		data = encodeURIComponent(document.getElementById("userInput").value);
		xmlHttp.open
	}else{
	
	}
}