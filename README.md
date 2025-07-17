# fnorden.net

[![Check Links](https://github.com/freifunkh/fnorden.net/actions/workflows/links.yml/badge.svg)](https://github.com/freifunkh/fnorden.net/actions/workflows/links.yml)

This repository contains the statically delivered website of FNorden, our local Freifunk communities friends' association.

## Design decisions

- This repo uses GitHub actions and `npm` to keep track of several javascript dependencies and remind us of their pending updates.
  `npm` is a development dependency, it is not used during delivery.
- All javascript dependencies are vendored, which means their are delivered from our webserver instead of CDNs.
  The goal is to reduce tracking of our users.
- GitHub is part of the development workflow, not part of the delivery process. The Website will not lie on GitHub pages.

## Deployment

Upon pushes on master (which happen after each successful PR merge) the latest commit on master is pushed to the server at `fnorden.net`.

It should not be necessary to pull the repo on the webserver manually anymore.

## Development

### Pull Request (PR) Review

Each PR must pass the provided actions.
Furthermore they should be tested and reviewed locally.

1. clone the repo
2. checkout the PRs branch
3. invoke `python -m http.server`
4. verify the deployment via your browser (the developer console can be opened using F12 in Firefox)
5. Evaluate whether it looks as expected and approve the PR or request changes on it.

### Dependency updates

We use GitHubs Dependabot, a service which checks the websites dependencies for updates on a regular basis.
The bot will open PRs for each pending update.

Sadly this is only the first half of the work. The other half is manual:

1. clone the repo
2. checkout the PRs branch
3. install the configured dependencies `npm i`
4. invoke the respective build-step, e.g. `npm run-script build:bootstrap`, where bootstrap should be swapped for the component to update.
5. `git add vendor/`and `git commit --amend`the changes to Dependabots intended changes.
6. `git push --force-with-lease` the branch
7. wait for the GitHub actions to run through sucessfully and perform a regular Review like described above

### Nix shell

This repo provides a file `shell.nix`, which contains everything relevant to run the above steps under NixOS.
A shell can be opened like this:

`nix-shell`
