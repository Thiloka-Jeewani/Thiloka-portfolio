/* Verified project catalog. See PROJECT_AUDIT.md for sources and limitations. */
const projects = [
  {
    "id": "bus",
    "title": "Sri Lanka Bus Tracker",
    "categories": [
      "Full-Stack",
      "Web Development"
    ],
    "stack": [
      "React",
      "TypeScript",
      "FastAPI",
      "SQLite",
      "Leaflet"
    ],
    "description": "A community bus-tracking prototype connecting passengers, drivers and operators through a live map.",
    "features": [
      "Server-Sent Events for live location updates",
      "Role-based accounts and operator fleet assignment",
      "Validated GPS submissions and SQLite persistence"
    ],
    "github": "https://github.com/Thiloka-Jeewani/sri-lanka-bus-tracker",
    "image": "assets/projects/bus-lk/homepage.webp",
    "contribution": null,
    "gallery": [
      {
        "src": "assets/projects/bus-lk/homepage.webp",
        "caption": "Bus.lk community transit map and route overview"
      }
    ]
  },
  {
    "id": "solar",
    "gallery": [
      {
        "src": "assets/projects/solar-homepage.webp",
        "caption": "Smart Solar homepage"
      }
    ],
    "demo": "https://smart-solar-installation-grid-compl-ten.vercel.app/",
    "title": "Smart Solar Installation & Grid Compliance",
    "categories": [
      "Full-Stack",
      "AI / Machine Learning",
      "Mobile / IoT"
    ],
    "stack": [
      "React",
      "ASP.NET Core",
      "PostgreSQL",
      "Flutter",
      "LangGraph"
    ],
    "description": "A team-built demonstration platform connecting rooftop-solar surveys, field inspections, engineering reviews and equipment procurement.",
    "features": [
      "React staff console and Flutter client",
      "Deterministic rule-based LangGraph workflows",
      "Engineering review, inventory pricing and reservations"
    ],
    "github": "https://github.com/ThisulHerath/Smart-Solar-Installation-Grid-Compliance-Platform",
    "image": "assets/projects/solar-homepage.webp",
    "contribution": null
  },
  {
    "id": "travel",
    "title": "AI-Powered Travel Planning System",
    "categories": [
      "AI / Machine Learning",
      "Full-Stack",
      "Web Development"
    ],
    "stack": [
      "Python",
      "Flask",
      "Scikit-learn",
      "MySQL"
    ],
    "description": "Personalized travel recommendations and itineraries shaped by budget, trip duration and traveler preferences.",
    "features": [
      "Recommendation models and data preparation",
      "Day-by-day itinerary planning",
      "Service ticket CRUD and user management"
    ],
    "github": "https://github.com/Thiloka-Jeewani/AI-Powered-Travel-Planning-System-Lanka-Travels-",
    "image": "assets/projects/travel-planner.webp",
    "contribution": "IT service ticket management, UI mockups, backend/database integration and data preprocessing."
  },
  {
    "id": "movie",
    "title": "MOVIE-SENTIBOT",
    "categories": [
      "AI / Machine Learning"
    ],
    "stack": [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Jupyter"
    ],
    "description": "An NLP coursework project exploring positive and negative movie-review classification with the IMDB dataset.",
    "features": [
      "Text cleaning, stemming and n-gram extraction",
      "Multiple classification model notebooks",
      "Model comparison and confusion-matrix visualizations"
    ],
    "github": "https://github.com/Thiloka-Jeewani/MOVIE-SENTIBOT-NLP-Based-Solution-for-Movie-Review-Sentiment-Analysis",
    "image": "assets/projects/movie-results.webp",
    "contribution": null
  },
  {
    "id": "laundry",
    "title": "Fresh Wash Laundry Management System",
    "categories": [
      "Full-Stack",
      "Web Development"
    ],
    "stack": [
      "Java",
      "Spring Boot",
      "React",
      "MySQL"
    ],
    "description": "A web-based laundry platform for customers, staff and administrators to manage services, orders and status tracking.",
    "features": [
      "Role-based access and authentication",
      "Order management and CRUD workflows",
      "React frontend integrated with Spring Boot"
    ],
    "github": "https://github.com/Thiloka-Jeewani/Web-based_Laundry-management-system",
    "image": "assets/projects/laundry-system.webp",
    "contribution": "Order management, CRUD operations, integration, database design and testing."
  },
  {
    "id": "drive",
    "title": "Vehicle Rental Mobile Application",
    "categories": [
      "Mobile / IoT",
      "Full-Stack"
    ],
    "stack": [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "description": "DriveMate brings vehicle rentals, bookings and travel assistance together in a full-stack mobile application.",
    "features": [
      "Vehicle inventory CRUD and administration",
      "Booking workflows and receipt uploads",
      "Trip planning with simulated distance calculations"
    ],
    "github": "https://github.com/Thiloka-Jeewani/Car-Rental-System---Vehicle-Management-module",
    "image": "assets/projects/drive-source.webp",
    "contribution": "Vehicle Management and Admin Control module: fleet CRUD, MongoDB integration, validation and integration testing."
  },
  {
    "id": "hotel",
    "title": "LuxStay Hotel Booking System",
    "categories": [
      "Web Development"
    ],
    "stack": [
      "Java",
      "JSP",
      "Servlets",
      "Maven",
      "Tomcat"
    ],
    "description": "A Java tourism and hotel-reservation coursework application, also named HotelRio in its repository.",
    "features": [
      "Registration, login and profile management",
      "OTP password recovery and session handling",
      "Role-based access with file-based storage"
    ],
    "github": "https://github.com/Thiloka-Jeewani/HotelRio---The-Hotel-room-reservation-system-project",
    "image": "assets/projects/luxstay.webp",
    "contribution": "User management module within the team project."
  },
  {
    "id": "greenhouse",
    "title": "Smart Greenhouse System",
    "categories": [
      "Mobile / IoT"
    ],
    "stack": [
      "Arduino",
      "DHT11",
      "C++",
      "IoT"
    ],
    "description": "An academic sensor-based greenhouse prototype for monitoring environmental conditions and exploring automated control.",
    "features": [
      "Temperature, humidity and soil-moisture monitoring",
      "Irrigation and fan-control architecture",
      "Hardware prototype and architecture documentation"
    ],
    "github": "https://github.com/Thiloka-Jeewani/IoT-Based-Smart-Greenhouse-System",
    "image": "assets/projects/greenhouse-source.webp",
    "contribution": null
  },
  {
    "id": "pacman",
    "title": "Pac-Man Search Algorithms",
    "categories": [
      "AI / Machine Learning"
    ],
    "stack": [
      "Python",
      "Graph Search",
      "Tkinter"
    ],
    "description": "A collaborative Intelligent Agents coursework project implementing maze-search algorithms using the UC Berkeley Pac-Man AI framework.",
    "features": [
      "Depth-First Search and Breadth-First Search with cycle prevention",
      "Uniform-Cost Search and A* using priority queues",
      "Maze layouts, graphical/text-mode agents and supplied autograder tests"
    ],
    "github": "https://github.com/ThisulHerath/IT3012-pacman-search-group-17",
    "image": "assets/projects/pacman-search.svg",
    "contribution": null
  }
];

const achievementGalleries = {
  "sharebite": {
    "title": "ShareBite LK",
    "gallery": [
      {
        "src": "assets/projects/sharebite/homepage.webp",
        "caption": "ShareBite LK homepage and surplus food reservation preview"
      }
    ]
  }
};
