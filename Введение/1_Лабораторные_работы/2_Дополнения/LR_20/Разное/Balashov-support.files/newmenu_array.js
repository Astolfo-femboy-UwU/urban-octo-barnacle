timegap=500
followspeed=5
followrate=40
suboffset_top=10;
suboffset_left=10;
effect = "fade(duration=0.3);Shadow(color='#777777', Direction=135, Strength=5)"
function openwin(url)
{
	nwin=window.open(url, "nwin",config="scrollbars=yes,resizable=yes,toolbar=yes,location=yes,status=yes,menubar=yes,");
	nwin.focus();
}
prop1=["000000","AFEEEE","FFFFCC","443F5C","999999",12,"normal","normal",
"Arial,Helvetica,sans-serif",3,"/images/arrow.gif",0,"66ffff","000099","000099","00FFFF",]

menu1=[116,120,90,1,"left",prop1,1,"center",,,1,,,,,
"�&nbsp;��������","/company/contact.phtml",,,1,
"������","show-menu2",,"#",1,
"���������","show-menu4",,"#",1,
"���������","show-menu5",,"#",1,
"�������","show-menu6",,"#",1,
"�������","show-menu3",,"#",1
]
menu2=[
,,150,1,"",prop1,,"left",,,,,,,,
"������&nbsp;��&nbsp;��������","/tarif/index.phtml",,,0
]
menu4=[
,,170,1,"",prop1,,"left",,,,,,,,
"����&nbsp;����������","javascript:openwin(\"http://www.balashov.san.ru/info/stat/index.html\")",,,0,
"����&nbsp;�������","/policy/index.phtml",,,1,
"�����������","show-menu7",,,0,
"����������","show-menu8",,,0,
"������������","/support/index.phtml",,,0
]
menu5=[
,,150,1,"",prop1,,"left",,,,,,,,
"������&nbsp;���������","/home_pgs/index.phtml",,,0,
"��������&nbsp;������","/navigator/navigator.phtml",,,0
]
menu6=[
,,140,1,"",prop1,,"left",,,,,,,,
"�����������&nbsp;�����", "http://www.balashov.san.ru/forum/index.php",,,0
]
menu3=[
,,120,1,"",prop1,,"left",,,,,,,,
"�����","/town/gorod/index.php",,,0
]
menu7=[
,,150,1,"",prop1,,"left",,,,,,,,
"���� �������","/sprav/code/index.phtml",,,0
]
menu8=[
,,190,1,"",prop1,,"left",,,,,,,,
"������� �� ��������","javascript:openwin(\"/instr/tutor/default.htm\")",,,0,
"������� �� Explorer","javascript:openwin(\"/instr/uchebnie.phtml\")",,,0,
"��� �������� � ��. ������","javascript:openwin(\"/instr/thebat1.html\")",,,0,
"����� � ���� ��������","javascript:openwin(\"/instr/poisk.html\")",,,0
]
