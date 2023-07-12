# Airline Management System - Auth Service
## Description:  
The Airline Management System is a comprehensive backend project that follows a microservices architecture. This particular microservice, the Auth Service, is responsible for authenticating and authorizing incoming requests. It ensures the security and integrity of the system by validating user credentials and managing user roles.
## Key Features: 
## Authentication:   
  -The Auth Service securely verifies the identity of users by validating their credentials, such as email and password.
## Authorization:  
  -It also authorizes users based on their roles, which are stored in a separate role table. This ensures that users have the appropriate permissions to access specific resources.
## JWT Token:   
   -The Auth Service utilizes JSON Web Tokens (JWT) to validate incoming requests. This token-based authentication mechanism enhances security and prevents unauthorized access.
##Database:   
   -The project utilizes MySQL as the database management system. Two tables, namely "user" and "role," are created to store user information and roles, respectively.
## Encryption:   
   -User passwords are stored securely by utilizing bcrypt encryption. This ensures that sensitive information remains protected.
## MVC Architecture:   
   -The project follows the Model-View-Controller (MVC) architectural pattern, which promotes separation of concerns and maintainability.
## Error Handling:   
   -Robust error handling mechanisms are implemented to gracefully handle exceptions and provide meaningful error messages to users.
## Error Codes:   
   -The project incorporates a standardized error code system to facilitate easier debugging and troubleshooting.
## Sequelize ORM:   
   -The Sequelize Object-Relational Mapping (ORM) library is used to interact with the MySQL database, providing an intuitive and efficient way to manage database operations.


This project aims to provide a secure and efficient authentication and authorization system for the Airline Management System. By following best practices and utilizing industry-standard tools and technologies, it ensures the integrity and confidentiality of user data.
