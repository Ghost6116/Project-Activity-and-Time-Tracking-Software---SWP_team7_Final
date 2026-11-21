# Project Activity and Time Tracking Software - SWP_team7_Final



## Team-07 
# Roles and Responsibilities

- Sai Venkat Athmakur- Project Manager
- Ammar Haider- Backend developer - Database manager
- Md Tareq Hasan- Frontend integration
- Muhammad Aaliyan- Frontend integration
- Shams Khan- Frontend developer
- Suresh Dangeti- Frontend developer
- Anshkumar Anilbhai Gogadani- UI/UX Designer
- Shashank Matta- UI/UX Designer



## Read Wiki Pages in this gitlab for extra information about our initial plans and milestones - (https://git.oth-aw.de/d796/project-activity-and-time-tracking-software-swp_team7_final/-/wikis/pages)

## ABSTRACT
The Project Activity and Time Tracking Software is a comprehensive web-based solution designed to enhance project management, activity logging, and time analysis for teams and individuals. This system enables users to create projects log activities under hierarchical categories. It incorporates features such as real-time time tracking, project diaries for documenting objectives, challenges, and solutions, and robust role-based access control for Admins, Project Managers, and Team Members.
The software provides a user-friendly and responsive interface for seamless access across desktop, tablet powered by a scalable back-end architecture and a well-optimized database. Interactive dashboards and advanced visualizations allow users to analyze time data by categories, iterations, and team members, aiding in productivity assessment and decision-making. Additional features include data export to PDF and CSV formats and a secure authentication system.
This system leverages modern technologies such as React.js for the front-end, Spring Boot for the back-end, and MySQL for the database. With its modular design and scalability, the software is poised to support future enhancements such as mobile apps, machine learning-driven analytics, and third-party integrations. The application delivers an efficient, secure, and user-centric solution for streamlined project management and productivity tracking.

## INTRODUCTION

Effective project management and time tracking are critical for the success of any team or individual working on complex tasks. The Project Activity and Time Tracking Software addresses these needs by providing a robust, web-based solution that streamlines project organization, activity logging, and time analysis. By allowing users to create projects, categorize activities hierarchically, and monitor progress in real-time, the software fosters better planning and execution of tasks.
This application combines a user-friendly and responsive interface with a scalable back-end architecture and optimized database design to deliver an efficient and seamless experience across desktop and tablet devices. Key features include project diaries for capturing objectives, challenges, and solutions, as well as role-based access control to ensure secure and structured collaboration among Admins, Project Managers, and Team Members. The system also integrates advanced dashboards and visualizations, enabling users to gain insights into productivity through time data analysis by categories, iterations, and contributors.
Built on modern technologies such as React.js for the front-end, Spring Boot for the back-end, and MySQL for data storage, the software ensures reliability, scalability, and extensibility. Additional functionalities, such as data export to PDF and CSV formats and secure authentication, make it a comprehensive tool for diverse project management needs. With its modular design, the platform is prepared for future enhancements, including mobile applications, machine learning-based analytics, and third-party integrations, ensuring its long-term relevance and adaptability.


## TECHNOLOGY STACK

The Project Activity and Time Tracking Software leverages a modern, scalable technology stack to ensure high performance, security, and adaptability. Each layer of the stack is carefully chosen to meet the functional and non-functional requirements of the project.


## Front-End Technology

#1. Framework: React.js
- Chosen for its component-based architecture, which promotes code reusability and simplifies UI development.
- Supports a dynamic, responsive interface that ensures seamless user experiences across desktop and tablet devices.
- Utilizes tools like React Router for navigation and Context API/Redux for state management.

#2. Styling Frameworks:
- Material-UI or Bootstrap: To provide pre-designed, customizable components for consistent and professional-looking layouts.

#3. Key Features Implemented:
- Activity logging forms with validation.
- Interactive dashboards for time analysis and project summaries.
- Admin panel for user and project management.
- Responsive design with breakpoints for different screen sizes.

## Back-End Technology

#1. Framework: Spring Boot (Java)
- Provides a robust and scalable back-end architecture for developing RESTful APIs.
- Simplifies dependency management with built-in tools like Spring Data JPA for database interactions.
- Includes Spring Security for implementing role-based access control (RBAC) and secure authentication mechanisms (e.g., JWT or session-based).

#2. RESTful API Design:
- Endpoints for user authentication (/api/auth), project management (/api/projects), iteration tracking (/api/projects/:id/iterations), and activity logging (/api/iterations/:id/activities).
- Middleware for validation and request filtering.

#3. Key Features Implemented:
- Role-based permissions for Admin, Project Manager, and Team Member roles.
- Secure session management to protect sensitive operations.
- Optimized APIs for data-intensive operations like time visualization.

## Database Technology

#1. Database Management System: MySQL
- A relational database selected for its ability to handle structured data with relationships efficiently.
- Provides ACID compliance to ensure data integrity during transactions.
- Supports indexing for faster query performance on frequently accessed data fields.

#2. Schema Design:
- Users Table: Stores user credentials, roles, and profile information.
- Projects Table: Tracks project details, including name, description, and assigned team members.
- Iterations Table: Represents project milestones or sprints with start/end dates.
- Activities Table: Logs user activities under hierarchical categories and stores time spent.
- Diary Entries Table: Captures objectives, challenges, and solutions associated with specific activities.

#3. Optimization Techniques:
- Indexing for primary and foreign key columns to speed up join queries.
- Query optimization for aggregating large datasets during time analysis.

## Data Visualization Technology

#1. Charting Libraries:
- Chart.js: Used for rendering interactive pie charts, bar graphs, and line graphs in dashboards.
- Enables users to visualize time data by category, iteration, or team member.

#Key Features:
- Customizable charts with filters (e.g., by date range, project, or user).
- Dynamic rendering based on user interactions with the dashboard.

## Export and Reporting Tools

#PDF Generation: iText 
- Allows generating detailed reports in PDF format, including time analysis summaries and activity logs.

## Security Technology

##Authentication and Authorization:

#Spring Security: 
- Role-based access control to restrict features based on user roles (Admin, Project Manager, Team Member).
- Password hashing using BCrypt for secure storage.
- JWT (JSON Web Tokens) for secure, stateless session management.

#Network Security:
- HTTPS for encrypting data in transit (recommended for production deployment).


## Deployment and Version Control

#Version Control: GitLab
- Central repository for source code, allowing for feature branching, pull requests, and code reviews.
- GitLab CI/CD pipelines for automating build, test, and deployment processes.

#Deployment Environment:
- Deployed on a local development server for testing.
- Prepared for production deployment on platforms like AWS EC2, Docker, or Heroku.

## Development Tools

#Integrated Development Environment (IDE):
- IntelliJ IDEA (for Spring Boot)
- Visual Studio Code (for React.js development)

#Testing Tools:
- Postman: For manual testing of RESTful APIs.
- JUnit: For back-end unit tests.
- Selenium or Cypress: For front-end end-to-end testing.

## Future Enhancements

#Mobile App Development:
- Use Flutter or React Native for creating cross-platform mobile applications.

#Advanced Analytics:
- Integrate machine learning models to predict project delays or recommend resource optimizations.

#Third-Party Integrations:
- Connect with Slack or Microsoft Teams for real-time notifications.
- Single Sign-On (SSO) integration with Google or Microsoft accounts.

## ACCOMPLISHMENTS (RESULTS)

- The Project Activity and Time Tracking Software successfully met its objectives and achieved several significant milestones during its development. Below is a detailed account of the accomplishments categorized by the project’s key components:

#1. Project Management

- Successfully planned and executed the project roadmap, adhering to the timeline and milestones even though we have faced some challenges.
- Facilitated seamless collaboration between different teams (UI/UX, front-end, back-end, database, and QA).
- Effectively mitigated risks, including delays in back-end API readiness and database integration challenges, ensuring the project remained on track.
- Maintained comprehensive project documentation, including meeting notes, task allocation records, and progress reports, for efficient tracking and communication.

#2. UI/UX Design

- Delivered intuitive and user-friendly wireframes and high-fidelity mockups for all major modules: 
- Project dashboard
- Activity logging page
- Admin panel
- Time visualization and reporting screens
- Reports download page
- Established a consistent and responsive design system, ensuring the application’s usability across desktop and tablet devices.
- Conducted user flow testing, leading to refinements that improved overall navigation and accessibility.
- Developed a visually appealing interface that aligns with modern design standards and enhances user satisfaction.

#3. Front-End Development

- Implemented a fully functional and interactive user interface using React.js: 
- Designed and built forms for activity logging, project creation, and iteration management.
- Developed dynamic dashboards displaying real-time data for projects, activities, and time analysis.
- Delivered a responsive layout optimized for desktop and tablet devices.
- Integrated the front-end with back-end APIs to enable seamless data retrieval and updates.
- Built a robust admin panel for user management and role assignment, ensuring role-based access to features.

#4. Back-End Development

- Designed and implemented a scalable and secure back-end architecture using Spring Boot: 
- Created RESTful APIs for user authentication, project management, activity logging, and diary entries.
- Integrated role-based access control, ensuring secure and restricted functionality based on user roles (Admin, Project Manager, Team Member).
- Optimized database interactions to reduce query response times and improve performance for large datasets.
- Successfully implemented advanced features, including: 
- Notifications for inactivity alerts and approaching deadlines.
- Export functionality for generating detailed reports in PDF and CSV formats.

#5. Database Development

- Designed a relational database schema using MySQL, ensuring data integrity and scalability: 
- Structured tables for users, projects, iterations, activities, and diary entries with clear relationships.
- Indexed frequently accessed columns to optimize query performance.
- Implemented efficient queries for generating analytics and supporting export features.
- Configured automated daily backups to prevent data loss and maintain reliability.

#6. Quality Assurance

- Conducted comprehensive testing across all modules: 
- Unit Testing: Validated back-end API functionality and business logic.
- Integration Testing: Verified seamless communication between front-end and back-end.
- System Testing: Ensured the application’s responsiveness, usability, and overall performance.
- Security Testing: Identified and resolved vulnerabilities, including SQL injection and XSS attacks.
- Performed load testing to validate the system’s scalability under concurrent user activity.
- Maintained a detailed defect log, ensuring all bugs were resolved before final deployment.

#7. Key Functional Achievements

- Role-Based Access Control: Ensured secure access and functionality segregation for Admins, Project Managers, and Team Members.
- Activity Logging: Delivered a real-time activity tracking system with options for manual entry and hierarchical categorization.
- Time Analysis and Visualization: 
- Built interactive dashboards using Chart.js, enabling users to analyze time spent by project, iteration, or activity category.
- Project Diaries: Implemented reflective diaries for capturing objectives, challenges, and solutions linked to specific activities.
- Export Features: Enabled users to export activity logs and time analysis reports in CSV and PDF formats for easy sharing and documentation.

#8. Cross-Functional Integration

- Achieved seamless integration between the front-end, back-end, and database layers, ensuring smooth data flow and real-time updates.
- Successfully demonstrated the system’s capabilities in a deployed testing environment, providing end-to-end functionality validation.

#9. Scalability and Extensibility

- Designed a modular and scalable architecture to accommodate future enhancements, such as: 
- Mobile application development.
- Integration with third-party tools like Slack and Microsoft Teams.
- Advanced analytics powered by machine learning.
- Prepared the system for production deployment on cloud platforms such as AWS or Heroku.

#10. Overall Success

- Delivered a functional, secure, and user-centric solution that meets the core objectives of enhancing project management, activity tracking, and time analysis.
- Received positive feedback from stakeholders during user acceptance testing (UAT), highlighting the application’s usability, responsiveness, and feature set.

## CHALLENGES 

- The development and implementation of the Project Activity and Time Tracking Software posed several challenges across various phases. These challenges were addressed through effective team collaboration, problem-solving, and iteration. Below is a detailed breakdown of the key challenges faced:

#1. Planning and Coordination

- Challenge: Aligning all teams (UI/UX, front-end, back-end, database, QA) to meet project milestones.
- Impact: Miscommunication or delays in one team affected dependent tasks in other teams.
- Solution: 
- Implemented weekly progress meetings to ensure transparency and coordination.
- Used tools like Jira and Slack for task tracking and communication.

#2. User Experience Design

- Challenge: Balancing stakeholder requirements with usability best practices.
- Impact: Conflicting inputs from stakeholders occasionally led to design revisions.
- Solution: 
- Conducted user testing to validate design decisions and gather feedback.
- Focused on delivering an intuitive and consistent user flow.

#3. Front-End Development

- Challenge 1: Ensuring responsiveness across multiple devices (desktop, tablet, mobile).
- Impact: Variations in screen sizes and resolutions caused layout inconsistencies.
- Solution: 
- Utilized CSS frameworks like Material-UI and Bootstrap.
- Implemented media queries and tested designs on real devices.

- Challenge 2: State management for dynamic user interactions.
- Impact: Maintaining a consistent application state when switching between components was complex.
- Solution: 
- Used Redux (or Context API) for centralized state management.

#4. Back-End Development

- Challenge 1: API performance for complex queries.
- Impact: Time analysis and visualization modules required aggregating large datasets, leading to delays in API responses.
- Solution: 
- Optimized database queries and implemented indexing for frequently accessed fields.
- Used pagination for APIs returning large datasets.
- Challenge 2: Implementing secure role-based access control (RBAC).
- Impact: Ensuring proper permissions for Admins, Project Managers, and Team Members without compromising security.
- Solution: 
- Used Spring Security (or middleware in Node.js/Django) for enforcing RBAC.
- Conducted thorough testing of edge cases for unauthorized access.

#5. Database Design
- Challenge: Designing a schema that supports hierarchical activity categories and relationships between projects, iterations, and activities.
- Impact: Complexity in maintaining data integrity while allowing flexible querying.
- Solution: 
- Normalized database tables and ensured proper foreign key constraints.
- Worked closely with back-end developers to align API requirements with database design.

#6. Time Analysis and Visualization
- Challenge: Creating dynamic, interactive charts for time tracking and productivity insights.
- Impact: Aggregating and filtering data in real-time for different visualizations increased computational complexity.
- Solution: 
- Used Chart.js for customizable charts and optimized data fetching for smooth rendering.
- Precomputed summaries for commonly accessed datasets to reduce processing time.

#7. Export Functionality
- Challenge: Formatting exported data for PDF and CSV outputs while ensuring usability.
- Impact: Large datasets caused performance bottlenecks during export generation.
- Solution: 
- Used libraries like iText (PDF) and Apache Commons CSV for efficient data processing.
- Streamlined export logic to handle data in smaller chunks.

#8. Security
- Challenge 1: Protecting sensitive user data during authentication and API interactions.
- Impact: Vulnerabilities like weak password encryption or insecure API endpoints could compromise the system.
- Solution: 
- Implemented BCrypt for password hashing.
- Enforced HTTPS for data transmission (in production environments).
- Challenge 2: Preventing unauthorized access and injection attacks.
- Impact: Potential breaches could expose sensitive information.
- Solution: 
- Conducted security testing for SQL injection, cross-site scripting (XSS), and broken access controls.

#9. Integration Testing
- Challenge: Ensuring smooth integration between front-end, back-end, and database components.
- Impact: Mismatched data structures or API responses caused errors during early integration.
- Solution: 
- Conducted regular integration tests during development to identify and resolve mismatches.
- Used tools like Postman for manual API testing and Selenium for end-to-end testing.

#10. Testing and Quality Assurance
- Challenge: Covering all edge cases for both functional and non-functional requirements.
- Impact: Undetected bugs during initial testing phases caused rework.
- Solution: 
- Expanded test coverage to include more edge cases.
- Automated repetitive test scenarios using Selenium and JUnit.

#11. Team Collaboration
- Challenge: Managing dependencies between teams (e.g., back-end APIs needed for front-end development).
- Impact: Delays in one team’s deliverables affected others.
- Solution: 
- Established clear milestones with buffer times for dependent tasks.
- Used GitLab issue tracking and feature branches for better coordination.


## FUTURE ENHANCEMENTS

- These following enhancements will expand the software’s capabilities and make it more versatile and user-friendly for diverse teams and projects.

#1. Mobile Application Development:

- Build native or cross-platform mobile apps using React Native or Flutter to enable on-the-go activity logging and project management.

#2. Advanced Analytics:
- Integrate machine learning to predict project delays, resource allocation needs, and time optimization suggestions.

#3. Third-Party Integrations:
- Connect with tools like Slack, Microsoft Teams, and Google Calendar for real-time notifications and task synchronization.

#4. Enhanced Export Options:
- Add support for exporting reports in XLSX format and enable scheduled automated report generation.

#5. Multi-Factor Authentication (MFA):
- Strengthen security by implementing MFA for user login.

#6. Customizable Dashboards:
- Allow users to personalize dashboards with widgets for specific metrics and reports.
 
#7. Offline Mode:
- Add offline functionality to allow users to log activities without internet connectivity, syncing data when back online.


## CONCLUSION

 The Project Activity and Time Tracking Software successfully addresses the critical needs of project management, activity logging, and time analysis through a comprehensive, user-friendly platform. By integrating features such as real-time tracking, project diaries, role-based access control, and advanced visualizations, the software provides a robust solution for teams and individuals to enhance productivity and streamline workflows.
 The project’s modular architecture, built with modern technologies like React.js, Spring Boot, and MySQL, ensures scalability, reliability, and security. Rigorous testing and thoughtful design have resulted in a seamless user experience across devices, while features like data export and notifications add practical value.
 The collaborative effort across development, design, and testing teams has resulted in a system that delivers efficiency, usability, and adaptability, setting a strong foundation for continuous growth and improvement.





## ADD YOUR FILES
```
cd existing_repo
git remote add origin https://git.oth-aw.de/d796/project-activity-and-time-tracking-software-swp_team7_final.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.oth-aw.de/d796/project-activity-and-time-tracking-software-swp_team7_final/-/settings/integrations)



