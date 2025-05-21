# Investment Calculator


## Overview

Investment Calculator is a React-based web application that helps users plan their financial investments. Built as a solo project to strengthen my React fundamentals, this calculator allows users to visualize how their investments might grow over time based on different parameters.

## Features

- Calculate compound interest over time
- Visualize investment growth with detailed yearly breakdowns
- Adjustable parameters:
  - Initial investment amount
  - Annual contribution
  - Expected return rate
  - Investment duration
- Real-time calculation updates
- Responsive design that works on various screen sizes

## Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3
- Intl API for currency formatting

## What I Learned

Through this project, I strengthened my understanding of:

- React hooks (useState)
- Component architecture and organization
- Props and state management
- Handling form inputs and validation
- JavaScript financial calculations
- Conditional rendering
- React event handling

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/investment-calculator.git
   ```

2. Navigate to the project directory:
   ```
   cd investment-calculator
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173/`

## Usage

1. Enter your initial investment amount
2. Specify your planned annual investment
3. Input your expected return percentage
4. Set the duration of your investment in years
5. View the detailed breakdown of your investment growth

## Project Structure

```
investment-calculator/
├── src/
│   ├── assets/
│   │   └── investment-calculator-logo.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── UserInput.jsx
│   │   └── Results.jsx
│   ├── util/
│   │   └── investment.js
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── public/
│   └── index.html
└── package.json
```

## Future Improvements I hope ot add !!

- Add ability to save multiple scenarios
- Implement chart visualization for investment growth
- Add inflation adjustment calculations
- Create printable/exportable reports
- Dark/light theme toggle

## License



---

Feel free to ⭐ this repository if you found it useful!
