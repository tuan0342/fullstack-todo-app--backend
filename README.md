# Todo App - Backend: RESTful API
Using NodeJs, ExpressJS and MongoDB

### Base Url: 
- https://fullstack-todo-app-backend-r6y6.onrender.com

### Description API: 
- GET ALL TODO: '/'
  + Get all todo from mongodb (using [https://www.mongodb.com](https://www.mongodb.com/))
- CREATE NEW TODO: '/save'
  + Create new todo
  + Example:
    body (JSON format):
       {
          "text": "Buy milk 2"
       }
- UPDATE TODO: '/:id/update'
  + Update todo by id params
- DELETE TODO: '/:id/delete'
  + Delete todo by id params

### Link Frontend
- https://github.com/tuan0342/fullstack-todo-app--frontend

### Deploy:
- Using [render.com](https://render.com/)
