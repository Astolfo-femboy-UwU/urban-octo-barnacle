
// Copyright (c) 2004, Bruce Clay, LLC
// This script is proprietary and may not be copied
// or distributed.  400x70

function PMAudit(pmparms) {
var pm_referrer=""; 
if (document.referrer && document.referrer != "") { 
	pm_referrer = document.referrer; 
} else if (top.document.referrer && top.document.referrer != "") { 
	pm_referrer = top.document.referrer; 
} else if (self.document.referrer && self.document.referrer != "") { 
	pm_referrer = self.document.referrer; 
} 
//Turn off PM for now.
	var pmuri='<iframe class="sidebars" src="//www.seotoolset.com/cgi-bin/pathmaps.cgi?pmrequesturi=' + escape(document.URL) + '%26' + escape(pmparms) + '&pmreferer=' + escape(pm_referrer) + '" frameborder=0 width=1 height=1></iframe>';
	document.writeln(pmuri);
}

function PMTracker(pmvalue) { 
	var pmtoday = new Date();
	var pmexpiry = new Date(pmtoday.getTime() + 365 * 24 * 60 * 60 * 1000); 
	document.cookie="PMCookie=" + escape(pmvalue) + "; expires=" + pmexpiry.toGMTString();
}


function PMTransfer(pmvalue) { 
	var pmuri='<iframe class="sidebars" src="//www.seotoolset.com/cgi-bin/pmtransfer.cgi?' + escape(pmvalue) + '" frameborder=0 width=1 height=1></iframe>';
	document.writeln(pmuri);
}

       
 

