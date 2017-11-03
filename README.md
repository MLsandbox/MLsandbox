# MLsandbox
an educational machine-learning sandbox
Get Started
-----------

- Install pre-requirements
  
  - Node 
    https://nodejs.org/en/download/

  - Download Git (windows)
    https://git-for-windows.github.io/

  - Create an Amazon RDS instance
    https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/

- Clone the repo

  ```shell
  git clone https://github.com/MLsandbox/MLsandbox.git
  ```

- Make env file
  
  ```shell
  cd MLsandbox
  touch .env
  vi .env
  (press i when you are in text editor type the following)
  PORT=1338
  NAME=MLsandbox
  OWNER=(your registered name on amazon rds)
  PASSWORD=(your registered password on amazon rds)
  HOST=(your registered rds instance url)
  RDS_PORT=(your rds port)
  JWTSECRET=anythingyouwant
  (press esc and type :wq to save file)
  ```

- Install Node Modules

  ```shell
  npm install
  ```
- Generate Bundle

  ```shell
  npm run compile
  ```
- Start Server

  ```shell
  npm start
  ```
