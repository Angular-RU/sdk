# Contributing Guide

Thank you for your interest in contributing to our project! We welcome all contributions, from **bug reports** to **new
features**.

This guide will help you **get started quickly**.

## How to Contribute

There are several ways to contribute, even if you don't want to write code.

1.  **Report a Bug:** Open an issue to tell us about something that's broken.
2.  **Suggest a Feature:** Open an issue to propose a new idea.
3.  **Fix a Bug or Implement a Feature:** Submit a **Pull Request (PR)** with your code changes.

---

## Quick Start for Code Contributions

If you're ready to submit code, follow these steps:

### 1. Find an Issue

Look through the [open issues](../../issues) to find something you'd like to work on. If you're new, look for labels
like `good first issue` or `help wanted`. If you want to work on something new, **please open an issue to discuss it
first** before writing code.

### 2. Fork the Repository

Click the **"Fork"** button in the top right of this repository's page. This creates your own copy of the project under
your GitHub account.

### 3. Clone Your Fork

Clone your forked repository to your local machine.

```bash
git clone https://github.com/angular-ru/sdk.git
cd sdk
# Switch to the main branch.
git checkout main
# Create a new branch for your changes.
git checkout -b my-bug-fix
```

You can find more information about Git feature branches
[here](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

### 4. Start the Project

1. Run `npm ci` to install dependencies.
2. Run `nx serve` to serve one of the demo apps. For example:

```bash
nx serve virtual-table-demo
```

---

## Testing

Make sure your changes pass existing tests and that you write **new tests** for any new or changed behavior:

- `npm run test` to run unit tests
- `npm run lint` to run the linter
- `npm run build:lib:all` to build all libraries
- `npm run build:app:all` to build all demo apps

---

## Pull Request Process

1. We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for our commit messages. For
   example: `feat(cdk): improve typing`
2. Ensure you **cover all code changes with unit tests**.
3. When you are ready, create a **Pull Request** in GitHub targeting the `main` branch.
4. We will review your code and merge it if everything is okay!
