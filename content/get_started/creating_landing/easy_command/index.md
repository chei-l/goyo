+++
title = "Easy Command Section"
description = "Display installation commands or code snippets in a tabbed interface."
weight = 5
taxonomies = { tags = ["goyo", "landing-page", "command"], categories = ["guide"] }
+++

The easy command section displays commands or code snippets in a tabbed interface, making it easy for users to choose their preferred method. Each tab can show either a command (displays as code) or a link (navigates on click).

## Configuration

```toml
[extra.easy_command_section]
title = "Easy Installation"
description = "Get started with Goyo in seconds using your preferred method"

# Command tab - displays code with copy button
[[extra.easy_command_section.tabs]]
name = "Git Clone"
command = "git clone https://github.com/hahwul/goyo.git themes/goyo"

# Another command tab
[[extra.easy_command_section.tabs]]
name = "Git Submodule"
command = "git submodule add https://github.com/hahwul/goyo.git themes/goyo"

# Link tab - navigates to URL on click
[[extra.easy_command_section.tabs]]
name = "More"
link = "/get_started/installation"
```

## Properties

### Section Properties
- **`title`** (optional): Section heading
- **`description`** (optional): Section description

### Tab Properties
- **`name`** (required): Tab label
- **`command`** (optional): Command to display (use for code snippets)
- **`link`** (optional): URL to navigate to (use for "learn more" tabs)

Note: Each tab must have either `command` or `link`, but not both.

## Use Cases

- Installation methods (npm, yarn, git, etc.)
- Quick start commands
- Code examples for different frameworks
- Links to detailed documentation
