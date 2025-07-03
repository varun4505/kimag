import mongoose from 'mongoose';

const caseStudyAccessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  reason: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true,
    enum: ['technology', 'healthcare', 'finance', 'retail', 'education', 'real-estate', 'hospitality', 'manufacturing', 'other']
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'approved', 'rejected']
  }
}, {
  timestamps: true
});

export const CaseStudyAccess = mongoose.models.CaseStudyAccess || mongoose.model('CaseStudyAccess', caseStudyAccessSchema);
