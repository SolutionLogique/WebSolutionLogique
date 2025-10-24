module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-import-attributes',
  ],
  // Désactiver le mode compact pour éviter les warnings sur les gros fichiers
  compact: false,
}; 