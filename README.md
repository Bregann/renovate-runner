# renovate-runner

Runs [Renovate](https://docs.renovatebot.com/) on a schedule for my projects, replacing the hosted Mend app (which visited repos too rarely to hit a weekly window).

- **When:** every 4 hours (`.github/workflows/renovate.yml`). Normal updates only happen in each repo's own schedule (Mondays before 6am UK). Security fixes and Dependency Dashboard ticks are handled on any run.
- **Which repos:** `config.js` → `repositories`. Add a repo there **and** give the token access to it.
- **Run now:** Actions → Renovate → Run workflow.
- **Token:** repository secret `RENOVATE_TOKEN`, a fine-grained PAT with access to the repos above:
  - Contents: Read and write
  - Pull requests: Read and write
  - Issues: Read and write (Dependency Dashboard)
  - Workflows: Read and write (updates to `.github/workflows`)
  - Commit statuses: Read and write (Renovate sets its own status checks on update branches)
  - Checks: Read
  - Dependabot alerts: Read (security fixes)
  - Metadata: Read (automatic)

  When it expires, Renovate stops: the run fails and GitHub emails you.
