import React, { useState } from 'react';
import { Stethoscope, Heart, Syringe, Ambulance, Phone, Mail, MapPin, Sun, Moon } from 'lucide-react';

const services = [
  { name: 'Surgery', icon: Syringe },
  { name: 'Cardiovascular and Thoracic Surgery (CVTS)', icon: Heart },
  { name: 'Emergency services', icon: Ambulance },
  { name: 'Casualty care', icon: Stethoscope },
];

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClasses = isDarkTheme
    ? 'bg-gray-900 text-gray-100'
    : 'bg-gray-100 text-gray-900';

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      <header className={`${isDarkTheme ? 'bg-green-700' : 'bg-green-600'} text-white py-6`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Dr. Darshan Rajai</h1>
            <p className="text-xl mt-2">Medical Services</p>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            {isDarkTheme ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className={`text-3xl font-semibold mb-6 ${isDarkTheme ? 'text-green-400' : 'text-green-700'}`}>About Dr. Rajai</h2>
          <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            Dr. Darshan Rajai is a highly skilled and experienced medical professional specializing in various surgical procedures and emergency care. With a commitment to providing exceptional patient care, Dr. Rajai combines expertise with compassion to ensure the best possible outcomes for his patients.
          </p>
        </section>

        <section className="mb-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isDarkTheme ? 'text-green-400' : 'text-green-700'}`}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.name} className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg flex items-center transform transition-transform hover:scale-105`}>
                <service.icon className={`w-16 h-16 ${isDarkTheme ? 'text-green-500' : 'text-green-600'} mr-6`} />
                <h3 className={`text-2xl font-semibold ${isDarkTheme ? 'text-green-300' : 'text-green-700'}`}>{service.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={`text-3xl font-semibold mb-8 ${isDarkTheme ? 'text-green-400' : 'text-green-700'}`}>Contact Information</h2>
          <div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg`}>
            <div className="flex items-center mb-6">
              <Phone className={`w-8 h-8 ${isDarkTheme ? 'text-green-500' : 'text-green-600'} mr-4`} />
              <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center mb-6">
              <Mail className={`w-8 h-8 ${isDarkTheme ? 'text-green-500' : 'text-green-600'} mr-4`} />
              <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>dr.rajai@example.com</p>
            </div>
            <div className="flex items-center">
              <MapPin className={`w-8 h-8 ${isDarkTheme ? 'text-green-500' : 'text-green-600'} mr-4`} />
              <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>123 Medical Center Dr, City, State 12345</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkTheme ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'} py-6 mt-16`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Dr. Darshan Rajai Medical Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;