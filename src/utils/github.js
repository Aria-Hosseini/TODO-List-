// GitHub API utility functions

/**
 * Get the GitHub token from environment variables
 * @returns {string} The GitHub token
 */
export const getGitHubToken = () => {
  return process.env.GITHUB_TOKEN || '';
};

/**
 * Check if the GitHub token is valid
 * @returns {boolean} True if the token is valid, false otherwise
 */
export const isGitHubTokenValid = () => {
  const token = getGitHubToken();
  return token && token.length > 0;
};

/**
 * Example function to use the GitHub token for API calls
 * @param {string} endpoint - The GitHub API endpoint
 * @returns {Promise} A promise that resolves to the API response
 */
export const fetchGitHubData = async (endpoint) => {
  if (!isGitHubTokenValid()) {
    throw new Error('GitHub token is not valid');
  }

  const response = await fetch(`https://api.github.com${endpoint}`, {
    headers: {
      'Authorization': `token ${getGitHubToken()}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}; 