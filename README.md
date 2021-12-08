## Task Manager API
* **REST API** for managing tasks
* **MVC** pattern for performing CRUD on Task Object
* **MongoDB** used for persisting Tasks data
* **NodeJS** for backend/server logic 
* **Express** for serving the API & adding Middleware
  + DB/Object Error Handling
  + Async Functions
  + Route Error Handling

### Task Schema:
+ _id: _(Provided by MongoDB)_
+ name: String 
+ completed: Boolean

### End Points:
+ _/api/v1/tasks/_
  - **GET** - get all tasks
  - **POST** - create new task
  
+ _/api/v1/tasks/:id_
  - **GET** - get task with id 
  - **PUT** - update task
  - **DELETE** - delete task
