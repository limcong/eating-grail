const plugins = [
  [
    'babel-plugin-import',
    {
      libraryName: '@mui/core',
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    'core',
  ],
  [
    'babel-plugin-import',
    {
      libraryName: '@mui/icons',
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    'icons',
  ],
  [
    'babel-plugin-transform-imports',
    {
      '@mui/core': {
        transform: '@mui/core/${member}',
        preventFullImport: true,
      },
      '@mui/icons': {
        transform: '@mui/icons/${member}',
        preventFullImport: true,
      },
    },
  ],
];

module.exports = { plugins };
