/** @type {import('next').NextConfig} */
const nextConfig = {};

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

export const eslint = eslintConfig; 

export default nextConfig;
