# achme-broker

## Backend
Lumen PHP dependencies are managed by composer.
To install the dependencies run:
>    composer install

Database schema is in 'achme-broker.sql'.
The SQL server settings are located in the .env file. These should be changed to reflect your local sql setup.
To serve the backend, navigate to the 'api' folder and run: 
> php -S localhost:8000 -t public
## Frontend
The frontend uses Angular.
To install the frontend dependencies run in the 'frontend' folder
> npm install

To serve the frontend:
> npm start

Frontend will be hosted on http://localhost:4200
