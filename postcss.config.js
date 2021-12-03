const fs = require('fs');
const workspaceConfig = require('./workspace.json');

const TAILWIND_CONFIG_FILE = 'tailwind.config.js';

const PROCESS = process.argv[3];
const [project, runner] = PROCESS.split(':');

const STORYBOOK_REGEX = /storybook/gi;

let plugins = [require('autoprefixer')];

const projectConfig = workspaceConfig.projects[project];

// See https://cssdb.org/
const stage = {
  experimental: 0, // This is a crazy idea. Unofficial Draft
  aspirational: 1, // This idea might not be crazy. Editor’s Draft
  allowable: 2, // This idea is not crazy. Working Draft
  embraced: 3, // This idea is becoming part of the web. Candidate Recommendation
  standardized: 4, // This idea is part of the web. Recommendation
};
const preserve = false;

if (
  projectConfig &&
  (STORYBOOK_REGEX.test(runner) || projectConfig.projectType === 'application')
) {
  let config = undefined;
  if (fs.existsSync(`${projectConfig.root}/${TAILWIND_CONFIG_FILE}`)) {
    config = `./${projectConfig.root}/${TAILWIND_CONFIG_FILE}`;
  } else if (fs.existsSync(TAILWIND_CONFIG_FILE)) {
    config = `./${TAILWIND_CONFIG_FILE}`;
  }

  if (config) {
    plugins = [
      require('postcss-import'), // css @import
      require('postcss-focus-visible'),
      require('tailwindcss/nesting')(require('postcss-nesting')),
      require('tailwindcss')({
        config: `${config}`,
      }),
      require('postcss-preset-env')({
        stage: stage.aspirational,
        preserve,
        'nesting-rules': false,
      }),
      ...plugins,
    ];
  }
}

module.exports = {
  plugins,
};
