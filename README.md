# Interview Simulation App

A sophisticated Angular application that simulates a timed video interview experience with advanced fraud detection and security features.

## 🚀 Features

### Core Functionality
- **One-time Interview**: Button can only be clicked once, persisted across browser sessions
- **Full-screen Mode**: Automatically enters full-screen during interview
- **Timed Questions**: 10-second timer for each question with visual countdown
- **Thinking Phases**: 10-second breaks between questions with smooth color transitions
- **Random Question Selection**: 4 questions randomly selected from JSON data
- **Progress Tracking**: Visual progress bar and question counter

### Security & Fraud Detection
- **Tab Switch Detection**: Automatically terminates interview if user switches tabs
- **Window Focus Monitoring**: Detects when user leaves the interview window
- **Fraud Reporting**: Flags and reports suspicious behavior
- **Route Protection**: Guards prevent unauthorized navigation

### UI/UX Features
- **Smooth Animations**: Fade-in effects and color transitions
- **Responsive Design**: Mobile-friendly interface
- **Professional Styling**: Modern gradient backgrounds and animations
- **Visual Feedback**: Timer warnings and state-based styling
- **Completion Statistics**: Detailed results with fraud detection status

## 🛠️ Technology Stack

- **Framework**: Angular 19.x
- **Language**: TypeScript
- **Styling**: CSS3 with animations and transitions
- **State Management**: localStorage for persistence
- **HTTP Client**: Angular HttpClient for JSON data loading
- **Routing**: Angular Router with guards
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Landing page component
│   │   ├── interview/         # Main interview component
│   │   └── final/            # Results/completion component
│   ├── guards/
│   │   └── interview.guard.ts # Route protection
│   ├── services/
│   │   └── question.service.ts # Question data management
│   ├── app.component.ts       # Root component
│   └── app.routes.ts         # Application routing
├── assets/
│   ├── questions.json        # Question database
│   └── background.jpg        # Background image
└── index.html               # Main HTML file
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chouaib-saad/Interview-Simulation-App.git
   cd Interview-Simulation-App
   ```

2. **Switch to the feature branch**
   ```bash
   git checkout interview-application-feature
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   ng serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## 🎮 Usage

### Starting an Interview
1. Click the "Take Interview" button on the home page
2. The application automatically enters full-screen mode
3. Answer 4 randomly selected questions (10 seconds each)
4. Stay focused - switching tabs will terminate the interview
5. View your results on the completion screen

### Interview Flow
```
Home Page → Full-screen Interview → Questions (10s each) → Thinking Time (10s) → Final Results
```

### Fraud Detection
The application monitors for:
- Tab switching
- Window focus loss
- Attempt to close the browser
- Manual navigation attempts

## 📊 Features in Detail

### localStorage Persistence
- `interviewStarted`: Tracks if interview has begun
- `interviewCompleted`: Marks interview completion
- `fraudDetected`: Flags suspicious behavior
- `interviewStats`: Stores completion statistics

### Route Guards
- Prevents access to interview page without starting
- Blocks manual navigation during interview
- Redirects completed users to results page

### Question Management
- JSON-based question storage
- Random selection algorithm
- Error handling for loading failures

## 🎨 Design Features

### Color Schemes
- **Question Phase**: White to light gray gradient
- **Thinking Phase**: Blue gradient background
- **Warning States**: Red timer when ≤3 seconds
- **Fraud Detection**: Red-themed error states

### Animations
- Smooth background color transitions (0.8s)
- Fade-in effects for content
- Hover animations on interactive elements
- Progress bar animations

## 🔧 Configuration

### Question Format
Questions are stored in `src/assets/questions.json`:
```json
{
  "status": "SUCCESS",
  "data": {
    "questions": [
      {
        "id": 1,
        "question": "Tell me about yourself."
      }
    ]
  }
}
```

### Timer Settings
- Question timer: 10 seconds
- Thinking timer: 10 seconds
- Warning threshold: ≤3 seconds

## 🚀 Build & Deployment

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --prod
```

### Deployment
The application can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📱 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Community for best practices and patterns
- Modern web standards for full-screen and focus APIs

## 📞 Contact

**Chouaib Saad**
- GitHub: [@chouaib-saad](https://github.com/chouaib-saad)
- Project Link: [https://github.com/chouaib-saad/Interview-Simulation-App](https://github.com/chouaib-saad/Interview-Simulation-App)
- Mail: choiyebsaad2000@gmail.com


---

*Built using Angular and TypeScript*
