#!/usr/bin/osascript


# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Show Package Contents
# @raycast.mode silent

# Optional parameters:
# @raycast.icon 📁

tell application "Finder" to set sel to selection
repeat with oneItem in sel
	if package folder of (info for oneItem as alias) then
		try
			tell application "Finder" to set target of front Finder window to folder ((oneItem as text) & ":Contents")
		end try
	end if
end repeat

log "Done"
