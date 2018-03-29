# Routes - Rest API

## Projects API
Type | End Point | Description
--- | --- | ---
GET | /api/projects | List of all projects
POST | /api/projects | Create a new project
GET | /api/projects/:id | Details of the project with id in param
PUT | /api/projects/:id | Update details of specific project
DELETE | /api/projects/:id | Delete the particular project

## Logs API
Type | End Point | Description
--- | --- | ---
POST | /api/logs/:pid | Add a new log entry to the project specified by pid
PUT | /api/logs/:id | Update a log entry specified by id
DELETE | /api/logs/:id | Delete a log entry specified by id
