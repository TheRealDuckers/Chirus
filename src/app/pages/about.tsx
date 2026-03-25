import { motion } from 'motion/react';
import { About } from '../components/about';
import { ValueProposition } from '../components/value-proposition';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { usePageTitle } from '../components/hooks/use-page-title';

const stats = [
  { icon: Award, value: '25+', label: 'Years of Excellence' },
  { icon: Users, value: '500+', label: 'Healthcare Partners' },
  { icon: Globe, value: 'UK & Ireland', label: 'Geographic Coverage' },
  { icon: TrendingUp, value: '99.9%', label: 'Accuracy Rate' },
];

const values = [
  {
    title: 'Innovation',
    description: 'Continuously advancing diagnostic technology to meet evolving healthcare needs',
  },
  {
    title: 'Reliability',
    description: 'Delivering consistent, accurate results that healthcare professionals can trust',
  },
  {
    title: 'Partnership',
    description: 'Building long-term relationships with healthcare providers across the UK',
  },
  {
    title: 'Excellence',
    description: 'Maintaining the highest standards in product quality and customer service',
  },
];

export default function AboutPage() {
  usePageTitle('About Us');

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
              About Chirus
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Over 25 years of excellence in delivering advanced diagnostic solutions to healthcare providers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <About />

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower healthcare professionals with innovative diagnostic solutions that enable rapid, accurate, and reliable patient care. We are committed to advancing medical diagnostics through cutting-edge technology and exceptional service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl p-8 shadow-lg text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-teal-50 leading-relaxed">
                To be the leading provider of diagnostic solutions in the UK and Ireland, recognized for our innovation, reliability, and unwavering commitment to improving patient outcomes through advanced medical technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ValueProposition />

      {/* Team Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Dedicated to Healthcare Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of experts is committed to supporting healthcare professionals with the best diagnostic solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1612636320854-776180f479d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDI1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Healthcare team"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}