var form = (function(){
	/**
	* Valida si todos los campos requeridos de un formulario estan llenos
	* 		
	* @return boolean true or false
	*/
	function validate(form) {
		for ( var i = 0, len = form.childNodes.length; i < len; i++ ) {
			if ((form.childNodes[i].nodeName === "INPUT" || form.childNodes[i].nodeName === "TEXTAREA") && form.childNodes[i].className === "required") {
				if (form.childNodes[i].value === "") {

					form.childNodes[i].focus();
					return false;
				}
			}
		};
		return true;
	};

	/**
	* Crea una ventana de informacion
	*
	* @return element description
	*/
	function popUp(options) {
		var options = {
			msg  : options.msg 	|| "Dato necesario para continuar",
			form : options.form || document.body,
			time : options.time || 2500
		};

		var popup = document.createElement("div");
		popup.appendChild(document.createTextNode(options.msg));

		popup.style.background = "#000";
		popup.style.color      = "#FFF";
		popup.style.position   = "absolute";
		popup.style.padding    = "5px";
		popup.style.marginTop  = "5px";

		setTimeout(function(){
			popup.parentNode.removeChild(popup);				
		},options.time);

		options.form.appendChild(popup);
	};

	/**
	* serializa formualrio
	*
	* @return string description
	*/
	function serialize(form) {
		var str = "";

		for (var i = 0, len = form.childNodes.length; i < len; i++) {
			if((form.childNodes[i].nodeName === "INPUT" || form.childNodes[i].nodeName === "SELECT" || form.childNodes[i].nodeName === "TEXTAREA") && form.childNodes[i].getAttribute("type") !== "submit"){
				str = (!str) ? str+="?" + form.childNodes[i].value : str+= "&" + form.childNodes[i].value;
			}
		};

		return str;
	};

	/**
	* Verifica si dos campos son iguales por ejemplo password y confirm password
	*
	* @return boolean description
	*/
	function check(options) {
		var options = {
			first : options.first || "yep",
			last  : options.last  || "nope",
			msg   : options.msg   || "Los datos no coinsiden"
		};

		return (options.first.value === options.last.value) ? true : false;
	};

	/**
	* Verifica si el dato es un email valido
	*
	* @return boolean description
	*/
	function isEmail(elem) {
		filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return (filter.test(elem.value)) ? true : false;
	};

	/**
	* Verifica si el dato es una url valida
	*
	* @return boolean description
	*/
	function isUrl(elem) {
		var filter = /(ftp|http|https):\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;
	    return (filter.test(elem.value)) ? true : false;
	};

	/**
	* Verificar si el valor fecha formato yyyy-mm-dd
	*
	* @return boolean description
	*/
	function isDate(elem) {
		var filter = /^\d{4}\-\d{2}\-\d{2}$/;
	    return (filter.test(elem.value)) ? true : false;
	};

	/**
	* Realiza una operacion via XMLHttpRequest
	*
	* @return type description
	*/
	function ajax(options) {
		var options = {
			url       : options.url        || "",
			type      : options.type       || "POST",
			data      : options.data       || "",
			timeout   : options.timeout    || 5000,
			onError   : options.onError    || {},
			onComplete: options.onComplete || {},
			onSuccess : options.onSuccess  || {}
		}, 
		requestDone = false,
		url         = "",
		xml         = null;

		xml = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

		if(options.type.toUpperCase() === "GET"){
			url = options.url + options.data+"&nocache="+Math.random();
		}else if(options.type.toUpperCase() === "POST"){
			xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			url = options.url;
		}

		xml.open(options.type,url,true);
		xml.setRequestHeader("X-Requested-With","XMLHttpRequest");

		setTimeout(function(){
			requestDone = true;
		},options.timeout);

		xml.onreadystatechange = function(){
			if (xml.readyState === 4 && xml.status === 200) {
				
			}else{
				options.onError();
			}
		};

		options.onComplete();
		xml = null;

		if(options.type.toUpperCase() === "GET") {
			xml.send();
		}else if(options.type.toUpperCase() === "POST"){
			xml.send(options.data);
		};

	};

	return {
		validate      :validate,
		popUp         :popUp,
		serialize     :serialize,
		check         :check,
		isEmail       :isEmail,
		isUrl         :isUrl,
		isDate        :isDate,
		ajax          : ajax
	}
})();