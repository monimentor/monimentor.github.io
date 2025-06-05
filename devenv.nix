# ./.devenv/devenv.nix
{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.nodejs_20 # Node.js includes npm
    pkgs.nodePackages.serve # Add the 'serve' package for a simple local server
  ];

  # Commands to run automatically when you enter the devenv shell
  enterShell = ''
   build
  '';

  # Define custom scripts (commands) you can run manually
  scripts = {
    "tailwind:build" = {
      exec = "npm run tailwind:build"; # Calls the script defined in package.json
    };
    "tailwind:watch" = {
      exec = "npm run tailwind:watch"; # Calls the script defined in package.json
    };
    "dev" = {
      exec = ''
        echo "Starting dev processes (already running if you just entered shell)."
        npm run copy:html & # Ensure HTML is copied
        npm run copy:assets & # Ensure assets are copied
        npm run tailwind:watch &
        npx serve ./docs -l 8001 &
    
      '';
      };
    build.exec = ''    # Ensure npm dependencies are installed
    npm install

    # Copy index.html to docs folder
    npm run copy:html

    # Copy all assets to docs/assets folder
    npm run copy:assets

    # Start Tailwind CSS watcher in the background using the defined script
    npm run tailwind:watch &
    npm run tailwind:build &

    # Start the local web server using 'serve' in the background
    # It will serve files from the 'docs' directory on port 8001
    npx serve ./docs -l 8001 &

    echo "Development server running at http://localhost:8001"
    echo "Tailwind CSS watcher is active." 
    '';
    
  };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # See full reference at https://devenv.sh/reference/options/
}
