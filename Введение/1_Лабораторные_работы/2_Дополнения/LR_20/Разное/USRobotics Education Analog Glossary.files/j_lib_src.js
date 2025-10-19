
<!-- hide script from old browsers

	browser_name = navigator.appName;
	browser_version = parseFloat(navigator.appVersion); 
	
	var roll = false
  
  var is_ie = false
  var is_nav = false
  var PrintWindow
  

  if ( browser_name == "Netscape" )
  {
    is_nav = true
	  if ( browser_version >= 3.0 )
	  {
		  roll = true
	  }
  }


  if ( browser_name == "Microsoft Internet Explorer" )
  {
    is_ie = true
    if ( browser_version >= 3.0 )
		  roll = true
  }
	
	//' roll-over image pair object
	//'-----------------------------------
	function ImageObj( name_on, name_off )
	{
		this.on = new Image()
		this.on.src = name_on
		this.off = new Image()
		this.off.src = name_off
	}
	
	//' Load image array and image path variables
	if ( roll == true ) 
	{
		var images = new Array()
	}
	
	//'------------------------------------
	//' Display roll-on image
	//'------------------------------------
	function RollOn( img_name )  
	{ 
			document[ img_name ].src = images[ img_name ].on.src
	}

	//'------------------------------------
	//' Display roll-off image
	//'------------------------------------	
	function RollOff( img_name )  
	{
			document[ img_name ].src = images[ img_name ].off.src
	}
	
	//'------------------------------------
	//' Create an Element in the images Array
	//'------------------------------------
	function CreateArray( image_on, image_off, img_name )
	{
			images[img_name] = new ImageObj( image_on, image_off )
	}


function popUpWin(url, newTool, newLocation, newStatus, newMenubar, newResizable, newScrollbars, newWidth, newHeight, newLeft, newTop) 
	{
		if (is_ie || is_nav) 
		{
			if (PrintWindow != null && !PrintWindow.closed) 
			{
                        oldWin = PrintWindow;
                        oldWin.name = "oldWin";
                        oldWin.close();
            }
		}
		PrintWindow=window.open(url,"newWin","toolbar=" + newTool + ",location=" + newLocation + ",status=" + newStatus + ",menubar=" + newMenubar + ",resizable=" + newResizable + ",scrollbars=" + newScrollbars + ",width=" + newWidth + ",height=" + newHeight + ",left=" + newLeft + ",top=" + newTop);
		if (PrintWindow.opener == null)
		{
        	PrintWindow.opener = popupWin;
        }
		PrintWindow.opener.name = "origWin";
        PrintWindow.focus();
	}

function closeWin()
	{
		this.close();
		PrintWindow = null;
	}

function openPage(url)
{
var newWin = window.open(url,"","width=450,height=300,resizable=yes,scrollbars=yes,menubar=no,toolbar=no,left=100,top=100");
}

//Script used for autoselect dropdown navigation

function SelectThisProd() {
       if (document.prod.menu_products.options[document.prod.menu_products.selectedIndex].value != "none"){ 
		location = document.prod.menu_products.options[document.prod.menu_products.selectedIndex].value}  
}

function SelectThisCHSales() {
       if (document.ch_sales.menu_ch_sales.options[document.ch_sales.menu_ch_sales.selectedIndex].value != "none"){ 
		location = document.ch_sales.menu_ch_sales.options[document.ch_sales.menu_ch_sales.selectedIndex].value}  
}

function SelectThisCountry() {
       if (document.international.intl_sites.options[document.international.intl_sites.selectedIndex].value != "none"){ 
		location = document.international.intl_sites.options[document.international.intl_sites.selectedIndex].value}  
}

function SelectThisOEM() {
       if (document.oem.oemprods.options[document.oem.oemprods.selectedIndex].value != "none"){ 
		location = document.oem.oemprods.options[document.oem.oemprods.selectedIndex].value}  
}

function SelectThisSmoothwall() {
       if (document.smoothwall.smoothwall.options[document.smoothwall.smoothwall.selectedIndex].value != "none"){ 
		location = document.smoothwall.smoothwall.options[document.smoothwall.smoothwall.selectedIndex].value}  
}

function SelectThisv92() {
       if (document.modem.menu_v92.options[document.modem.menu_v92.selectedIndex].value != "none"){ 
		location = document.modem.menu_v92.options[document.modem.menu_v92.selectedIndex].value}  
}		

function SelectThisv92a() {
       if (document.modem.menu_v92a.options[document.modem.menu_v92a.selectedIndex].value != "none"){ 
		location = document.modem.menu_v92a.options[document.modem.menu_v92a.selectedIndex].value}  
}	

function SelectThisxp() {
       if (document.modem.menu_xp.options[document.modem.menu_xp.selectedIndex].value != "none"){ 
		location = document.modem.menu_xp.options[document.modem.menu_xp.selectedIndex].value}  
}		

function SelectThisSupport() {
       if (document.support.support_sections.options[document.support.support_sections.selectedIndex].value != "none"){ 
		location = document.support.support_sections.options[document.support.support_sections.selectedIndex].value}  
}	

function SelectThisRebate() {
       if (document.rebate.wheresrebate.options[document.rebate.wheresrebate.selectedIndex].value != "none"){ 
		location = document.rebate.wheresrebate.options[document.rebate.wheresrebate.selectedIndex].value}  
}				

function SelectThisPCX() {
       if (document.modem.PCX.options[document.modem.PCX.selectedIndex].value != "none"){ 
		location = document.modem.PCX.options[document.modem.PCX.selectedIndex].value}  
}				

function SelectThisDriver() {
       if (document.Driver.Driver.options[document.Driver.Driver.selectedIndex].value != "none"){ 
		location = document.Driver.Driver.options[document.Driver.Driver.selectedIndex].value}  
}

function SelectThisDriverF() {
       if (document.DriverF.DriverF.options[document.DriverF.DriverF.selectedIndex].value != "none"){ 
		location = document.DriverF.DriverF.options[document.DriverF.DriverF.selectedIndex].value}  
}

function SelectThisDriverV() {
       if (document.DriverV.DriverV.options[document.DriverV.DriverV.selectedIndex].value != "none"){ 
		location = document.DriverV.DriverV.options[document.DriverV.DriverV.selectedIndex].value}  
}

function SelectThisDriverW() {
       if (document.DriverW.DriverW.options[document.DriverW.DriverW.selectedIndex].value != "none"){ 
		location = document.DriverW.DriverW.options[document.DriverW.DriverW.selectedIndex].value}  
}

function SelectThisDriverP() {
       if (document.DriverP.DriverP.options[document.DriverP.DriverP.selectedIndex].value != "none"){ 
		location = document.DriverP.DriverP.options[document.DriverP.DriverP.selectedIndex].value}  
}

function SelectThisDriverC() {
       if (document.DriverC.DriverC.options[document.DriverC.DriverC.selectedIndex].value != "none"){ 
		location = document.DriverC.DriverC.options[document.DriverC.DriverC.selectedIndex].value}  
}

function SelectThisDriverB() {
       if (document.DriverB.DriverB.options[document.DriverB.DriverB.selectedIndex].value != "none"){ 
		location = document.DriverB.DriverB.options[document.DriverB.DriverB.selectedIndex].value}  
}

function SelectThisDriverI() {
       if (document.DriverI.DriverI.options[document.DriverI.DriverI.selectedIndex].value != "none"){ 
		location = document.DriverI.DriverI.options[document.DriverI.DriverI.selectedIndex].value}  
}

function SelectThisDriverN() {
       if (document.DriverN.DriverN.options[document.DriverN.DriverN.selectedIndex].value != "none"){ 
		location = document.DriverN.DriverN.options[document.DriverN.DriverN.selectedIndex].value}  
}

function SelectThisDriverBB() {
       if (document.DriverBB.DriverBB.options[document.DriverBB.DriverBB.selectedIndex].value != "none"){ 
		location = document.DriverBB.DriverBB.options[document.DriverBB.DriverBB.selectedIndex].value}  
}

function surfto(form) {
   var myindex=form.select1.selectedIndex;
   if (form.select1.options[myindex].value != 0) {
		location=form.select1.options[myindex].value;
   }
}

//legacy:popup
var globWin;   

 function wLoader(_URL)
{   var _windowTitle="_blank";
	 var _windowSettings="toolbar=yes,location=no,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=500,height=350";
	globWin = window.open(_URL,_windowTitle,_windowSettings);
}




startList = function() {
	if (document.all&&document.getElementById) {
		navRoot = document.getElementById("top_level_nav");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}
//window.onload=startList;
// in for new nav

// hide script from old browsers -->
