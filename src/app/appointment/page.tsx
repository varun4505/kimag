'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function AppointmentPage() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    approver: 'kim@kimag.com' // Default approver
  });
  
  const [selectedDate, setSelectedDate] = useState(13); // Default to 13th June (current date)
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!selectedDate || !selectedTime || !form.name || !form.email) {
      alert('Please fill in all required fields and select a date and time.');
      return;
    }

    setIsSubmitting(true);

    // Convert selected date and time to proper Date objects
    const year = 2025;
    const month = 5; // June (0-indexed)
    const [timeStr, period] = selectedTime.split(/(?=[ap]m)/);
    const [hours, minutes] = timeStr.split(':').map(num => parseInt(num));
    
    let hour24 = hours;
    if (period === 'pm' && hours !== 12) hour24 += 12;
    if (period === 'am' && hours === 12) hour24 = 0;

    const startTime = new Date(year, month, selectedDate, hour24, minutes || 0);
    const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later

    const appointmentData = {
      ...form,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString()
    };

    try {
      const response = await fetch('/api/appointments/new', {
        method: 'POST',
        body: JSON.stringify(appointmentData),
        headers: { 'Content-Type': 'application/json' },
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Appointment request sent successfully! You will receive a confirmation email shortly.');
        // Reset form
        setForm({ name: '', email: '', approver: 'kim@kimag.com' });
        setSelectedDate(13); // Reset to current date
        setSelectedTime('');
      } else {
        alert(result.message || 'Failed to send appointment request.');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      alert('An error occurred while sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

  // Helper function to check if a date is available (excluding weekends for this example)
  const isDateAvailable = (day: number) => {
    if (!day) return false;
    const date = new Date(2025, 5, day); // June 2025
    const dayOfWeek = date.getDay();
    // Exclude weekends (Saturday = 6, Sunday = 0)
    return dayOfWeek !== 0 && dayOfWeek !== 6;
  };

  // Helper function to get day name and formatted date
  const getSelectedDateInfo = () => {
    const date = new Date(2025, 5, selectedDate); // June 2025
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      dayName: dayNames[date.getDay()],
      dayAbbr: dayAbbr[date.getDay()],
      formattedDate: selectedDate.toString().padStart(2, '0')
    };
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
            Let&apos;s craft stories that spark
            <br />
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              conversations and leave a legacy.
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
                    {getDaysInMonth().map((day, index) => {
                      const isAvailable = day ? isDateAvailable(day) : false;
                      const isSelected = selectedDate === day;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => day && isAvailable && setSelectedDate(day)}
                          disabled={!day || !isAvailable}
                          className={`
                            aspect-square flex items-center justify-center text-sm font-medium rounded-xl transition-all duration-300
                            ${!day ? 'invisible' : ''}
                            ${!isAvailable && day ? 'text-gray-300 cursor-not-allowed bg-gray-50' : ''}
                            ${isSelected && isAvailable
                              ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-lg transform scale-105' 
                              : isAvailable 
                                ? 'hover:bg-gray-100 text-gray-700 hover:scale-105'
                                : ''
                            }
                            ${day === 13 && isAvailable ? 'ring-2 ring-[#348992]/30' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Calendar Legend */}
                  <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#2d6389] to-[#348992] rounded"></div>
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-gray-100 rounded"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-gray-50 border border-gray-200 rounded"></div>
                      <span>Unavailable</span>
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {getSelectedDateInfo().dayAbbr} {getSelectedDateInfo().formattedDate}
                    </h3>
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

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meeting With
                      </label>
                      <select
                        value={form.approver}
                        onChange={(e) => setForm(f => ({ ...f, approver: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                      >
                        <option value="kim@kimag.com">Kim - CEO & Creative Director</option>
                        <option value="team@kimag.com">Team Lead</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  onClick={submit}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={!selectedTime || !form.name || !form.email || isSubmitting}
                  className={`
                    h-fit py-6 px-6 rounded-xl font-semibold text-lg transition-all duration-300 relative
                    ${(selectedTime && form.name && form.email && !isSubmitting)
                      ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </div>
                  ) : selectedTime && form.name && form.email ? (
                    `Book for ${selectedTime}` 
                  ) : !selectedTime ? (
                    'Select a time' 
                  ) : (
                    'Fill in your details'
                  )}
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