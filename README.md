# ⛅ WeatherWise: Global Weather Explorer

![WeatherWise App Screenshot](./screen-shot.webp)

A sleek, modern weather application built with React and TypeScript that provides real-time weather information with a beautiful, intuitive interface. WeatherWise offers current conditions, detailed forecasts, and a clean, responsive design that works on any device.

## ✨ Features

- **Current Weather**: Real-time temperature, conditions, and key metrics
- **Detailed Forecast**: Hourly and daily weather predictions
- **Location Search**: Find weather for any city worldwide
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, minimalist interface with smooth animations
- **Weather Metrics**:
  - Temperature (Feels Like)
  - Wind Speed & Direction
  - Humidity Levels
  - UV Index
  - Visibility
  - Air Quality
  - Precipitation
  - Pressure

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weatherwise.git
   cd weatherwise
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   REACT_APP_WEATHER_API_KEY=your_weather_api_key
   REACT_APP_GEO_API_KEY=your_geo_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 🛠️ Built With

- React 18+
- TypeScript
- Redux Toolkit
- React Icons
- Axios
- Styled Components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons by [Lucide Icons](https://lucide.dev/)
- Desktop UI Design by [Linur](https://dribbble.com/shots/23556592-Weather-Forecasting-Tablet-App-Design)

## 🌦️ Weather Classification System

Our weather classification system categorizes conditions into three levels based on health and safety impact:

### 1. Good (Safe Conditions)
- **Temperature**: 10°C to 25°C (Comfortable range)
- **Air Quality**: us-epa-index 1-3 (Excellent to Good)
- **Wind**: 
  - Speed: ≤ 20 kph (Gentle breeze)
  - Gusts: ≤ 30 kph (Mild gusts)
- **Precipitation**: ≤ 2 mm (Light drizzle)
- **Visibility**: ≥ 8 km (Clear conditions)
- **UV Index**: 0 to 2 (Low risk)
- **Humidity**: 30% to 60% (Comfortable)

### 2. Moderate (Caution Advised)
- **Temperature**: 25°C to 32°C or 0°C to 10°C
- **Air Quality**: us-epa-index 4-6 (Moderate to Sensitive)
- **Wind**: 
  - Speed: 20-40 kph (Moderate breeze)
  - Gusts: 30-60 kph (Strong gusts)
- **Precipitation**: 2-10 mm (Light to moderate rain)
- **Visibility**: 4-8 km (Moderate visibility)
- **UV Index**: 3 to 7 (Moderate to High)
- **Humidity**: 60% to 80% (Humid)

### 3. Dangerous (Action Required)
- **Temperature**: > 32°C or < 0°C
- **Air Quality**: us-epa-index 7-10 (Unhealthy to Hazardous)
- **Wind**: 
  - Speed: > 40 kph (Strong winds)
  - Gusts: > 60 kph (Gale force)
- **Precipitation**: > 10 mm (Heavy rain)
- **Visibility**: < 4 km (Poor visibility)
- **UV Index**: 8+ (Very High to Extreme)
- **Humidity**: > 80% (Very humid)

## Priority System

The app prioritizes weather parameters based on their impact and provides specific recommendations:

1. **Health Impact** (Highest Priority)
   - **Feelslike temperature**: Monitor for heat stroke or hypothermia risks
   - **Air quality (us-epa-index)**: Check for respiratory health risks

2. **Physical Hazard** (Medium Priority)
   - **Wind speed (wind_kph)**: Assess for falling objects or structural damage
   - **Gust speed (gust_kph)**: Prepare for sudden strong winds
   - **Precipitation (precip_mm)**: Check for flooding risks

3. **Operational Safety** (Medium Priority)
   - **Visibility (vis_km)**: Monitor for travel safety
   - **Road conditions**: Check for slippery surfaces

4. **Preventable Risk** (Lowest Priority)
   - **UV Index**: Use sunscreen and protective clothing
   - **Humidity**: Stay hydrated and monitor comfort levels

## Additional Features

1. **Real-time Updates**
   - Automatic weather data refresh
   - Live weather condition tracking
   - Real-time alerts for dangerous conditions

2. **Location Services**
   - Current location detection
   - Global city search
   - Recent locations history

3. **Visual Indicators**
   - Color-coded status indicators
   - Animated weather icons
   - Interactive weather charts

4. **User Interface**
   - Dark/Light mode toggle
   - Responsive design
   - Modern blur effects
   - Smooth animations

## Tech Stack

- React 18+
- TypeScript
- Redux Toolkit for state management
- Lucide React for icons
- React Select Async Paginate for search functionality
- CSS with vendor prefixes for cross-browser compatibility

## Tech Stack

- React 18+
- TypeScript
- Redux Toolkit for state management
- Lucide React for icons
- React Select Async Paginate for search functionality
- CSS with vendor prefixes for cross-browser compatibility

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahmed11-coder/React_Weather_App.git
cd React_Weather_App
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your API keys:
```
REACT_APP_GEO_API_KEY=your_geo_api_key
REACT_APP_WEATHER_API_KEY=your_weather_api_key
```

4. Start the development server:
```bash
npm start
```

## Usage

1. Search for a city using the search bar or swipe between 4 continental views
2. View current weather conditions and classification status (Good/Moderate/Dangerous)
3. Switch between dark and light mode using the mode toggle
4. View recent 2 search history
5. Get real-time weather updates automatically
6. Monitor health impact parameters (temperature, air quality)
7. Check physical hazard risks (wind, precipitation)
8. Track operational safety metrics (visibility)
9. Review preventable risks (UV, humidity)

## Project Structure

```
src/
├── assets/
│   └── styles/
├── components/
│   ├── Content/
│   │   ├── WeatherContent/
│   │   └── WeatherChart/
│   └── Header/
│       └── Search/
├── services/
├── store/
├── utils/
└── types/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to your preferred platform:
- **Netlify**: [https://app.netlify.com](https://app.netlify.com)
- **Vercel**: [https://vercel.com](https://vercel.com)
- **GitHub Pages**: [https://pages.github.com](https://pages.github.com)

3. For production deployment:
- Ensure environment variables are set
- Test the application thoroughly
- Monitor performance and error logs

## Resources

### Documentation

- **Weather API Documentation**: [API Documentation](#)
- **React**: [React Documentation](https://reactjs.org)
- **TypeScript**: [TypeScript Documentation](https://www.typescriptlang.org)
- **Redux Toolkit**: [Redux Toolkit Documentation](https://redux-toolkit.js.org)

### Learning Materials

- **Weather Classification**: Understanding the three-tier system
- **API Integration**: Working with weather data
- **State Management**: Using Redux Toolkit effectively
- **TypeScript**: Best practices and advanced features

## Troubleshooting

### Common Issues

1. **Weather Data Not Loading**
   - Check API key validity
   - Verify network connection
   - Check rate limits

2. **Classification Errors**
   - Review parameter thresholds
   - Check data parsing
   - Validate input values

3. **Performance Issues**
   - Optimize API calls
   - Implement proper caching
   - Use code splitting

## Support

For support, please:
1. Check the [issues](https://github.com/Ahmed11-coder/React_Weather_App/issues) page
2. Submit a new issue if needed
3. Join our [Discord](#) community (coming soon)

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
