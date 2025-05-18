import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

// Alert wrapper for Snackbar
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SecurityAuditPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    employees: '',
    currentSecurity: '',
    specificConcerns: ''
  });

  const [loading, setLoading] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_44tnqlt',     // Replace with your EmailJS service ID
      'template_je0vgw2',    // Replace with your EmailJS template ID
      {
        companyName: formData.companyName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        industry: formData.industry,
        employees: formData.employees,
        currentSecurity: formData.currentSecurity,
        specificConcerns: formData.specificConcerns,
      },
'ULKVVtOhKC69fmARK'         // Replace with your EmailJS user ID (public key)
    )
    .then(() => {
      setSnackbarSeverity('success');
      setSnackbarMessage('Your free security audit request has been sent. We will contact you soon.');
      setSnackbarOpen(true);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        industry: '',
        employees: '',
        currentSecurity: '',
        specificConcerns: ''
      });
    })
    .catch((error) => {
      setSnackbarSeverity('error');
      setSnackbarMessage('Failed to send request. Please try again later.');
      setSnackbarOpen(true);
      console.error('EmailJS error:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const auditFeatures = [
    {
      title: "Comprehensive Assessment",
      description: "In-depth analysis of your security posture across all systems and processes"
    },
    {
      title: "Vulnerability Scanning",
      description: "Advanced scanning to identify potential security vulnerabilities"
    },
    {
      title: "Policy Review",
      description: "Evaluation of security policies and procedures"
    },
    {
      title: "Compliance Check",
      description: "Assessment of compliance with relevant security standards"
    }
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-8 text-primary-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Security Audit</h1>
            <p className="text-xl text-primary-100">
              Get a comprehensive assessment of your organization's security posture
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What's Included</h2>
              <div className="grid grid-cols-1 gap-6">
                {auditFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Why Get an Audit?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Identify potential security vulnerabilities before they're exploited</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Ensure compliance with industry standards and regulations</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Get actionable recommendations for improving your security posture</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Request Your Free Audit</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name*
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Industry*
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Employees*
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Range</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501+">501+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentSecurity" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Security Measures
                    </label>
              <textarea
                id="currentSecurity"
                name="currentSecurity"
                value={formData.currentSecurity}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Briefly describe your current security measures..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="specificConcerns" className="block text-sm font-medium text-gray-700 mb-1">
                Specific Security Concerns
              </label>
              <textarea
                id="specificConcerns"
                name="specificConcerns"
                value={formData.specificConcerns}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Any specific security concerns you'd like us to address..."
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading}
              className="flex justify-center items-center gap-2"
            >
              {loading && <CircularProgress size={20} color="inherit" />}
              Request Free Audit
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <Snackbar
    open={snackbarOpen}
    autoHideDuration={6000}
    onClose={handleSnackbarClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
      {snackbarMessage}
    </Alert>
  </Snackbar>
</div>
);
}
export default SecurityAuditPage;