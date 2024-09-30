# Address Registration System

A simple address registration system built using Node.js, Express.js, and MongoDB.



# Introduction

This project is a simple address registration system that allows users to register their names and addresses.
The system uses Node.js, Express.js, and MongoDB to store and retrieve data.

# Features

User registration with name and address
Data storage using MongoDB
API endpoints for registration and data retrieval


# Requirements

Node.js (version 14 or higher)
Express.js (version 4 or higher)
MongoDB (version 3 or higher)


# Installation

Clone the repository using git clone https://github.com/your-username/address-registration-system.git

Install dependencies using npm install

Start the server using node app.js

# Usage

Open a web browser and navigate to http://localhost:3000

Fill out the registration form with your name and address

Click the "Register" button to submit the form

The system will store your data in the MongoDB database

# API Endpoints

POST /register: Register a new user with name and address

GET /: Retrieve a list of all registered users


# Database Schema


The system uses a simple database schema with two collections:

users: stores user data with fields name and _id

addresses: stores address data with fields address and userId ( references the users collection)


# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Author
Yamala Durgaprasad
