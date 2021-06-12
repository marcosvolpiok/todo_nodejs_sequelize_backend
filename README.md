# Create config and env file
Copy the file .env.example to .env
Copie el archivo .env.example a .env
Command:
```
cp src/config/config.json.example src/config/config.json
cp .env .env.example
```

# Configure the secret key for JWT
Edit the file .env with your own secret key

# Create the database
Create the database and configure the user, passwords, and database name in the file config/config.json

# Install the node modules
```
npm install
```

# Run the migrations
```
npm run installDb
```

# Run the server
```
npm start
```

# Postman
The file TrueNorth.postman_collection.json contains a Postman collection to call all the endpoints
