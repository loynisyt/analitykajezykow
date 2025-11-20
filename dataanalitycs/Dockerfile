# Wybór obrazu Node.js
FROM node:20-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Kopiowanie package.json i package-lock.json
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie reszty kodu
COPY . .

# Domyślny port
EXPOSE 3000

# Polecenie startowe (dla dev)
CMD ["npm", "run", "dev"]
