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
		xmlHttp.open("GET", "dataStore.php?dData="+dData, true);
		xml.onreadystatechange = handleServerResponse;
		xmlHttp.send(null);
	}else{
		setTimeout('process()', 1000);
	}
}

function handleServerResponse(){
		if(xmlHttp.readyState==4){
			if(xmlHttp.status==200){
				xmlResponse = xmlHttp.responseXML;
				xmlDocumentElement = xmlResponse.documentElement;
				message = xmlDocumentElement.firstChild.data;
				
			}
		}else{
		
		}
}












