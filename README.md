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

# How to use it?
Open the Postman Collection (file TrueNorth.postman_collection.json), then follow the steps:
* Use the 'Add user' endpoint to create an user with his password.
* Use the 'Login user' endpoint to have a token
* Use the 'Add task' endpoint to create a task
* Use the 'Tasks list' endpoint to see the tasks that you created with your user
