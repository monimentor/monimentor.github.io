{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ 
    pkgs.git
  ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_20;
  };

  # https://devenv.sh/processes/
  processes.dev.exec = "npm run dev";

  enterShell = ''
    echo "🎯 Welcome to the Monimentor Vue development environment!"
    echo "📦 Node.js version: $(node --version)"
    echo "Available commands: npm run dev, npm run build, npm run lint"
  '';
}
