import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  startTime: Date,
  endTime: Date,
  status: { type: String, default: 'pending' },
  approver: String,
}, {
  timestamps: true
});

export const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);