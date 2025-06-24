import mongoose from 'mongoose';

// Case Study Access Request Model
const caseStudyAccessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  phone: String,
  reason: { type: String, required: true },
  sector: { 
    type: String, 
    required: true,
    enum: ['hospitality', 'real-estate', 'healthcare', 'technology', 'retail', 'finance', 'education', 'other']
  },
  status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
}, {
  timestamps: true
});

// Actual Case Study Model (for displaying approved case studies)
const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: String,
  tags: [String],
  projectUrl: String,
  completedDate: Date,
  featured: { type: Boolean, default: false },
}, {
  timestamps: true
});

export const CaseStudyAccess = mongoose.models.CaseStudyAccess || mongoose.model('CaseStudyAccess', caseStudyAccessSchema);
export const CaseStudy = mongoose.models.CaseStudy || mongoose.model('CaseStudy', caseStudySchema);
