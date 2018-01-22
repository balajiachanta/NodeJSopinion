# NodeJSopinion

App Name - opiniontest
Tech - NodeJS (ExpressJS) , EJS (View), body-parser, mongoose (mongodb)


1. express opiniontest --view=ejs --body-parser --save - executed in terminal
2. opened in vsc
3. changed package.json - start element to nodeman ./bin/www
4. npm start (terminal)
5. npm install --save mongoose
6. Remember Mongoose will access a table in MongoDb ends with "s" ex: Product schema means Producs table in mongo
7. curl -i -X POST -H "Content-Type: application/json" -d ' {"title":"Tech","comment":{"title":"good to learn"}}' localhost:3000/topic
8. Get localhost:3000/topic
