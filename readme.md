# Exercise: Urban Gardening Community API

Created by: Jani Ojala
Created time: November 20, 2024 10:24 AM
AI summary: The document outlines an exercise to create an API for an Urban Gardening Community, focusing on building a MongoDB schema, implementing CRUD operations, and handling HTTP requests using Express.js. It includes detailed instructions for defining a Garden model, seeding the database, and creating routes for listing, creating, updating, and deleting gardens, along with bonus challenges for additional functionality.
Tasks: Exercise: Urban Gardening Community API (https://www.notion.so/Exercise-Urban-Gardening-Community-API-14455daaaeb0802b9d70d26917bec387?pvs=21)

## **Learning Goals**

Upon completing this exercise, you will be able to:

- Create a MongoDB schema and model
- Implement database seeding functionality using Mongoose
- Build RESTful API endpoints
- Implement CRUD operations
- Handle HTTP requests and responses using Express.js
- Work with asynchronous JavaScript operations

## Introduction

With real-estate property prices soaring and urban spaces becoming more compact, urban gardening is the latest craze. This eco-friendly trend allows city dwellers to grow their own produce, beautify their living spaces, and connect with nature, with limited square footage. 

From vertical gardens on balconies to community rooftop plots, urban gardening is transforming concrete jungles into green oases.

Your job is to build an API for an Urban Gardening Community that connects urban gardeners by facilitating knowledge sharing!

## **Getting Started**

1. [Fork this repository](https://github.com/codevergehq/exercise-urban-gardening-community-api)
2. Clone the repository to your computer
3. Open a terminal and navigate to the project directory
4. Run `npm install` to install the project dependencies
5. Open `package.json` to verify that the dependencies were installed:

```json
{
  "name": "urban-gardening-community-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "mongoose": "^8.8.2"
  }
}
```

## Instructions

We've handled the initial imports and configured the `app.js` and `server.js` files for you.
Solve the tasks below to complete the Urban Gardening Community API.

### Task 1: Define the Garden Model

1. Create a new file named `Garden.model.js` in the models folder

2. Define the Garden schema with the following fields:
    1. name (String): Name of the garden
    2. location (String): Location of the garden
    3. size (Number): Size of the garden in square meters
    4. type (String): Type of garden, e.g. rooftop, community, balcony
    5. plants (Array of Strings): List of plants in the garden
    
3. Create the `Garden` model using the defined schema

4. Export the `Garden` model so it can be used elsewhere

### Task 2: Seed the database

1. Open the `seeds.js` file in the `database` folder.

2. In this file, you’ll see that we’ve taken care of the initial imports, including the `connectDB` function. You will also find a sample array of `gardens` 

3. Your task is to seed the database.
Create an asynchronous function called `seedDatabase` that:
    1. calls the `connectDB` function
    2. calls the `.deleteMany()` method on the `Garden` model to clear the database if there is any existing data
    3. calls the `.create()` method on the `Garden` model and passes in the array of `gardens` as an argument
    4. Logs the number of successfully created gardens in the console
    5. closes the database connection with `mongoose.connection.close()` 
    6. catches any errors
    
4. Make sure to call or invoke your `seedDatabase()` function at the end of your `seeds.js` 

5. Run your seeding script to populate the database with gardens:

```bash
node database/seeds.js
```

6. After seeding the database, verify that it worked by opening up MongoDB Compass

### Task 3: List All Gardens

1. Open up `garden.routes.js` in the routes folder

2. Implement a route to retrieve all gardens `GET /api/gardens` 

3. Use the `.find()` method to fetch all gardens from the database

4. Send the list of gardens as a JSON response

### Task 4: Create New Garden

1. In `garden.routes.js`, implement a route to create a new garden `POST /api/gardens` 

2. Use the `.create()` method to save the new garden to the database

3. Send the newly created garden as a JSON response with a `201` status code

4. Handle any errors and send an appropriate error response

### Task 5: Update Garden

1. In `garden.routes.js`, implement a route to update a garden `PUT /api/gardens/:id` 

2. Use the `.findByIdAndUpdate()` method to find a garden by ID and update it in the database

3. Send the updated garden as a JSON response

4. Handle any errors and send an appropriate error response

### Task 6: Delete Garden

1. In `garden.routes.js` , implement a route to delete a garden `DELETE /api/gardens/:id` 

2. Use the `.findByIdAndDelete()` method to remove the garden from the database

3. Send a 204 status code as a response to indicate successful deletion

4. Handle any errors and send an appropriate error response

### **Bonus Challenges**

1. Implement a route to search for gardens by name or location

2. Implement a global error handling function in `error-handling/middleware.js` and apply it all of your routes

## **Submission**

When you've completed the exercise:

```jsx
git add .
git commit -m "Completed Urban Gardening Community API"
git push origin main
```

Create a Pull Request for review and submit your assignment below:

_____________________________

## Frequently Asked Questions (FAQs)

<details>
<summary>How can I search for gardens by name?</summary>


To search for gardens by name, you can make a `GET` request to the `/api/gardens` endpoint with the `name` query parameter. 
    
For example: `/api/gardens?name=Rooftop%20Oasis`. 
    
This will return all gardens with a name that exactly matches "Rooftop Oasis".

</details>
