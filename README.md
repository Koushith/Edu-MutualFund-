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
### Nav data is provided by OpenWeatherMap API - 

#### Quick Loom Video instruction to run the application- https://www.loom.com/share/ea919f1d9a704f20b04d381744d67b85



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

