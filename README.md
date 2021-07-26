# EDUFUND- A POC for Mutual Fund application



## Installation

Clone this repo and install the dependency- This project uses a mono-repo code base.   server is at the root directory. follow the below steps to get started.

## Install Backend dependency- make sure you are in the root directory.

```bash
npm install
```

## Install Frontend dependency - navigate to frontend directory

```bash
cd frontend

npm install

cd ..  (go back to root dir to start the application) 

```
## Start the Application- 

### you can run the application in 2 ways- 

- Running client and Server in one single command - using concurrently package.
- Running client and server on different terminals.

### Method 1- make sure you are in the root directory.

```
npm run dev

```
The above command will start both Frontend and Backend servers.

### Method 2- Open Two different terminals and run server and client separately.

#### To run the Backend Server, Make sure you are in the root directory

```
npm run server
```

#### In Second Terminal- change the directory to frontend in order to run FE Server.

```
cd frontend

npm start

```



### Development Process

- i have live streatmed a bit you can check it here - https://youtu.be/qjJs25Mtgyk

- Frontend Preview - https://www.youtube.com/watch?v=TsTrq0UMmh0



### Nav data is provided by  API - 

TBU--------------------

# RESTAPI ENDPOINTS



## Open Endpoints

Open endpoints require no Authentication.

* [Login]() : `POST /api/user/login/`
* [Register]() : `POST /api/user/register/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

* [get all Funds]() : `POST /api/funds/`
* [get FundsById]() : `POST /api/funds/:id`
* [get FundsByQueryParams]() : `POST /api/funds/q=?"xxx"`
* [Profile]() : `POST /api/user/profile/`


### Current User related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [Profile]() : `POST /api/user/profile/`
* [Update info]() : `PUT /api/user/profile/:id`



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

