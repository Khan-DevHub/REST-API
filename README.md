**REST-API**
A RESTful API built with Node.js and Express to manage user data. It implements CRUD operations (Create, Read, Update, Delete), features modular routing, environment variable configuration, and input validation to maintain a stateless architecture.

**Features**
- **Stateless Design:** Data is handled in-memory, adhering to REST principles.
- **Modular Routing:** Clean separation of server logic and route definitions.
- **CRUD Operations:**
  - POST /users: Add new users (Duplicate ID prevention included).
  - GET /users: Retrieve all users.
  - GET /users/:id : Retrieve a specific user by ID.
  - PUT /users/:id : Update existing user details.
  - DELETE /users/:id : Remove a user from the system.
- **Validation:** Ensures data integrity by checking for required fields.

**Tech Stack**
- Node.js
- Express.js
- Thunder Client (for API testing)
