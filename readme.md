Monimentor website. 


## 🛠️ Local Development Setup

This project uses `devenv.sh` for a reproducible development environment.

### Prerequisites

* [Nix](https://nixos.org/download/) (package manager)
* [devenv.sh](https://devenv.sh/getting-started/) (follow their installation guide)
* Git

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/monimentor/monimentor.github.io.git](https://github.com/monimentor/monimentor.github.io.git)
    cd monimentor.github.io
    ```

2.  **Enter the development environment:**
    ```bash
    devenv shell
    ```
    The first time you run this, `devenv` will set up Node.js, npm, and other tools. It will also automatically run `npm install` and start the Tailwind CSS watcher and a local web server.

3.  **Verify Tailwind CSS setup:**
    If you haven't already, ensure your Tailwind CSS configuration files are present:
    ```bash
    npx tailwindcss init -p
    ```
    *(You should have already done this. If it fails, try `npm uninstall tailwindcss && npm install tailwindcss@3.4.3` and then retry `npx tailwindcss init -p`)*

4.  **Configure `tailwind.config.js`:**
    Open `tailwind.config.js` and ensure the `content` array points to your HTML files (e.g., `"./index.html"`). Also, ensure your custom colors are defined in `theme.extend.colors`.

5.  **Create input CSS:**
    Create `src/input.css` with the following content:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

6.  **Update `package.json` scripts:**
    Ensure your `package.json` contains the following scripts:
    ```json
    "scripts": {
      "tailwind:build": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
      "tailwind:watch": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
      "copy:html": "mkdir -p dist && cp index.html dist/index.html",
      "dev": "npm run copy:html && npm run tailwind:watch",
      "build": "npm run copy:html && npm run tailwind:build"
    },
    ```

7.  **Link CSS in `index.html`:**
    In your `index.html`, remove the Tailwind CDN link and replace it with a link to your local output file:
    ```html
    <link href="./dist/output.css" rel="stylesheet">
    ```
    Also, remove any custom `<style>` blocks where you manually defined Tailwind-like colors, as these are now in `tailwind.config.js`. Keep only truly custom CSS (like animations and specific layout adjustments).

### Development Workflow

Once you've run `devenv shell`:

* Your local development server will be running at `http://localhost:8001`.
* The Tailwind CSS watcher will be active in the background. Any changes you make to your HTML files or `tailwind.config.js` will automatically trigger a rebuild of `dist/output.css`.
* You can open `http://localhost:8001` in your browser to see your changes reflected live.

**Useful `devenv` commands:**

* `devenv shell`: Enters the development environment and starts processes.
* `devenv run tailwind:build`: Manually builds the production-ready CSS.
* `devenv run dev`: (Mostly for restarting if processes were stopped) Starts watcher and server.
* `devenv services web stop`: Stops the local web server.
* `devenv services web start`: Starts the local web server.

## 🚀 Deployment to GitHub Pages

GitHub Pages serves static files directly from a branch. You'll need to build your project first.

1.  **Build for production:**
    ```bash
    devenv run build
    ```
    This command will:
    * Copy `index.html` to the `dist/` directory.
    * Build and minify your Tailwind CSS into `dist/output.css`.

2.  **Push `dist` folder to GitHub:**
    Ensure your `dist` folder is committed and pushed to the branch you've configured for GitHub Pages (e.g., `main` or `gh-pages`).

    * Make sure `dist/` is **not** in your `.gitignore` if you're deploying the `dist` branch directly.
    * Alternatively, if you're deploying from `main` and GitHub Pages is configured to serve from `/docs` or `/root` of `main`, ensure `dist` is committed. If you use the `/docs` folder, you might need to adjust your `build` script to output to `docs/` instead of `dist/`.

3.  **Configure GitHub Pages:**
    * Go to your GitHub repository settings.
    * Navigate to the "Pages" section.
    * Under "Build and deployment," choose "Deploy from a branch."
    * Select your deployment branch (e.g., `main` or `gh-pages`) and choose the `/dist` folder as the source.
    * Save your changes.

Your website should now be live at your GitHub Pages URL!

## 🤝 Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements!

---

© <span id="currentYearPlaceholder"></span> Monimentor. All rights reserved.
