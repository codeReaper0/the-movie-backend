// Define the Swagger document in JavaScript format
const swaggerDocument = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "The Movie API",
      version: "1.0",
      description:
        "This is a movie rental api application made by Tella Boluwatife",
      contact: {
        name: "Tella Boluwatife",
        url: "https://tellaboluwatife.vercel.app",
        email: "boluwatifetella@gmail.com",
      },
    },
    tags: [
      {name: "Auth", description: "Endpoints related to authentication"},
      {name: "Customer", description: "Endpoints related to customers"},
      {name: "Genres", description: "Endpoints related to movie genre"},
      {name: "Movies", description: "Endpoints related to movies"},
      {name: "Rentals", description: "Endpoints related to movie rental"},
      {name: "Return", description: "Endpoints related to renatl returns"},
      {name: "User", description: "Endpoints related to user operations"},
    ],
    paths: {
      "/api/auth": {
        post: {
          tags: ["Auth"],
          summary: "Login",
          description: "This route is used to login and generate JWT",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginReq",
                },
              },
            },
          },
          responses: {
            200: {description: "Login Successful"},
            400: {description: "Invalid login details"},
          },
        },
      },
      "/api/users": {
        post: {
          tags: ["Auth"],
          summary: "Signup",
          description: "This route is used to signup",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignupReq",
                },
              },
            },
          },
          responses: {
            200: {description: "User reistered successfully"},
            400: {description: "User already registered"},
          },
        },
      },
      "/api/users/me": {
        get: {
          security: {
            xAuthToken: [],
          },
          tags: ["Auth"],
          summary: "Get user",
          description: "Get current user",
          responses: {
            200: {description: "User Generated"},
            400: {description: "Access denied"},
          },
        },
      },
      "/api/customers": {
        get: {
          security: {
            xAuthToken: [],
          },
          tags: ["Customer"],
          summary: "Get customer",
          description: "Get all customers",
          responses: {
            200: {description: "Success"},
            400: {description: "Access denied"},
          },
        },
        post: {
          security: {
            xAuthToken: [],
          },
          tags: ["Customer"],
          summary: "Create customer",
          description: "This route is used to create customer",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreatCusReq",
                },
              },
            },
          },
          responses: {
            200: {description: "Customer Created"},
            400: {description: "Access denied"},
          },
        },
        put: {
          security: {
            xAuthToken: [],
          },
          tags: ["Customer"],
          summary: "Edit customer",
          description: "This route is used to edit customer",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreatCusReq",
                },
              },
            },
          },
          responses: {
            200: {description: "Customer Edited"},
            400: {description: "Access denied"},
          },
        },
        delete: {
          security: {
            xAuthToken: [],
          },
          tags: ["Customer"],
          summary: "Delete customer",
          description: "This route is used to delete customer",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DelCusReq",
                },
              },
            },
          },
          responses: {
            200: {description: "Customer Deleted"},
            400: {description: "Access denied"},
          },
        },
      },
      "/api/customers/{id}": {
        get: {
          security: {
            xAuthToken: [],
          },
          tags: ["Customer"],
          summary: "Delete customer",
          description: "This route is used to delete customer",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Customer Id",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {description: "Customer Deleted"},
            400: {description: "Access denied"},
          },
        },
      },
      "/api/genres": {
        get: {
          security: {
            xAuthToken: [],
          },
          tags: ["Genres"],
          summary: "Get genre",
          description: "Get all genres",
          responses: {
            200: {description: "Success"},
            400: {description: "Access denied"},
          },
        },
        post: {
          security: {
            xAuthToken: [],
          },
          tags: ["Genres"],
          summary: "Create genre",
          description: "This route is used to create genre",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GenreReq",
                },
              },
            },
          },
          responses: {
            200: {description: "genre Created"},
            400: {description: "Access denied"},
          },
        },
        put: {
          security: {
            xAuthToken: [],
          },
          tags: ["Genres"],
          summary: "Edit genre",
          description: "This route is used to edit genre",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GenreReq",
                },
              },
            },
          },
          responses: {
            200: {description: "genre Edited"},
            400: {description: "Access denied"},
          },
        },
        delete: {
          security: {
            xAuthToken: [],
          },
          tags: ["Genres"],
          summary: "Delete genre",
          description: "This route is used to delete genre",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GenreReq",
                },
              },
            },
          },
          responses: {
            200: {description: "genre Deleted"},
            400: {description: "Access denied"},
          },
        },
      },
      "/api/genres/{id}": {
        get: {
          security: {
            xAuthToken: [],
          },
          tags: ["Genres"],
          summary: "Delete genre",
          description: "This route is used to delete genre",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "genre Id",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {description: "genre Deleted"},
            400: {description: "Access denied"},
          },
        },
      },
      "/api/movies": {
        get: {
          security: {
            xAuthToken: [],
          },
          tags: ["Movies"],
          summary: "Get Movies",
          description: "Get all Movies",
          responses: {
            200: {description: "Success"},
            400: {description: "Access denied"},
          },
        },
        post: {
          security: {
            xAuthToken: [],
          },
          tags: ["Movies"],
          summary: "Create Movies",
          description: "This route is used to create Movies",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreatCusReq",
                },
              },
            },
          },
          responses: {
            200: {description: "Movies Created"},
            400: {description: "Access denied"},
          },
        },
        put: {
          security: {
            xAuthToken: [],
          },
          tags: ["Movies"],
          summary: "Edit Movies",
          description: "This route is used to edit Movies",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CreatCusReq",
                },
              },
            },
          },
          responses: {
            200: {description: "Movies Edited"},
            400: {description: "Access denied"},
          },
        },
        delete: {
          security: {
            xAuthToken: [],
          },
          tags: ["Movies"],
          summary: "Delete Movies",
          description: "This route is used to delete Movies",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/DelCusReq",
                },
              },
            },
          },
          responses: {
            200: {description: "Movies Deleted"},
            400: {description: "Access denied"},
          },
        },
      },
      "/api/movies/{id}": {
        get: {
          security: {
            xAuthToken: [],
          },
          tags: ["Movies"],
          summary: "Delete Movies",
          description: "This route is used to delete Movies",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Movies Id",
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            200: {description: "Movies Deleted"},
            400: {description: "Access denied"},
          },
        },
      },
    },
    components: {
      schemas: {
        LoginReq: {
          type: "object",
          properties: {
            email: {type: "string", format: "email"},
            password: {type: "string"},
          },
        },
        SignupReq: {
          type: "object",
          properties: {
            name: {type: "string"},
            email: {type: "string", format: "email"},
            password: {type: "string"},
          },
        },
        CreatCusReq: {
          type: "object",
          properties: {
            name: {type: "string"},
            phone: {type: "string"},
            isGold: {type: "boolean"},
          },
        },
        DelCusReq: {
          type: "object",
          properties: {
            id: {type: "string"},
          },
        },
        GenreReq: {
          type: "object",
          properties: {
            name: {type: "string"},
          },
        },
      },
      securitySchemes: {
        xAuthToken: {
          type: "apiKey",
          in: "header",
          name: "x-auth-token",
        },
      },
    },
    servers: [
      {
        // url: "http://localhost:3000/",
        url: "https://the-movie-a2a3.onrender.com/",
      },
    ],
  },
  apis: ["./startup/*.js"],
};

module.exports = swaggerDocument;
