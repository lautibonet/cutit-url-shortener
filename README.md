
# MiniURL
### Url Shortener
[Link to App](https://mini-url.vercel.app/)

## Description

Mini URL is a simple URL shortener web application developed using [NextJs](https://nextjs.org/) react framework, [nodejs](https://nodejs.org/en/), [mongodb](https://www.mongodb.com/) database and deployed on [Vercel](https://vercel.com/)

## Backend

Mini URL backend is built using the API routes solution provided by [NextJs](https://nextjs.org/docs/api-routes/introduction) and the app also uses [mongodb](https://www.mongodb.com/) as its no relational database. 

## How it works

- When entering to the main page, the user is presented with an input field where it can enter a long url to shorten.
- When clicking on "Make it Mini", the system will generate a new short url.
- When navigating to the generated URL, the app will redirect the user to the original destination.
- Mini APP saves analytics such as how many times the generated URL was clicked (but currently this information is not being displayed to the user).

## Screens

### Main Screen
![image](https://user-images.githubusercontent.com/8452417/190175145-74a9abf0-9412-4d41-b94c-e9f6f0f644f7.png)

### Main Screen - URL Generated
![image](https://user-images.githubusercontent.com/8452417/190176164-db5f6258-ca48-4c51-a580-259cec66d619.png)

### Mini URL Not Found
![image](https://user-images.githubusercontent.com/8452417/190176330-8ae7f387-aa52-4378-9727-b76c1b73583a.png)
