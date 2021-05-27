<h1 align="center">Welcome to Ironhack Tech Challenge 👋</h1>


> This project is based on a coding challenge accessible [here](https://github.com/VictorRodriguezIronhack/reto_web).

It's home shows all mobile phones which link to a detailed view for each one.

The data is served from an API Rest built using ```Express.js``` and ```Node``` and is displayed using ```React```.

## Install

```sh
npm install
```

## Usage
In diferent terminals

```
node src/server.js
```
```sh
npm run start
```
The web will open by itself.

## Endpoint Table

### Client
Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/" | Full phone list
GET | "/:id" | Details of the phone

### Server

Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/api/phones" | Full phone json
GET | "/api/phones/:id" | Phone json by recovered by ID

## Author

👤 **Pau Rodríguez**

* Website:  https://www.linkedin.com/in/paurodriguezmolina/
* Github: [@Silinde87](https://github.com/Silinde87)
* LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Silinde87/ironhack-tech-challenge/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_