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
      },
    },
    // securitySchemes: {
    //   apiKeyAuth: {
    //     type: "apiKey",
    //     in: "header",
    //     name: "Authorization",
    //   },
    // },
    servers: [
      {
        url: "https://the-movie-a2a3.onrender.com/",
      },
    ],
  },
  apis: ["./startup/*.js"],
};

module.exports = swaggerDocument;
