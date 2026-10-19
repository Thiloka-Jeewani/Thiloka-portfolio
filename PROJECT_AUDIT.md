# Project verification audit

Audit date: 20 October 2026. Reviewed the public GitHub repository listing through the GitHub REST API (13 repositories), repository READMEs, recursive file trees and selected implementation files. Repository and team links below returned HTTP 200. The profile’s project table supplied the connection to the Smart Solar team project. No ownership of the full team implementation is claimed.

## Included catalog

| Project | Status | Evidence / scope |
|---|---|---|
| [Sri Lanka Bus Tracker](https://github.com/Thiloka-Jeewani/sri-lanka-bus-tracker) | Added | New. README, frontend/package.json, backend/app/main.py and frontend/src/App.tsx. React/TypeScript, Leaflet, FastAPI, SQLite, SSE, role-based workflows. Explicitly a prototype with an illustrative route. |
| [Smart Solar Installation & Grid Compliance](https://github.com/ThisulHerath/Smart-Solar-Installation-Grid-Compliance-Platform) | Added | New team project. Profile README plus team README, frontend-web/package.json and repository structure. React, ASP.NET Core, PostgreSQL, Flutter, FastAPI/LangGraph. Deterministic rule-based workflows; no hosted LLM or statutory grid certification. |
| [AI-Powered Travel Planning System](https://github.com/Thiloka-Jeewani/AI-Powered-Travel-Planning-System-Lanka-Travels-) | Preserved | Preserved. README and file tree contain Flask ML service, trained model files, datasets, backend and frontend. Exact repository replaces the old profile-only link. Personal contribution follows README. |
| [MOVIE-SENTIBOT](https://github.com/Thiloka-Jeewani/MOVIE-SENTIBOT-NLP-Based-Solution-for-Movie-Review-Sentiment-Analysis) | Preserved | Preserved. Root README file is empty; recursive tree contains model notebooks, preprocessing notebooks, pipeline and confusion-matrix results. No numerical accuracy asserted. |
| [Fresh Wash Laundry Management System](https://github.com/Thiloka-Jeewani/Web-based_Laundry-management-system) | Preserved | Preserved. README and Spring Boot controller/React source tree. Stack corrected to include React; unsupported real-time and pickup-scheduling claims omitted. |
| [Vehicle Rental Mobile Application](https://github.com/Thiloka-Jeewani/Car-Rental-System---Vehicle-Management-module) | Preserved | Preserved under its original gallery title; DriveMate name included in description. README, frontend/package.json, backend/controllers and models. Stack corrected to React Native/Expo. Distance calculations explicitly simulated. Contribution limited to vehicle/admin module. |
| [LuxStay Hotel Booking System](https://github.com/Thiloka-Jeewani/HotelRio---The-Hotel-room-reservation-system-project) | Preserved | Preserved. README identifies LuxStay/HotelRio and user-management contribution; source contains JSP/Servlet structure. Exact HotelRio repository linked. File-based storage and documented authentication features replace unsupported broad booking claims. |
| [Smart Greenhouse System](https://github.com/Thiloka-Jeewani/IoT-Based-Smart-Greenhouse-System) | Preserved | Preserved. README, architecture image and hardware photographs. Original Arduino/DHT11/C++ badges retained from local portfolio; exact controller model and firmware were not independently confirmed by a code file. Description limited to an academic prototype. |

The original six project cards are archived in `PROJECTS_ORIGINAL.html` so the previous descriptions and technology badges remain reviewable. Broad or unsubstantiated claims (including “high accuracy” and real-time laundry updates) were corrected rather than repeated as verified facts. No project was removed. Education, achievements, certificates and personal information remain intact.

## Other repositories and candidates

- `campuseats-task-tracker`: small SEF lab with `src/tasks.js`; omitted from selected substantial projects.
- `campuseats-task-tracker-main`: nested React/Vite starter; `campuseats-web/src/App.jsx` is the starter counter.
- `campuseats-web-sef-lab11`: `src/App.jsx` is the starter counter, with minimal ASP.NET API scaffolding. No complete CampusEats application verified.
- `test2`: frontend starter counter and backend package files. No substantial project verified.
- `Thiloka-Jeewani`: profile README; source of candidate links, not a software project.
- `Thiloka-portfolio`: this portfolio; not added as a duplicate self-reference.
- [Telecom Customer Churn Prediction](https://github.com/Thiloka-Jeewani/IT3091_Telecom_Churn_Team_2026-AI-17): linked from the profile, but repository access returned 404 and it was absent from the public listing. Could be private, renamed or unavailable. No stack, features or results were invented. Supply an accessible repository to add it.

## Preserved hackathons

- [NeuroForge](https://github.com/BinaliAssalaarachchi/NeuroForge-Codefest2026): repository reachable; original event and contribution text preserved without adding new claims.
- [ShareBite LK](https://github.com/ThisulHerath/ShareBite-LK): repository reachable; original event and contribution text preserved. [Live demo](https://sharebitelk-sjkv.vercel.app/) returned 200 and rendered the ShareBite landing page in a browser.

## Demos

[Smart Solar](https://smart-solar-installation-grid-compl-ten.vercel.app/) returned 200 and rendered its matching public homepage in a browser. Demo verification covers public page availability and identity, not authenticated workflows or backend availability. No demo URL was found and verified for the remaining catalog projects.

## Image provenance and limitations

- Travel Planner, Fresh Wash and LuxStay: existing local portfolio screenshots retained and optimized; no new claim of screenshot provenance beyond supplied assets.
- DriveMate: README’s Home Screen attachment `0c6f9f96-0d8e-4c24-befd-85cf6b29d5ae`.
- Greenhouse: README hardware photograph attachment `2061be98-762a-41c2-b4e3-d06e559e2d7e`.
- MOVIE-SENTIBOT: repository `EDA_Visualization/confusion_matrix.png`; shown as results, not an application UI.
- Smart Solar: screenshot of the verified public demo homepage, captured during this audit.
- Bus Tracker: no suitable screenshot in repository. Uses a deliberately labeled project graphic, not a fabricated UI screenshot.
- Profile: existing `assets/profile.png`, optimized to WebP. Original full-size files and certificates retained.

WebP preview conversion reduced the seven original/new raster preview inputs from roughly 6.4 MB to 0.28 MB, without altering original files. Gallery images are lazy loaded and decoded asynchronously; the hero portrait is prioritized.

## Local asset placement update

User-supplied Bus.lk map screenshot is now used for the Bus Tracker cover and full-size gallery. User-supplied ShareBite homepage screenshot is displayed in the existing ShareBite hackathon card with a full-size gallery. Both have optimized WebP copies beside their originals. `assets/projects/solar-live.png` contains the same Bus.lk screenshot despite its filename; it is not used for Solar. The verified Solar homepage preview was restored from the earlier browser capture. The hero uses the existing Gemini-generated illustration, with a subtle CSS float disabled under reduced motion; navigation and About retain the photographic portrait. Additional Solar dashboard/workflow and ShareBite About/CTA screenshots are not yet present as local assets.

## Pac-Man Search Algorithms addition

User-supplied team repository: https://github.com/ThisulHerath/IT3012-pacman-search-group-17 . Verified through GitHub REST API, README, recursive tree and `main/search.py`. Main contains DFS, BFS, Uniform-Cost Search and A* implementations. README describes the older member1-dfs-bfs branch with only Q1/Q2 complete; no autograder grade or performance claim is shown in this portfolio. Python source includes graph-search utilities and Tkinter graphical display, text mode, maze layouts and supplied autograder test cases. Personal contribution is unspecified; this is presented as collaborative coursework, with UC Berkeley framework attribution. No screenshot or live web demo was verified; the preview is a clearly labeled local SVG project graphic. Gallery now contains nine projects.
