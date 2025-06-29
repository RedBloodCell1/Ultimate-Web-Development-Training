# ExpressJS

JS framework to create back end

## Step to create express server:

1. Create directory
2. Create index.js file
3. Initialize NPM
4. Install the Express package
5. Write server app in index.js
6. Start server

## Request Vocab:

1. GET = Request Resource
2. POST = Sending Resource
3. PUT = Replace Resource
4. PATCH = Patch / Update Resource
5. DELETE = Delete Resource

## Number Response:

1. 100-199 = Informational Response
2. 200-299 = Sucesssful Response
3. 300-399 = Redirection Message
4. 400-499 = Client Error Response
5. 500-599 = Server Error Response

## Detailed Number Response:

1. 200 = OK (Can give message to success)
2. 201 = Created (Simply success post)
3. 404 = Not Found

## Middleware:

Request can be processed into something else

1. **body-parser** = I think this is to parse sent data into a more clean data. So from login page for example, and then its parsed into a more clean form of data that then can be accessed through
2. **app.use(bodyParser.urlencoded({ extended: true }));** = To use body parser. So our **req** has a **body** in which we can get the name/var by looking at the html **name attribute**

3. **morgan** = to log the status of the request

## Notes:

1. so npm i xxx -g is so we install node globally so we can use it everywhere anytime
2. dont forget to put **next()** so that the middleware can actually continue to the next one
3. Middleware is always called before every request made.
