@echo off

echo search node_modules...

if exist "node_modules" (
    echo node_modules is already. starting server...
    npm start
) else (
    echo node_modules is not already. installing...
    npm i
    if %errorlevel% neq 0 (
        echo error. Dừng lại.
        pause
        exit /b %errorlevel%
    )
    echo install done. starting web...
    npm start
    if %errorlevel% neq 0 (
        echo error.
        pause
        exit /b %errorlevel%
    )
)

pause
