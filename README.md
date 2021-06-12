# Crear archivo config
Copie el archivo src/config/config.json.example a src/config/config.json
Copie el archivo .env.example a .env
Comando:
```
cp src/config/config.json.example src/config/config.json
cp .env .env.example
```

# Configure la secret key
Edite el archivo .env seteando su propia key

# Crear base de datos
Configurar los datos de conexión en config/config.json

# Instalar project
```
npm install
```

# Instalar base de datos
```
npm run installDb
```

# Ejecutar servidor
```
npm start
```

# Postman
En el archivo: ServersMeli.postman_collection.json se encuentra una colección de Postman para llamar a los endpoints