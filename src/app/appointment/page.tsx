'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaBuilding, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function AppointmentPage() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    message: '',
    approver: 'mukta@kimag.com' // Default approver
  });
  
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)); // June 2025

  // Form validation
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!selectedDate) newErrors.date = 'Please select a date';
    if (!selectedTime) newErrors.time = 'Please select a time';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Convert selected date and time to proper Date objects
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const [timeStr, period] = selectedTime.split(/(?=[ap]m)/);
    const [hours, minutes] = timeStr.split(':').map(num => parseInt(num));
    
    let hour24 = hours;
    if (period === 'pm' && hours !== 12) hour24 += 12;
    if (period === 'am' && hours === 12) hour24 = 0;

    const startTime = new Date(year, month, selectedDate!, hour24, minutes || 0);
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
        setShowSuccess(true);
        // Reset form
        setForm({ name: '', email: '', phone: '', company: '', message: '', approver: 'mukta@kimag.com' });
        setSelectedDate(null);
        setSelectedTime('');
        setErrors({});
      } else {
        setErrors({ submit: result.message || 'Failed to send appointment request.' });
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setErrors({ submit: 'An error occurred while sending your request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate calendar days for any month
  const getDaysInMonth = () => {
    const days = [];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedDate(null); // Reset selected date when changing months
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDate(null); // Reset selected date when changing months
  };

  // Helper function to check if a date is available
  const isDateAvailable = (day: number) => {
    if (!day) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dayOfWeek = date.getDay();
    const today = new Date();
    
    // Exclude weekends and past dates
    return dayOfWeek !== 0 && dayOfWeek !== 6 && date >= today;
  };

  // Helper function to get day name and formatted date
  const getSelectedDateInfo = () => {
    if (!selectedDate) return { dayName: '', dayAbbr: '', formattedDate: '' };
    
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return {
      dayName: dayNames[date.getDay()],
      dayAbbr: dayAbbr[date.getDay()],
      formattedDate: `${dayAbbr[date.getDay()]} ${selectedDate.toString().padStart(2, '0')}, ${monthNames[currentMonth.getMonth()]}`
    };
  };

  const timeSlots = [
    '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', 
    '11:30am', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm'
  ];

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Success Modal Component
  const SuccessModal = () => (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Booked!</h3>
            <p className="text-gray-600 mb-6">
              Your appointment has been successfully scheduled. You will receive a confirmation email shortly with all the details.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-gradient-to-r from-[#2d6389] to-[#348992] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Got it!
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

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
            <FaCalendarAlt className="mr-2 text-[#2d6389]" />
            <span className="text-[#2d6389] font-semibold text-sm tracking-wider uppercase">
              Schedule Your Consultation
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-800">
            Let&apos;s craft stories that spark
            <br />
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              conversations and leave a legacy.
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book a 30-minute consultation to discuss your communication needs and discover how we can elevate your brand&apos;s story.
          </p>
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
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                      <FaCalendarAlt className="mr-2 text-[#348992]" />
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={goToPreviousMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                        disabled={currentMonth <= new Date()}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={goToNextMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
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
                            ${day === new Date().getDate() && 
                              currentMonth.getMonth() === new Date().getMonth() && 
                              currentMonth.getFullYear() === new Date().getFullYear() && 
                              isAvailable ? 'ring-2 ring-[#348992]/30' : ''}
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
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                      <FaClock className="mr-2 text-[#348992]" />
                      {selectedDate ? getSelectedDateInfo().formattedDate : 'Select a date first'}
                    </h3>
                    {errors.time && (
                      <span className="text-red-500 text-sm flex items-center">
                        <FaExclamationTriangle className="mr-1" />
                        {errors.time}
                      </span>
                    )}
                  </div>

                  {selectedDate ? (
                    <>
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              setErrors(prev => ({ ...prev, time: '' }));
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`
                              w-full p-4 text-left rounded-xl transition-all duration-300 font-medium flex items-center justify-between
                              ${selectedTime === time
                                ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-md'
                                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                              }
                            `}
                          >
                            <span>{time}</span>
                            <FaClock className="opacity-60" />
                          </motion.button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <FaCalendarAlt className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Please select a date to view available time slots</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Row - Contact Form and Information Section */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Information Form */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <FaUser className="mr-2 text-[#348992]" />
                    Your Information
                  </h3>
                  
                  {errors.submit && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
                      <FaExclamationTriangle className="mr-2" />
                      {errors.submit}
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <FaUser className="mr-1 text-gray-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm(f => ({ ...f, name: e.target.value }));
                          setErrors(prev => ({ ...prev, name: '' }));
                        }}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none`}
                        required
                      />
                      {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <FaEnvelope className="mr-1 text-gray-400" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm(f => ({ ...f, email: e.target.value }));
                          setErrors(prev => ({ ...prev, email: '' }));
                        }}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none`}
                        required
                      />
                      {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <FaPhone className="mr-1 text-gray-400" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <FaBuilding className="mr-1 text-gray-400" />
                        Company
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm(f => ({ ...f, company: e.target.value }))}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
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
                        <option value="mukta@kimag.com">Mrs. Mukta Kumar - Director, Communications</option>
                        <option value="anurag@kimag.com">Mr. Anurag Kumar - Director, Operations</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Tell us about your project or any specific topics you'd like to discuss..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information Section - Right Side */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <FaClock className="mr-2 text-[#348992]" />
                    What to Expect
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <FaClock className="text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-1">30-Minute Consultation</h4>
                          <p className="text-sm text-blue-700">
                            Perfect duration to discuss your communication needs and explore collaboration opportunities.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <FaCalendarAlt className="text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-1">Flexible Scheduling</h4>
                          <p className="text-sm text-green-700">
                            Need a different time? Contact us directly for custom scheduling options.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <FaUser className="text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-1">What to Expect</h4>
                          <p className="text-sm text-purple-700">
                            We'll discuss your goals, challenges, and how our expertise can help elevate your brand.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Button - moved inside the information box */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <motion.button
                      onClick={submit}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      disabled={!selectedTime || !selectedDate || !form.name || !form.email || isSubmitting}
                      className={`
                        w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden
                        ${(selectedTime && selectedDate && form.name && form.email && !isSubmitting)
                          ? 'bg-gradient-to-r from-[#2d6389] to-[#348992] text-white shadow-lg hover:shadow-xl' 
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Booking...</span>
                        </div>
                      ) : selectedTime && selectedDate && form.name && form.email ? (
                        <div className="flex items-center justify-center space-x-2">
                          <FaCalendarAlt />
                          <span>Book Appointment</span>
                        </div>
                      ) : !selectedDate ? (
                        'Select a date' 
                      ) : !selectedTime ? (
                        'Select a time'
                      ) : (
                        'Complete your details'
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <SuccessModal />
      <Footer />
    </div>
  );
}