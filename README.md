# Personal Finance Management Application | Full stack project

A full stack personal finance management application with transactional balance integrity , db level constraints and CSRF protected authentication.

## Core Features

- Records
- Accounts
- Categories
- Authentication

## Tech Stack

### Backend

- Nodejs
- Express
- Typescript
- Prisma ORM
- Postgresql

### Frontend

- Typescript
- Vite + React
- Tailwind
- Axios

### Deployment

- Vercel (Frontend)
- Render (Backend)
- Neon (Database)

## Local Setup

Let's go through how to run this project locally .

This project has 2 separate repos for frontend and backend .

### Follow these steps

1. Create a folder "Personal Finance Manager" or any name of your choice

   Clone the frontend

   `  git clone https://github.com/monster-1951/my-money.git  `

   Clone the backend

   ` git clone https://github.com/monster-1951/my-money-backend.git`

2. Open 2 different terminals , and cd into the frontend code and backend code respectively .

3. Open VS code in the frontend repo , create a .env file and add this env variable

   `VITE_URL_FOR_BACKEND=http://localhost:8080`

4. Save it and do npm i and npm run dev in it's terminal

5. Now , open the backend repo in vs code , set the following env variables by creating a .env folder in the project .

   > You will need to have a postgres db url to move forward with this backend , you can use your local postgresdb url also.

```
    PORT = 8080

    CSRF_TOKEN_SECRET = "Your value"

    COOKIE_SECURE = "true"

    DATABASE_URL="your postgres db url"

    JWT_SECRET_KEY = "Your value"

    TOKEN_HEADER_KEY = token_header
```

6. Now do npm i and npm run dev in terminal

- Navigate to localhost:5173 on browser ( that's where the frontend is running)

- You can start by creating a new account by clicking register button .

## Architecture overview

The project has 3 major entities , accounts - it has money , records - the transactions that you make from that account, categories - transactions belong to a category

- ### Account
  - User Creates a new account , initialized it with some amount , simulating an account which he/she already has in bank or in form of cash or any real account .
  - User can have multiple accounts

- ### Record
  - Records are of 3 kinds . Income , expense , transfer .
  - If user has recieved some money , it is income , if he spends , it is expense and if he transfers money from his account to one of his accounts , it is transfer .
  - Each record could be tagged to a category like salary , food , diet , discount , shopping , refund etc . ( Except for transfer)
  - It involves Record type , the account involved ( two accounts in case of transfer ), amount , date and time of the transaction .
  - Creating or updating or deleting the transaction will auto update the balance in the concerned accounts and the balance will be reflected there itself .
- ### Categories
  - These are of 2 kinds , Income categories and Expense Categories .
  - User can assign the category to a record based on the record type .

> To create a transfer record , the user must own both from account and to account. Because the purpose it to maintain personal finances .


- We used Vite+React in typescript, tailwind for styling . 

- The design was made mobile first , it's not for desktop usage .

## Pagination and filtering -

- The get records api, allows the request to have query params in it's request where user can send filters to filter records and get their desired records , like records filtered by time period , or record_type , or amount . 
- The page number can be passed in the request body as query param
- user_id is used on all tables to get the rows to ensure the user sees only his data , not other user's data .


## Axios
- We use axios instances and interceptors here .
- To make an api call , to different routes on backend , we have relevant axios instances . 
- To hit the routes related to accounts , we have accounts axios instance , same for auth , records , categories .
- All have their relevant request and response interceptors
- We have functions that take the required request data and makes axios api calls to backend . 
- The frontend components only call those functions , they don't use axios directly .

- User will be redirected to login page if unauthorized . 
- User can either register with a new account or login . Remaining all routes are protected on frontend . 



## App structure
- The app is organized page wise . 
- Routes are managed by react-router-dom. 
- Each page is a component , Each component has it's subcomponents . - Components are defined in the components directory , in organized way . 
- Related components are kept in related directory inside the main components directory .

## Authorization flow

- When user logs in , backend sets a http only cookie in browser
- The frontend can't access it.
- CSRF token is fetched from backend and stored in memmory . Is it not persisted accros reloads.
- On every request frontend makes , browser attaches the cookie along with it
- Axios request interceptor attaches the csrf token in the x-csrf-token header