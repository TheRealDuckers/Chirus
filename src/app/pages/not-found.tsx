import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';
import { usePageTitle } from '../components/hooks/use-page-title';

export default function NotFound() {
  usePageTitle('404 - Page Not Found');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-teal-400 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}