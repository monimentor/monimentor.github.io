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
    pkgs.nodePackages.tailwindcss # Add Tailwind CSS
  ];

  # Define custom scripts (commands) you can run manually
  scripts = {
    "tailwind:build" = {
      exec = "npm run tailwind:build"; # Calls the script defined in package.json
    };
    "tailwind:watch" = {
      exec = "npm run tailwind:watch"; # Calls the script defined in package.json
    };
    "dev" = {
      exec = "npm run copy && npm run tailwind:watch";
    };
    "build" = {
      exec = "npm run copy && npm run tailwind:build";
    };
  };

  processes = {
    watcher = {
      exec = "npm run dev";
    };
    server = {
      exec = "serve docs";
    };
  };

  # See full reference at https://devenv.sh/reference/options/
}
