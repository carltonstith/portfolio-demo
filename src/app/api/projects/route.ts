import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    projects: [
      {
        "id": 1,
        "title": "Customer Invoice Management Portal",
        "shortDescription":
          "Software development of a partner portal for Alarm Connections.",
        "description":
          "Alarm Connections is no longer in business. Alarm Connections was a wholesale alarm monitoring company that I had the pleasure of working with for several years. The company provided alarm monitoring services to alarm dealers and integrators. The project involved the development of a partner portal that allows partners to manage customer invoices and other related tasks. The portal was built using .NET Core 3.1 for the Web API and Angular for the UI. The project was completed in 2020 and was a great success. The portal was well received by the partners and helped to streamline the invoicing process. The project was a great learning experience for me and helped me to improve my skills in web development. A custom Web API was built using .NET Core 3.1 to handle the backend logic and data storage. The API was designed to be RESTful and followed best practices for security and performance. One of the API's involved refactoring a partner's SOAP service and refactoring it to a RESTful Web API. The API's were hosted on Azure and used Azure Virtual Machines for data storage. The API was designed to be scalable and could handle a large number of requests. The API was also designed to be secure and used OAuth2 for authentication and authorization. The API was tested using Postman and was found to be reliable and performant. The UI was built using Angular and was designed to be responsive and user-friendly. This was placed in an Azure App Service.",
        "technologies": [
          "HTML",
          "CSS",
          "Angular",
          "JavaScript",
          "jQuery",
          "TypeScript",
          "Node.js",
          "Kendo UI",
          "Bootstrap",
          "SQL Server",
        ],
        "github": "",
        "liveDemo": "https://example.com/project1",
        "image": "/alarmConnections-ThePartnershipConnection.png",
        "alt": "The Partnership Connection Partner Portal for Alarm Connections",
      },
      {
        "id": 2,
        "title": "Password Generator Application",
        "shortDescription":
          "This was a simple password generator application that was built for a larger project.",
        "description":
          "This was a simple password generator application. It was built for a larger project that I am working on. The project is a web application that allows users to generate random passwords. The application is built using HTML, CSS, and JavaScript. The application is designed to be simple and easy to use. The user can select the length of the password and the types of characters to include in the password. The application generates a random password based on the user's selections. The application is designed to be responsive and works well on mobile devices.",
        "technologies": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
        ],
        "github": "https://github.com/carltonstith/password-generator",
        "liveDemo": "https://password-generator-five-red.vercel.app",
        "image": "/password-generator.png",
        "alt": "Password Generator Application",
      },
      {
        "id": 3,
        "title": "Systems Management Application Dashboard",
        "shortDescription":
          "Full-stack systems management system for a fictional auto dealership with modern UI, CRUD functionality, and customizable product inventory",
        "description":
          "This was a personal project. This is a .NET 8 Web API and Next.js UI application. This CRUD application allows users to create, read, update, and delete records. The application uses the Entity Framework Core to interact with a SQL Server database. The application uses the Tailwind CSS library to style the UI.",
        "technologies": [
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "SQL Server",
          "Next.js",
          "Node.js",
          "TypeScript",
          "React",
          "C#",
          "ASP.NET Core",
          "ASP.NET Core Identity",
          ".NET 8",
          "Entity Framework Core",
          "Web API",
        ],
        "github": "https://dev.azure.com/aseniordev/StithAutoGroup",
        "liveDemo": "https://stithautogroup-ui.vercel.app",
        "image": "/stith-auto-group.png",
        "alt": "Stith Auto Group Systems Management Application",
      },
      {
        "id": 4,
        "title": "Customer Invoice Management Portal",
        "shortDescription": "This is a short description of project four.",
        "description": "This is a description of project four. A longer description of the project. This is a description of project four. A longer description of the project. This is a description of project four. A longer description of the project.",
        "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
        "github": "",
        "liveDemo": "https://example.com/project4",
        "image": "/cutsByUsBarbershop.jpg",
        "alt": "Project Four",
      },
    ],
  });
}
