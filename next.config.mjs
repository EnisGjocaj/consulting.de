/** @type {import('next').NextConfig} */
const nextConfig = {};

const eslintConfig = {
    ignoreDuringBuilds: true,
    root: true,
    extends: ['next/core-web-vitals'],
    rules: {
        'no-unused-vars': 'off',
        'react/no-unescaped-entities': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-key': 'off',
        'import/no-anonymous-default-export': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-object-type':'off',
        'react/no-unescaped-entities': 'off',
    },
};

export const eslint = eslintConfig; 

export default nextConfig;
