```markdown
# VSC Widget Setup

This repository contains the setup instructions and configurations for the VSC Widget project.

## Prerequisites

- Homebrew
- Node.js
- Yarn
- GitHub CLI (`gh`)

### Step 1: Install Homebrew (if not already installed)

To install Homebrew, run the following command:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Step 2: Install Node.js and Yarn using Homebrew

To install Node.js and Yarn, run the following commands:

```sh
brew install node
brew install yarn
```

### Step 3: Verify the installations

To verify the installations, run the following commands:

```sh
node -v
yarn -v
```

### Step 4: Clone the Repository

To clone this repository, run the following commands:

```sh
gh auth login
gh repo clone izaacapp/vsc-widget
cd vsc-widget
```

### Step 5: Set Up Dependencies

Navigate to your project directory and set up the dependencies:

```sh
npm init -y  # If package.json does not exist
yarn install
```

### Step 6: Set Environment Variable for OpenSSL (if needed)

If you encounter issues with OpenSSL, set the environment variable:

```sh
echo "NODE_OPTIONS=--openssl-legacy-provider" > .env
export $(cat .env | xargs)
```

### Step 7: Build the Project

To build the project, run the following command:

```sh
yarn build
```

### Step 8: Additional Setup

Create a build script to streamline the build process:

1. Create a `build.sh` script:

   ```sh
   nano build.sh
   ```

2. Add the following content to `build.sh`:

   ```sh
   #!/bin/bash
   # Load environment variables from .env file
   export $(cat .env | xargs)
   # Run the build command
   yarn build
   ```

3. Make the script executable:

   ```sh
   chmod +x build.sh
   ```

4. Run the build script:

   ```sh
   ./build.sh
   ```

### Terminal Command Log for Mac M1

Here is a log of the terminal commands used for setting up this project:

```sh
cd /path/to/project/directory
git clone https://github.com/githrdw/vsch-template.git vsch_Demo
cd vsch_Demo
yarn install
brew install yarn
yarn install
yarn build
brew install node
npm init -y
yarn install
yarn build
echo "NODE_OPTIONS=--openssl-legacy-provider" > .env
export $(cat .env | xargs)
yarn build
nano build.sh
chmod +x build.sh
./build.sh
