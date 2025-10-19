//Types of Menu (ID)
var tbABOUT 	= 1;
var tbPLAN 	= 2;
var tbPROGRAMS 	= 3;
var tbEXHIBITIONS	= 4;
var tbEXCURSIONS	= 5;
var tbCOLLECTION	= 6;
var tbPUBLICATION	= 7;
var tbNEWS	= 8;
var tbSPONSORS	= 9;
var tbCALENDAR	= 10;
var tbSEARCH	= 11;
var tbLIBRARY	= 12;
var MAX_ACCOUNT_BUTTON = 20;

var MOUSE_OUT_TIMEOUT = 1000;

var arrPreloadImages = new Array();

//Create array of preload images
function PreloadImages(){
	for (var i=1; i<MAX_ACCOUNT_BUTTON ; i++)
		arrPreloadImages[i] = "../img/menu/menu" + i + "on-ru.jpg";
		
}

function InitToolbar(){

	//Preload On-buttons
	PreloadImages();

	var menuItem;
	var objToolbar = new Toolbar("absolute", "", "", "", "SiteMenuItem", "SiteMenuItemOver");

	//About Museum
/*
	menuItem = new SubMenu(210,129,200,70);
	menuItem.addChild("Главная страница", "../main/?page=1&langID=57")
	menuItem.addChild("Справочная информация", "../main/?page=2&langID=57")
	menuItem.addChild("Историческая справка", "../main/?page=3&langID=57")
	menuItem.addChild("Дворец канцлера Безбородко", "../main/?page=4&langID=57")
	objToolbar.addMenu(tbABOUT, menuItem);


	//Plan of Museum
	menuItem = new SubMenu(210,167,174,55);
	menuItem.addChild("Цокольный этаж", "../plan/floor.asp?floorID=1&langID=57")
	menuItem.addChild("Этаж №1", "../plan/floor.asp?floorID=2&langID=57")
	menuItem.addChild("Этаж №2", "../plan/floor.asp?floorID=3&langID=57")
	objToolbar.addMenu(tbPLAN, menuItem);
*/

	//Publication
	menuItem = new SubMenu(210, 330, 174, 10);
	objToolbar.addMenu(tbPUBLICATION, menuItem);

	//Library
	menuItem = new SubMenu(0,10,174,100);
	objToolbar.addMenu(tbLIBRARY, menuItem);

	//News
	menuItem = new SubMenu(0,10,174,100);
	objToolbar.addMenu(tbNEWS, menuItem);

	//Sponsors
	menuItem = new SubMenu(0,10,174,100);
	objToolbar.addMenu(tbSPONSORS, menuItem);

	//Calendar
	menuItem = new SubMenu(0,10,174,100);
	objToolbar.addMenu(tbCALENDAR, menuItem);

	//GO Search
	menuItem = new SubMenu(0,0,0,0);
	objToolbar.addMenu(tbSEARCH, menuItem);
								
	document.toolbar = objToolbar;
	//window.onresize = document.toolbar.tbHideMenu;
}


//Initialize!
InitToolbar();
//window.onload = InitData;