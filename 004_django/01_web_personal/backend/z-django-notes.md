django-admin startproject webpersonal .





# Para crear liveserver
npm install -g browser-sync

browser-sync start --proxy "localhost:8000" --files "**/*.py"

browser-sync start --proxy "localhost:8000" --files "backend/**/*.py, backend/templates/**/*.html, backend/static/**/*.css, backend/static/**/*.js"
