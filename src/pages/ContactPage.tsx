import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

// Alert wrapper for Snackbar
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    subject: 'general'
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
      'service_44tnqlt',     // Your EmailJS service ID
      'template_c5hba06',    // Your EmailJS template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        subject: formData.subject,
      },
'ULKVVtOhKC69fmARK'         // Your EmailJS user ID
    )
    .then(() => {
      setSnackbarSeverity('success');
      setSnackbarMessage('Thank you for your message. We will get back to you shortly.');
      setSnackbarOpen(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        subject: 'general'
      });
    })
    .catch((error) => {
      setSnackbarSeverity('error');
      setSnackbarMessage('Failed to send message. Please try again later.');
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

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100">
              Get in touch with our team to discuss your cybersecurity needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Bengaluru Office</h3>
                    <p className="text-gray-600">
                      #2161, 100 Ft Road, 4th "B" Block, Banashankari, 6th Stage, 
                      Ganigarapalaya, Bengaluru, KA, IN – 560062
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Delhi Office</h3>
                    <p className="text-gray-600">
                      #D3, H4/121, Mahavir Enclave, Palam, New Delhi, India – 110045
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <a href="mailto:contact@ewhent.com" className="text-primary-600 hover:text-primary-700">
                      contact@ewhent.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <a href="tel:+919876543210" className="text-primary-600 hover:text-primary-700">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
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
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <CircularProgress size={20} color="inherit" />
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Snackbar popup - top center */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactPage;
