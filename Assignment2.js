// Grace Kang
// Assignment 2
// CSCI 3800-001

var http = require("http");
var https = require("https");
var express = require("express");

var app = express();

// get urn

app.get('/gets', function(request, response)
{
    if (request.method == 'GET')
    {
        // if there are query parameters
        // length of keys in object is not equal to empty object
        if (Object.keys(request.query).length !== 0)
        {
            // name and value
            response.json
                ({
                    queryParameters: request.query
                })
        }

        else // no query parameters
            response.send('No query parameters sent in.')

    }

    else // method is not GET
        response.status(400).send("Does not support the HTTP method");
});

// post urn

app.post('/posts', function(request, response)
{
    if (request.method == 'POST')
    {
        // if there are query parameters
        if (Object.keys(request.query).length !== 0)
        {
            // name and value
            response.json
                ({
                    queryParameters: request.query
                })
        }

        else // no parameters
            response.send('No query parameters sent in')
    }

    else // method is no POST
        response.status(400).send("Does not support the HTTP method");



});

// put urn

app.put('/puts', function (request, response)
{

    if (request.method == 'PUT')
    {
        // if there are query parameters
        if (Object.keys(request.query).length !== 0)
        {
            // name and value
            response.json
                ({
                    queryParameters: request.query
                })
        }

        else // no parameters
            response.send('No query parameters sent in')
    }

    else // method is not put
        response.status(400).send("Does not support the HTTP method");
});

// delete urn

app.delete('/delete', function (request, response)
{

    if (request.method == 'DELETE')
    {
        // if there are query parameters
        if (Object.keys(request.query).length !== 0)
        {
            // name and value
            response.json
                ({
                    queryParameters: request.query
                })
        }

        else // no parameters
            response.send('No query parameters sent in')
    }

    else // method is not delete
        response.status(400).send("Does not support the HTTP method");
});

// no URN

app.all('/', function (request, response)
{
    response.status(400).send("No URN specified.");
});


// wait for a connection
const port = 3000;
app.listen(port, function ()
{
    console.log('Server is running at port 3000');
        //http:localhost:3000
});
