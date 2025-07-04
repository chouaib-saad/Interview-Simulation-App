# Interview Simulation App

A modern, production-ready Angular application that simulates a timed interview experience for candidates. This project demonstrates best practices in Angular development, robust state management, and a clean, user-friendly interface.

---

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Setup & Installation](#setup--installation)
- [Available Commands](#available-commands)
- [Usage Guide](#usage-guide)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

##  Overview

This app simulates a real-world technical interview with a limited number of questions, a countdown timer for each, and strict navigation rules. It is ideal for practicing under pressure or as a base for HR/assessment tools.

---

##  Features

- **4 Random Interview Questions**: Pulled from a configurable `questions.json`.
- **Timed Responses**: Each question is displayed for 10 seconds, followed by 10 seconds of thinking time with a smooth background color transition.
- **Single Attempt**: The "Take Interview" button can only be clicked once; progress is persisted in `localStorage`.
- **No Cheating**: Switching tabs or windows terminates the interview permanently.
- **Route Guards**: Users cannot revisit or skip screens after completion.
- **Final Screen**: Shows completion status ("You have successfully completed the interview").
- **Responsive UI**: Works on desktop and mobile devices.
- **Extensible**: Easily add more questions or customize logic.

---

##  Project Structure


<pre>
interview-simulation-app/
├── angular.json
├── package.json
├── tsconfig*.json
├── src/
│ ├── app/
│ │ ├── app.component.ts # Root component
│ │ ├── app.routes.ts # Route definitions
│ │ ├── components/
│ │ │ ├── home/ # Home screen (start button)
│ │ │ ├── interview/ # Main interview logic and UI
│ │ │ └── final/ # Final (success) screen
│ │ ├── guards/
│ │ │ └── interview.guard.ts # Route protection logic
│ │ ├── services/
│ │ │ └── question.service.ts # Loads and randomizes questions
│ ├── assets/
│ │ └── questions.json # Question data source
│ ├── index.html
│ ├── main.ts
│ └── styles.css
└── ...
</pre>


# Interview Simulation App

A modern, production-ready Angular application that simulates a timed interview experience for candidates. This project demonstrates best practices in Angular development, robust state management, and a clean, user-friendly interface.

---

##  Table of Contents

- [How It Works](#-how-it-works)
- [Setup & Installation](#-setup--installation)
- [Available Commands](#-available-commands)
- [Usage Guide](#-usage-guide)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

---

##  How It Works

### Home Screen

- User sees a single **"Take Interview"** button.
- Once clicked, the interview starts, and the button is disabled (persisted via `localStorage`).

### Interview Flow

- 4 random questions shown one at a time, from `questions.json`.
- Each question appears for **10 seconds**, followed by **10 seconds** of "thinking time" with a background transition.
- Switching tabs/windows or trying to close the tab ends the interview immediately and redirects to the final screen.
- Questions are fetched via a service with no repetition.

### Final Screen

- Displays: "You have successfully completed the interview."
- Shows basic completion stats (e.g., `Questions Answered: 4/4`).
- Cannot retake the interview unless `localStorage` is cleared.

### Navigation Protection

- Route guards block access to the home or interview screens post-completion.
- Users are redirected to the final screen if they try to bypass.

---

##  Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (v19+ recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/interview-simulation-app.git
cd interview-simulation-app

# Install dependencies
npm install
```

<pre>

| Command         | Description                     |
| --------------- | ------------------------------- |
| 'npm start'     | Run the app in development mode |
| 'npm run build' | Build the app for production    |
| 'npm test'      | Run unit tests                  |
| 'ng serve'      | Alias for 'npm start'           |
| 'ng build'      | Alias for 'npm run build'       |

  
</pre>


````markdown
#  Usage Guide

## Start the App

```bash
npm start
````

The app will be available at: [http://localhost:4200](http://localhost:4200)

---

##  Take the Interview

* Click **"Take Interview"** (only clickable once).
* View each question for **10 seconds**, then **10 seconds** of thinking time.
* **Do not switch tabs/windows** — doing so will terminate the interview.

---

##  View Results

* After answering all 4 questions, you’ll see the final message.
* You **cannot** retake the interview unless you clear your browser's `localStorage`.

---

# 🛠Customization

##  Add/Edit Questions

```bash
src/assets/questions.json
```

---

##  Change Timer

```bash
src/app/components/interview/interview.component.ts
```

---

##  Style the App

```bash
src/styles.css
```

Or modify component-specific `.css` files as needed.

---

#  Contributing

Pull requests are welcome!

For major changes, please open an issue first to discuss what you would like to change.

---

# License

Developed with Angular 19+ by **Chouaib Saad**.

---
