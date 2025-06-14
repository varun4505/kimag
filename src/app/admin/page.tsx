'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

interface Appointment {
  _id: string;
  name: string;
  email: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'approved' | 'rejected';
  approver: string;
  createdAt: string;
}

interface CaseStudyAccess {
  _id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  reason: string;
  sector: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface Stats {
  appointments: {
    pending: number;
    approved: number;
    rejected: number;
  };
  caseStudies: {
    pending: number;
    approved: number;
    rejected: number;
  };
  total: {
    appointments: number;
    caseStudies: number;
  };
}

export default function AdminPanel() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [caseStudyAccess, setCaseStudyAccess] = useState<CaseStudyAccess[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [activeTab, setActiveTab] = useState<'appointments' | 'caseStudies'>('appointments');
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Authentication check using API
  const authenticate = async () => {
    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        fetchData();
      } else {
        alert(data.error || 'Invalid password');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Authentication failed. Please try again.');
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/admin/appointments');
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchCaseStudyAccess = async () => {
    try {
      const response = await fetch('/api/admin/case-studies');
      if (response.ok) {
        const data = await response.json();
        setCaseStudyAccess(data);
      }
    } catch (error) {
      console.error('Error fetching case study access requests:', error);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchAppointments(), fetchCaseStudyAccess(), fetchStats()]);
    setLoading(false);
  };

  const updateAppointmentStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const response = await fetch('/api/admin/appointments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        await Promise.all([fetchAppointments(), fetchStats()]);
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  const updateCaseStudyAccessStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const response = await fetch('/api/admin/case-studies', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        await Promise.all([fetchCaseStudyAccess(), fetchStats()]);
        
        // Show success message
        if (status === 'approved') {
          alert('Access granted! Case study link has been sent via email.');
        } else {
          alert('Access request has been denied.');
        }
      }
    } catch (error) {
      console.error('Error updating case study access request:', error);
      alert('Failed to update access request. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-md w-full mx-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Access</h2>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#348992]/20 focus:border-[#348992] transition-colors outline-none"
              onKeyPress={(e) => e.key === 'Enter' && authenticate()}
            />
            <button
              onClick={authenticate}
              className="w-full bg-gradient-to-r from-[#2d6389] to-[#348992] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Login
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-gray-800">
            Admin <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-gray-600 text-lg">Manage appointments and case studies</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                activeTab === 'appointments'
                  ? 'bg-white text-[#348992] shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Appointments ({appointments.filter(a => a.status === 'pending').length})
            </button>
            <button
              onClick={() => setActiveTab('caseStudies')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                activeTab === 'caseStudies'
                  ? 'bg-white text-[#348992] shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Case Study Access ({caseStudyAccess.filter(c => c.status === 'pending').length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#348992]"></div>
            </div>
          ) : (
            <>
              {/* Stats Cards */}
              {stats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Appointments</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total.appointments}</p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-yellow-600">{stats.appointments.pending} pending</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Case Study Requests</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total.caseStudies}</p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-yellow-600">{stats.caseStudies.pending} pending</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Approved Today</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                      {stats.appointments.approved + stats.caseStudies.approved}
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-gray-500">Across all categories</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Pending Review</h3>
                    <p className="text-3xl font-bold text-yellow-600 mt-2">
                      {stats.appointments.pending + stats.caseStudies.pending}
                    </p>
                    <div className="flex items-center mt-2 text-sm">
                      <span className="text-gray-500">Needs attention</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'appointments' ? (
                  <AppointmentsTab 
                    appointments={appointments} 
                    onUpdateStatus={updateAppointmentStatus}
                    formatDate={formatDate}
                    getStatusColor={getStatusColor}
                  />
                ) : (
                  <CaseStudiesTab 
                    caseStudyAccess={caseStudyAccess} 
                    onUpdateStatus={updateCaseStudyAccessStatus}
                    formatDate={formatDate}
                    getStatusColor={getStatusColor}
                  />
                )}
              </motion.div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Appointments Tab Component
function AppointmentsTab({ 
  appointments, 
  onUpdateStatus, 
  formatDate, 
  getStatusColor 
}: {
  appointments: Appointment[];
  onUpdateStatus: (id: string, status: 'approved' | 'rejected') => void;
  formatDate: (date: string) => string;
  getStatusColor: (status: string) => string;
}) {
  const pendingAppointments = appointments.filter(a => a.status === 'pending');
  const processedAppointments = appointments.filter(a => a.status !== 'pending');

  return (
    <div className="space-y-8">
      {/* Pending Appointments */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Pending Appointments</h3>
        {pendingAppointments.length === 0 ? (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500">
            No pending appointments
          </div>
        ) : (
          <div className="grid gap-4">
            {pendingAppointments.map((appointment) => (
              <AppointmentCard 
                key={appointment._id} 
                appointment={appointment} 
                onUpdateStatus={onUpdateStatus}
                formatDate={formatDate}
                getStatusColor={getStatusColor}
              />
            ))}
          </div>
        )}
      </div>

      {/* Processed Appointments */}
      {processedAppointments.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="grid gap-4">
            {processedAppointments.slice(0, 5).map((appointment) => (
              <AppointmentCard 
                key={appointment._id} 
                appointment={appointment} 
                onUpdateStatus={onUpdateStatus}
                formatDate={formatDate}
                getStatusColor={getStatusColor}
                readonly
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Case Studies Tab Component
function CaseStudiesTab({ 
  caseStudyAccess, 
  onUpdateStatus, 
  formatDate, 
  getStatusColor 
}: {
  caseStudyAccess: CaseStudyAccess[];
  onUpdateStatus: (id: string, status: 'approved' | 'rejected') => void;
  formatDate: (date: string) => string;
  getStatusColor: (status: string) => string;
}) {
  const pendingRequests = caseStudyAccess.filter(c => c.status === 'pending');
  const processedRequests = caseStudyAccess.filter(c => c.status !== 'pending');

  return (
    <div className="space-y-8">
      {/* Pending Access Requests */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Pending Case Study Access Requests</h3>
        {pendingRequests.length === 0 ? (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500">
            No pending access requests
          </div>
        ) : (
          <div className="grid gap-4">
            {pendingRequests.map((request) => (
              <CaseStudyAccessCard 
                key={request._id} 
                accessRequest={request} 
                onUpdateStatus={onUpdateStatus}
                formatDate={formatDate}
                getStatusColor={getStatusColor}
              />
            ))}
          </div>
        )}
      </div>

      {/* Processed Requests */}
      {processedRequests.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="grid gap-4">
            {processedRequests.slice(0, 5).map((request) => (
              <CaseStudyAccessCard 
                key={request._id} 
                accessRequest={request} 
                onUpdateStatus={onUpdateStatus}
                formatDate={formatDate}
                getStatusColor={getStatusColor}
                readonly
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Appointment Card Component
function AppointmentCard({ 
  appointment, 
  onUpdateStatus, 
  formatDate, 
  getStatusColor,
  readonly = false 
}: {
  appointment: Appointment;
  onUpdateStatus: (id: string, status: 'approved' | 'rejected') => void;
  formatDate: (date: string) => string;
  getStatusColor: (status: string) => string;
  readonly?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{appointment.name}</h4>
          <p className="text-gray-600">{appointment.email}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
          {appointment.status}
        </span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Meeting Time</p>
          <p className="font-medium">{formatDate(appointment.startTime)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Approver</p>
          <p className="font-medium">{appointment.approver}</p>
        </div>
      </div>

      {!readonly && appointment.status === 'pending' && (
        <div className="flex space-x-3">
          <button
            onClick={() => onUpdateStatus(appointment._id, 'approved')}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Approve
          </button>
          <button
            onClick={() => onUpdateStatus(appointment._id, 'rejected')}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}

// Case Study Access Card Component
function CaseStudyAccessCard({ 
  accessRequest, 
  onUpdateStatus, 
  formatDate, 
  getStatusColor,
  readonly = false 
}: {
  accessRequest: CaseStudyAccess;
  onUpdateStatus: (id: string, status: 'approved' | 'rejected') => void;
  formatDate: (date: string) => string;
  getStatusColor: (status: string) => string;
  readonly?: boolean;
}) {
  const getSectorDisplayName = (sector: string) => {
    const sectorNames = {
      'hospitality': 'Hospitality & Tourism',
      'real-estate': 'Real Estate & Property',
      'healthcare': 'Healthcare & Medical',
      'technology': 'Technology & Software',
      'retail': 'Retail & E-commerce',
      'finance': 'Finance & Banking',
      'education': 'Education & Training',
      'other': 'Other'
    };
    return sectorNames[sector as keyof typeof sectorNames] || 'Other';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{accessRequest.name}</h4>
          <p className="text-gray-600">{accessRequest.email}</p>
          {accessRequest.company && (
            <p className="text-sm text-gray-500">{accessRequest.company}</p>
          )}
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {getSectorDisplayName(accessRequest.sector)}
            </span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(accessRequest.status)}`}>
          {accessRequest.status}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-1">Reason for access:</p>
        <p className="text-gray-700">{accessRequest.reason}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {accessRequest.phone && (
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{accessRequest.phone}</p>
          </div>
        )}
        <div>
          <p className="text-sm text-gray-500">Requested</p>
          <p className="font-medium">{formatDate(accessRequest.createdAt)}</p>
        </div>
      </div>

      {!readonly && accessRequest.status === 'pending' && (
        <div className="flex space-x-3">
          <button
            onClick={() => onUpdateStatus(accessRequest._id, 'approved')}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Grant Access
          </button>
          <button
            onClick={() => onUpdateStatus(accessRequest._id, 'rejected')}
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Deny Access
          </button>
        </div>
      )}
    </div>
  );
}
