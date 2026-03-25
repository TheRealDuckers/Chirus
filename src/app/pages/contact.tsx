import { Contact } from '../components/contact';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { usePageTitle } from '../components/hooks/use-page-title';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Chirus Ltd', 'Healthcare Technology Park', 'Manchester, UK', 'M1 1AA'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+44 (0) 161 123 4567', 'Mon-Fri: 9am-5pm GMT'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@chirus.com', 'support@chirus.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday', '9:00 AM - 5:00 PM GMT', 'Closed weekends & holidays'],
  },
];

export default function ContactPage() {
  usePageTitle('Contact Us');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Have questions about our products or services? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Manchester's healthcare technology district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <p className="text-gray-600">Map integration placeholder</p>
                <p className="text-sm text-gray-500 mt-2">
                  Healthcare Technology Park, Manchester, UK
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Looking for Technical Support?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Our technical support team is available Monday through Friday to assist with any product inquiries or issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+441611234567"
                className="inline-flex items-center justify-center bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </a>
              <a
                href="mailto:support@chirus.com"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}