#!/usr/bin/env node
"use strict";

const net = require('net');
const http = require('http');

const cortical = net.createServer((c) => {

  console.log('Client connected: 8124');
  
  c.on('connect', (c) => {
	
	console.log('Connection established: 8124');
	console.log(c);
	
  });
	  
  c.on('end', () => {
    console.log('Client disconnected: 8124');
  });
  
  c.on('data', (buf)=>{
	  console.log('Data has arrived from client: 8124');
	  console.log(buf.toString());
  });
  
  // c.write('hello\r\n');
  
 c.pipe(c);
 
 
});

cortical.on('error', (err) => {
  throw err;
});

cortical.on('listening', () => {
  console.log('Server listening: 8124');
});

cortical.listen(8124, () => {
  console.log('Server bound: 8124');
});



const cortical_http = http.createServer((request, response) => {
		let headers = request.headers;
		let method = request.method;
		let url = request.url;
		let body = [];
		
		//request.pipe(response);
		
		let client = net.createConnection({port: 8124}, () => {
			console.log('Connected to server: 8124');
			client.write('world!\r\n');
		});
		client.on('data', (data) => {
		  console.log('Data from server: 8124');
		  console.log(data.toString());
		  //client.end();
		});
		client.on('end', () => {
		  console.log('Disconnected from server: 8124');
		});

		/*
		request.on('error', (err) => {
		  // This prints the error message and stack trace to `stderr`.
		  console.error(err.stack);
		});
		
		request.on('data', (chunk) => {
		  body.push(chunk);
		}).on('end', () => {
			body = Buffer.concat(body).toString();
			// at this point, `body` has the entire request body stored in it as a string
		  
			response.on('error', function(err) {
				console.error(err);
			});

			response.statusCode = 200;
			response.setHeader('Content-Type', 'application/json');
			// Note: the 2 lines above could be replaced with this next one:
			// response.writeHead(200, {'Content-Type': 'application/json'})

			let responseBody = {
				headers: headers,
				method: method,
				url: url,
				body: body
			};
			
			response.end(JSON.stringify(responseBody));
		});*/
		
		cortical.getConnections((err, count) => {
			console.log("No. of connections..." + count);
		});
  
		
		
});

cortical_http.listen(8080, () => {
    console.log("HTTP Server listening on: http://localhost:%s", 8080);
});


