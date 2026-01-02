+++
title = "Features Section"
description = "Display key features in a grid layout with icons and descriptions."
weight = 3
taxonomies = { tags = ["goyo", "landing-page", "features"], categories = ["guide"] }
+++

The features section displays your project's key features in a clean grid layout. Each feature includes a title, description, and optional Font Awesome icon.

## Configuration

```toml
# Configure the section title and description
[extra.features_section]
title = "Essential Features"
description = "Clean, minimal, and focused on content"

# Add individual features
[[extra.features_section.features]]
title = "Documentation Friendly"
desc = "Provides a clean writing experience for documentation."
icon = "fa-solid fa-book"

[[extra.features_section.features]]
title = "Simple Design"
desc = "A theme that pursues minimalism."
icon = "fa-solid fa-minimize"

[[extra.features_section.features]]
title = "Fast Performance"
desc = "Built with performance in mind."
icon = "fa-solid fa-bolt"
```

## Properties

### Section Properties
- **`title`** (optional): Section heading
- **`description`** (optional): Section description

### Feature Properties
- **`title`** (required): Feature name
- **`desc`** (required): Feature description
- **`icon`** (optional): Font Awesome icon class (e.g., `fa-solid fa-book`)

## Icon Usage

Use Font Awesome icons by specifying the full class name. Browse available icons at [fontawesome.com](https://fontawesome.com/icons).
