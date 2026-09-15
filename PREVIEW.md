# Local preview

From the repository folder, run:

```sh
./scripts/preview
```

Open http://127.0.0.1:4000/50ways/ in your browser.
Keep the terminal running. Saved page and CSS changes rebuild automatically.
Press Control+C to stop. Restart after editing `_config.yml`.

On this Mac, Ruby 3.3 is installed through Homebrew. To install project dependencies again:

```sh
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle install
```

Generated files and installed gems are ignored by Git. Commit the Gemfile,
Gemfile.lock, configuration, and source files to share the setup.
