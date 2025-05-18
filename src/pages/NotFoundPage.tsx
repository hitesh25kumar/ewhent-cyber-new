import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex justify-center">
          <AlertCircle size={64} className="text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
        </p>
        <div className="space-y-4">
          <Button
            variant="primary"
            size="lg"
            as={Link}
            to="/"
            fullWidth
          >
            Return to Homepage
          </Button>
          <Button
            variant="outline"
            size="lg"
            as={Link}
            to="/contact"
            fullWidth
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;