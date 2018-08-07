# <a href="https://nytscrapeapp.herokuapp.com/" target="_blank">NYT React Search</a>

### Overview
React-based rendition of the New York Times Article Search application. This application requires React components, helper/util functions, and React mounting life cycle to query and display articles based on user searches. Requires Node, Express and MongoDB so that users can save articles to read later.


### Getting Started

1. Install dependencies
2. In your CLI, enter mongod
3. In a new CLI window, mongo
4. In a third CLI window, go to root and enter yarn start. This will automatically launch app in browser.

### Dependencies

1. node
2. express
3. mongoDB
4. mongoose
5. reactJS
6. body-parser
7. path
8. react
9. react-dom
10. react-router-dom
11. axios
12. api
13. Heroku

No need to install dependencies by name. Run the following in root directory as well as in the Client folder:

```
yarn install
```

### Deployment

Create a heroku app in your project directory
```
heroku create <projectName>
```

Provision mLab MongoDB add-on for your project
```
heroku addons:create mongolab
```

Deploy the app
```
yarn deploy
```


## Screenshots

**Article search and results**

![screenshot-1](http://i65.tinypic.com/1zm18ox.png)



