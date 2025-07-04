Interview Simulation App
A modern, production-ready Angular application that simulates a timed interview experience for candidates. This project demonstrates best practices in Angular development, robust state management, and a clean, user-friendly interface.
Table of Contents

Overview
Features
Project Structure
How It Works
Setup & Installation
Available Commands
Usage Guide
Customization
Contributing
License

Overview
This app simulates a real-world technical interview with a limited number of questions, a countdown timer for each, and strict navigation rules. It is ideal for practicing under pressure or as a base for HR/assessment tools.
Features

4 Random Interview Questions: Pulled from a configurable question set in questions.json.
Timed Responses: Each question is displayed for 10 seconds, followed by a 10-second thinking time with a smooth background color transition.
Single Attempt: The "Take Interview" button can only be clicked once; progress is persisted in localStorage.
No Cheating: Switching tabs or windows terminates the interview permanently.
Route Guards: Users cannot revisit or skip screens after completion.
Final Screen: Shows completion status ("You have successfully completed the interview").
Responsive UI: Works on desktop and mobile devices.
Extensible: Easily add more questions or customize logic.

Project Structure
interview-simulation-app/
├── angular.json
├── package.json
├── tsconfig*.json
├── src/
│   ├── app/
│   │   ├── app.component.ts        # Root component
│   │   ├── app.routes.ts           # Route definitions
│   │   ├── components/
│   │   │   ├── home/               # Home screen (start button)
│   │   │   ├── interview/          # Main interview logic and UI
│   │   │   └── final/              # Final (success) screen
│   │   ├── guards/
│   │   │   └── interview.guard.ts  # Route protection logic
│   │   ├── services/
│   │   │   └── question.service.ts # Loads and randomizes questions
│   ├── assets/
│   │   └── questions.json          # Question data source
│   ├── index.html
│   ├── main.ts
│   └── styles.css
└── ...

How It Works
Home Screen

User sees a single "Take Interview" button.
Once clicked, the interview starts, and the button is disabled (persisted via localStorage).

Interview Flow

Four random questions are shown, one at a time, fetched from questions.json.
Each question is displayed for 10 seconds, followed by a 10-second "thinking time" with a white-to-blue background transition.
If the user switches tabs/windows or tries to close the window, the interview terminates immediately, redirecting to the final screen.
Questions are fetched one at a time using a service, ensuring randomization without repetition.

Final Screen

Displays "You have successfully completed the interview."
Shows basic completion stats (e.g., "Questions Answered: 4/4").
Users cannot retake the interview unless localStorage is cleared.

Navigation Protection

Route guards prevent users from accessing the home or interview screens after completion; they are redirected to the final screen.

Setup & Installation
Prerequisites

Node.js (v18+ recommended)
Angular CLI (v19+ recommended)

Installation
# Clone the repository
git clone https://github.com/yourusername/interview-simulation-app.git
cd interview-simulation-app

# Install dependencies
npm install

Available Commands



Command
Description



npm start
Run the app in development mode


npm run build
Build the app for production


npm test
Run unit tests


ng serve
Alias for npm start


ng build
Alias for npm run build


Usage Guide

Start the App:
npm start

The app will be available at http://localhost:4200.

Take the Interview:

Click "Take Interview" (only clickable once).
View each question for 10 seconds, followed by 10 seconds of thinking time.
Do not switch tabs/windows, or the interview will terminate.


View Results:

After answering all 4 questions, view the completion message on the final screen.
You cannot retake the interview unless you clear your browser's localStorage.



Customization

Adding/Editing Questions:
Edit src/assets/questions.json to add, remove, or modify interview questions.


Changing Timer:
Adjust the countdown logic in interview.component.ts.


UI/UX:
Modify styles in src/styles.css or component-specific CSS files.



Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
License
MIT
Developed with Angular 19+ and ❤️ by Chouaib Saad.
