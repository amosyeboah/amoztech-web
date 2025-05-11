import React from 'react';
import { Palette } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Palette className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        amozTech
      </span>
      <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        web design agency
      </span>
    </div>
  );
};

export default Logo;