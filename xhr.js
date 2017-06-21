

function xhrGet(reqUri,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = callback;
	xhr.open("GET", reqUri, true);

	xhr.onreadystatechange = function (aEvt) {
	  if (xhr.readyState == 4) {
	     if(xhr.status == 200){
		      console.log(xhr.responseText);
		  }else{
		      alert("Error loading page\n");
		  }
	  }
	};
	xhr.send();
}
