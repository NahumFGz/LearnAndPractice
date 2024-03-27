django-admin startproject webpersonal .





# Para crear liveserver
npm install -g browser-sync

browser-sync start --proxy "localhost:8000" --files "manage.py, core/views.py, webpersonal/urls.py"

browser-sync start --proxy "localhost:8000" --files "**/*.py"

browser-sync start --proxy "localhost:8000" --files "*.py core/*.py, webpersonal/*.py" 

browser-sync start --proxy "localhost:8000" --files "backend/**/*.py, backend/templates/**/*.html, backend/static/**/*.css, backend/static/**/*.js"

# Por defecto crea el proxy en el puerto 3000, pero se puede modificar
browser-sync start --proxy "localhost:8000" --files "**/*.py" --port 4000