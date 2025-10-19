dim i, o, bFlashInstalled, iFlashVersion
on error resume next
bFlashInstalled = false
iFlashVersion = -1
for i = FLASH_LIMIT to 0 step -1
	set o = CreateObject("ShockwaveFlash.ShockwaveFlash." & i)
	bFlashInstalled = IsObject(o)
	if bFlashInstalled then
		iFlashVersion = i
		exit for
	end if
next
if bShowFlash and ((iFlashVersion > FLASH_LIMIT) or (iFlashVersion = FLASH_LIMIT)) then 
	bShowFlash = true 
else 
	bShowFlash = false
end if