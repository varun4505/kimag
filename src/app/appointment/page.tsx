'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function AppointmentPage() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    startTime: '', 
    endTime: '', 
    approver: '' 
  });
  
  const [selectedDate, setSelectedDate] = useState(5); // Default to 5th June
  const [selectedTime, setSelectedTime] = useState('');

  const submit = async () => {
    await fetch('/api/appointments/new', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Request sent!');
  };

  // Generate calendar days for June 2025
  const getDaysInMonth = () => {
    const days = [];
    const daysInMonth = 30; // June has 30 days
    const startDay = 0; // June 1st, 2025 is a Sunday (0)
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const timeSlots = [
    '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', 
    '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm'
  ];

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#2d6389]/10 to-[#348992]/10 blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/10 blur-xl"></div>
      </div>

      <div className="relative z-10 pt-32">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-6"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-[#2d6389]/10 via-[#348992]/10 to-[#d73c77]/10 backdrop-blur-xl border border-white/30 rounded-full shadow-lg">
            <span className="text-[#2d6389] font-semibold text-sm tracking-wider uppercase">
              Book a 30 min call
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-800">
            Let&apos;s create something
            <br />
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              out of this world together.
            </span>
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="flex justify-center">
            
            {/* Calendar and Time Selection - Grid Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full space-y-8"
            >
              {/* Top Row - Calendar and Time Slots */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">June 2025</h3>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {dayNames.map(day => (
                      <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {getDaysInMonth().map((day, index) => (
                      <button
                        key={index}
                        onClick={() => day && setSelectedDate(day)}
                        disabled={!day}
                        className={`
                          aspect-square flex items-center justify-center text-sm font-medium rounded-xl transition-all duration-300
                          ${!day ? 'invisible' : ''}
                          ${selectedDate === day 
                            ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-lg transform scale-105' 
                            : 'hover:bg-gray-100 text-gray-700'
                          }
                          ${day === 5 ? 'ring-2 ring-[#348992]/30' : ''}
                        `}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Thu 05</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>12h</span>
                      <span>24h</span>
                    </div>
                  </div>

                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          w-full p-4 text-left rounded-xl transition-all duration-300 font-medium
                          ${selectedTime === time
                            ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-md transform scale-[1.02]'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row - Contact Form and Book Button */}
              <div className="grid lg:grid-cols-3 gap-8 items-end">
                {/* Contact Information Form */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  onClick={submit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!selectedTime || !form.name || !form.email}
                  className={`
                    h-fit py-6 px-6 rounded-xl font-semibold text-lg transition-all duration-300
                    ${(selectedTime && form.name && form.email)
                      ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  {selectedTime && form.name && form.email 
                    ? `Book for ${selectedTime}` 
                    : !selectedTime 
                      ? 'Select a time' 
                      : 'Fill in your details'
                  }
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}