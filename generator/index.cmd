@echo off

set NODE=%~dp0node.exe
set SCRIPT=%~dp0index.js

for /f %%a in ("%NODE%") do   ( set "NODE=%%~fsa"   )
for /f %%a in ("%SCRIPT%") do ( set "SCRIPT=%%~fsa" )

if not exist %NODE%   ( goto NONODE   )
if not exist %SCRIPT% ( goto NOSCRIPT )

echo START.
echo.
call %NODE% %SCRIPT%
echo.
echo DONE.

goto EXIT

:NONODE
  echo ERROR: node.exe is missing ^(from %NODE%^).
  goto EXIT

:NOSCRIPT
  echo ERROR: index.js is missing ^(from %SCRIPT%^).
  goto EXIT

:EXIT
  pause

