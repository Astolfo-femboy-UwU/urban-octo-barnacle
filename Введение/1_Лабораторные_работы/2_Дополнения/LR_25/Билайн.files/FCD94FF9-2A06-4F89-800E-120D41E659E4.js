var FLASH_LIMIT = 6;
var bShowFlash = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : false;
function iGetVersion()
{
	var words = navigator.plugins["Shockwave Flash"].description.split(" ");
	for (var i = 0; i < words.length; ++i)
	{
		if (isNaN(parseInt(words[i]))) continue;
		iFlashVersion = words[i];
	}
	return (( parseInt(iFlashVersion) > FLASH_LIMIT) || ( parseInt(iFlashVersion) == FLASH_LIMIT) ? true : false );
}
if(bShowFlash)
{
	if(navigator.appVersion.indexOf("Macintosh")>=0)
	{
		bShowFlash=true;
	}
	else
	{
		if(navigator.userAgent.indexOf("Opera"))
		{
			if(navigator.plugins["Shockwave Flash"].name=="Shockwave Flash") 
			{
				bShowFlash=iGetVersion();
			}
		}
		else
		{
			if(navigator.plugins["Shockwave Flash"]) 
			{
				bShowFlash=iGetVersion();
			}
		}
	}
}
else
{
	if(navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0))
	{
		bShowFlash = true;
	}
}
