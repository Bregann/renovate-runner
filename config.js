// Global settings for the self-hosted Renovate run.
// Each repo's own renovate.json still controls what gets updated and when.
module.exports = {
  platform: 'github',
  repositories: [
    'Bregann/BreganTwitchBot',
    'Bregann/Clogger',
    'Bregann/CommsSender',
    'Bregann/Orbit',
    'Bregann/RetroTrack',
    'Bregann/ShutterStream',
  ],
  // All repos already have a renovate.json; skip onboarding PRs and ignore repos without one.
  onboarding: false,
  requireConfig: 'required',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
};
