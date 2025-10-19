function SetCookie(name,value,expires,path,domain,secure) {
	document.cookie = name + "=" + value + ((expires)?";expires="+expires.toGMTString():"") + ((path)?";path="+path:"") + ((domain)?";domain="+domain:"") + ((secure)?";secure":"");
}

function GetCookie(labelName)
{
	var labelLen = labelName.length;
	var cookieData = document.cookie;
	var cLen = cookieData.length;
	var i = 0;
	var cEnd;
	while ( i < cLen)
	{
        	var j = i+labelLen;
		if ( cookieData.substring( i , j ) == labelName)
		{
			cEnd = cookieData.indexOf( ";" , j );
			if (cEnd == -1)
				cEnd = cookieData.length;
			return unescape(cookieData.substring( j+1 , cEnd ));
		}
		i++;
	}
	return 0;
}

function DelCookie(name,path,domain)
{
	if(GetCookie(name))
	{
		document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=;";
	}
}

function HostName(level) {
	level	= level?level:2;
	var rd	= '';
	var arr	= new Array();
	var d	= document.location.hostname.split('.');
	for(var i=d.length-1;i>(d.length-1)-level;i--) arr.push(d[i]);
	arr.reverse();
	rd = arr.join('.');
	return ((rd!='')?"."+rd:document.location.hostname);
}