// Export the configuration object for Browsersync
module.exports = {
  // Specify the file types to watch for changes
  files: ["**/*.html", "**/*.css", "**/*.js"],
  // Ignore the Django pycache directory
  ignore: ["**/__pycache__/**"],
  // Set the debounce time for reloading the page after changes (in milliseconds)
  reloadDebounce: 100,
  // Configure the options for watching the files
  watchOptions: {
    // Enable polling to detect file changes
    usePolling: true,
    // Set the polling interval time (in milliseconds)
    interval: 500
  },
  // Configure the proxy for the local server to sync with
  proxy: {
    // Set the target URL for the local server
    target: "http://localhost:8000",
    // Enable WebSockets for live reloading
    ws: true
  },
  // Set the port for the Browsersync server
  port: 3000
};