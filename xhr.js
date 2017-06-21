function xhrError(err) {
  console.log('Fetch Error :-S', err);
}

function xhrGet(reqUri,callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = callback;
	xhr.open("POST", reqUri, true);
	xhr.responseType = 'json';
	xhr.onerror = xhrError;
	xhr.onreadystatechange = function() {
		var status;
		var data;
		// https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				//console.log('Success!');
			}
		}
	};
	xhr.send();
}
