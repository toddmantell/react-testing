module.exports = {
  scripts: {
    default: 'node index.js',
    test: {
      default: 'react-scripts test --no-watchman --no-cache --coverage --verbose --env=jsdom',
      watch: {
        script: 'react-scripts test --no-watchman --env=jsdom',
        description: 'run in the amazingly intelligent Jest watch mode'
      }
		},
		format: {
			default: "prettier src/**/*.js --write",
			description: "runs prettier; Windows can't use single quotes around the file path, so they are removed"
		}
  }
}