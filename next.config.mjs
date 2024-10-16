/** @type {import('next').NextConfig} */
const nextConfig = {
    // Existing configuration
    images: {
        domains: ['images.unsplash.com'], // Add this line
    },

  };

  const eslintConfig = {
    root: true,
    extends: ['next/core-web-vitals'],
    rules: {
        'no-unused-vars': 'off',
        'react/no-unescaped-entities': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-key': 'off',
        'import/no-anonymous-default-export': 'off',
    },
};

// If you want to include eslintConfig, you can define it as a separate export
export const eslint = eslintConfig; // Optional
  
  export default nextConfig;