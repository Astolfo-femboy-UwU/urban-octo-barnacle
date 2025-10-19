//*****************************
//	Created in BCC Company
//	Author:	Shchekalov Anton
//*****************************
var SCROLLING_STEP = 10;

//constructor of Toolbar
function Toolbar(positionType, clsMenu, clsMenuBtn, clsMenuBtnOver, clsItem, clsItemOver)
{
	//properties
	this.menus = new Array;
	this.currentMenu = 0;
	this.currentElement = null;
	this.timerID = null;
	this.positionType = positionType;
	
	//styles
	this.clsMenu = clsMenu;
	this.clsMenuBtn = clsMenuBtn;
	this.clsMenuBtnOver = clsMenuBtnOver;
	this.clsItem = clsItem;
	this.clsItemOver = clsItemOver;
	
	//methods 
	this.addMenu = addMenu;
	this.tbShowMenu = tbShowMenu;
	this.tbHideMenu = tbHideMenu;
}

//constructor of Sub Menu
function SubMenu(leftX, topY, width, height, name)
{
	//name
	this.name = name;
	
	//position
	this.leftX = leftX;
	this.topY = topY;
	this.width = width;
	this.height = height;
	this.innerHTML = null; //Cache HTML code of menu
	
	this.children = new Array;
	this.nChildren = 0;
	this.parentObj = null;
	
	//methods 
	//this.initialize = initializeFolder;
	this.addItem = addItem;
	this.addChild = addChild;
	//this.showMenu = showMenu;
}

//constructor of Item
function Item(name, href) 
{ 
	this.name = name; 
	this.href = href;
	this.parentObj = null;
}

//Add Menu to Toolbar
function addMenu(typeID, menuItem) 
{ 
	this.menus[typeID] = menuItem;
	menuItem.parentObj = this;
	return menuItem;
}

//Add Item to Menu
function addItem(childNode) 
{ 
	this.children[this.nChildren] = childNode;
	childNode.parentObj = this;
	this.nChildren++;
	return childNode;
}

//Create Item and Add It to Menu
function addChild(name, href) 
{
	var it = new Item(name, href);
	this.addItem(it);
}

//Show Menu by typeID
function tbShowMenu(typeID, pThis){

	if (this.currentMenu != typeID) this.tbHideMenu();
	this.currentMenu = typeID;
	this.currentElement = pThis;
	onMenuOver();
 	
	//Change Style on over
	if (this.currentElement){
		if (this.clsMenuBtnOver) this.currentElement.className = this.clsMenuBtnOver;
	}
	MM_swapImgRestore();
	MM_swapImage("Image"+typeID, "", arrPreloadImages[typeID]);
 	
	var menu = MM_findObj("menu");
	var menuItem = this.menus[typeID];

	if (menuItem.nChildren){
		menu.style.position = this.positionType;
		menu.style.top  = menuItem.topY;
		menu.style.left = menuItem.leftX;
		menu.style.width = menuItem.width;
		if (menuItem.height)
			menu.style.height = menuItem.height;
	
		if (menuItem.innerHTML != null){
			//Menu code was cached earlier
			menu.innerHTML = menuItem.innerHTML;
			menu.style.visibility = "hidden";
			menu.style.display = "";
		} else {
			//If menu shows first time
			var str = "";
			var szArrow = "";
			var item;
			
			for (var i = 0; i < menuItem.nChildren; i++){
				item = menuItem.children[i];
				szArrow = (item.nChildren?(item.nChildren>0?"<td><img src=\"../img/presentation/arrowr.gif\" border=0></td>":""):"");
				//Item Link
				str += "<table border=0 width=100% class=\"" + this.clsMenu + "\"><tr><td class=\"" + this.clsItem + "\" onmouseover=\"this.className='" + this.clsItemOver + "'\" onmouseout=\"this.className='" + this.clsItem + "'\" onClick=\"window.location = '" + menuItem.children[i].href + "'\">" + menuItem.children[i].name + szArrow + "</td></tr></table>";
				//Items separator - dots
				if (i < menuItem.nChildren-1){
					str += "<table border=0 cellpadding=0 cellspacing=0 width=90% background=\"../img/dot.gif\" align=center><tr><td><table border=0 cellpadding=0 cellspacing=0><tr><td height=1></td></tr></table></td></tr></table>";
				}
			}
	
			//parse menu, but not show
			menu.innerHTML = str;
			menu.style.visibility = "hidden";
			menu.style.display = "";
			
			//If menu exceeds borders - make scrolling
			if (window.screen){
				var delta = screen.availHeight - menuItem.topY - menu.scrollHeight;
				if (delta < 0){
					var menuWrapper = "";
					var height = menu.scrollHeight + delta;
	
					menu.scrollingTop = 0;
					menu.scrollingHeight = height;
					menu.scrollingMaxHeight = menu.scrollHeight;
					
					menuWrapper += "<table border=0 cellpadding=0 cellspacing=0 width=110%>";
					menuWrapper += "<tr><td width=100% height=" + height +" rowspan=3><div name=items style=\"position:absolute; top:7; clip:rect(" + menu.scrollingTop + " auto " + menu.scrollingHeight + " auto)\">";
					menuWrapper += str;
					menuWrapper += "</div></td><td width=25 height=30 align=center valign=top><img name=arrowup src=\"../img/menu/arrowup.gif\" onmouseover=\"document.scrollerTimer = setInterval('javascript:moveUp()', 25)\" onmouseout=\"clearTimeout(document.scrollerTimer)\" border=0></td></tr><tr><td></td></tr><tr><td width=22 height=30 align=center valign=bottom><img name=arrowdown src=\"../img/menu/arrowdown.gif\" onmouseover=\"document.scrollerTimer = setInterval('javascript:moveDown()', 25)\" onmouseout=\"clearTimeout(document.scrollerTimer)\" border=0></td></tr></table>";
					
					menu.innerHTML = menuWrapper;
					menu.style.visibility = "hidden";
					menu.style.display = "";
				}
			}
			
			//Cache HTML code for future use
			menuItem.innerHTML = menu.innerHTML;
		}

		//show Menu
		menu.style.visibility = "visible";
	}
}

//Hide Current Menu
function tbHideMenu(){
	this.currentMenu = 0;
	
	MM_swapImgRestore();
	//Change Style on out
	if (this.currentElement){
		this.currentElement.className = this.clsMenuBtn?this.clsMenuBtn:"";
	}
	
	var menu = MM_findObj("menu");
	menu.innerHTML = "";

	//hide menu
	menu.style.display = "none";
	menu.style.visibility = "hidden";
}

//Show Menu by typeID
function showMenu(typeID, pThis){
	document.toolbar.tbShowMenu(typeID, pThis);
}

//Hide Current Menu
function hideMenu(){
	onMenuOut();
}

function onMenuOver(){
	clearTimeout(document.toolbar.timerID);
}

function onMenuOut(){
	var tb = document.toolbar;
	clearTimeout(tb.timerID);
	if(tb.currentMenu){
		if (tb.menus[tb.currentMenu].nChildren > 0)
			//Has menu items
			tb.timerID = setTimeout("document.toolbar.tbHideMenu();", MOUSE_OUT_TIMEOUT);
		else
			tb.tbHideMenu();
	}
}

function moveUp(){
	var menu = MM_findObj("menu");
	var items = menu.all.tags("div")[0];
	
	if (menu.scrollingTop >= SCROLLING_STEP) {
		menu.scrollingTop -= SCROLLING_STEP;
		items.style.posTop += SCROLLING_STEP;
	}
	items.style.clip = "rect(" + menu.scrollingTop + " auto " + (menu.scrollingTop + menu.scrollingHeight) + " auto)";
}

function moveDown(){
	var menu = MM_findObj("menu");
	var items = menu.all.tags("div")[0];
	
	if (menu.scrollingTop + menu.scrollingHeight <= menu.scrollingMaxHeight - SCROLLING_STEP) {
		menu.scrollingTop += SCROLLING_STEP;
		items.style.posTop -= SCROLLING_STEP;
	}
	items.style.clip = "rect(" + menu.scrollingTop + " auto " + (menu.scrollingTop + menu.scrollingHeight) + " auto)";
}