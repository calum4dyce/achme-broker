# achme-broker

## Backend
Lumen PHP dependencies are managed by composer.
To install the dependencies run:
>    composer install

The SQL server settings are located in the .env file. These should be changed to reflect your local sql setup.
To serve the backend locally run: 
> php -S localhost:8000 -t public
## Frontend
The frontend uses Angular.
To install the frontend dependencies run
> npm install

To serve the frontend:
> npm start

Frontend will be hosted on http://localhost:4200
