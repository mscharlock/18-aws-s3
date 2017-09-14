# Lost my laptop cord, working on my home computer
# CFgram: Code Fellow's instagram-like API

## Description: 
Users sign up to use this service. After making an account, they can sign in. Signing in makes sure to authenticate users via jwt and encryption of passwords/usernames. After logging in, they then have the permission to make galleries and upload photos to their galleries. Photos are stored in Amazon's S3 storage and other data (description, etc) is stored in a MongoDB. 

## Installation: 
Download from npm 
```npm i``` to install dependencies

## Routes: 
_Signing in and signing up_
POST http://localhost/api/signup 

GET http://localhost/api/signin

_Post, Get, Put, Delete for photo galleries_
POST http://localhost/api/gallery

GET http://localhost/api/gallery/:_id
GET http://localhost/api/gallery

PUT http://localhost/api/gallery/:_id

DELETE http://localhost/api/gallery/:_id

_Post, Get, Put, Delete for individual photos_
POST http://localhost/api/photo

GET http://localhost/api/photo
GET http://localhost/api/photo:_id

PUT http://localhost/api/photo:_id

DELETE http://localhost/api/photo:_id
