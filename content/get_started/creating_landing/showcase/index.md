+++
title = "Showcase Section"
description = "Display tabbed content with images or text descriptions."
weight = 6
taxonomies = { tags = ["goyo", "landing-page", "showcase"], categories = ["guide"] }
+++

The showcase section displays tabbed content, with each tab showing either an image or text content (title + description). This is perfect for highlighting different aspects of your project.

## Configuration

```toml
[extra.showcase_section]
title = "Theme Showcase"
subtitle = "Explore different aspects of Goyo theme"

# Tab with image
[[extra.showcase_section.tabs]]
name = "Documentation"
title = "Clean Documentation"
description = "Experience beautiful and readable documentation pages with Goyo's minimalist design approach."
image = "/images/doc-preview.jpg"

# Tab with text only
[[extra.showcase_section.tabs]]
name = "Customization"
title = "Easy Customization"
description = "Customize your site with simple configuration options. No complex setup required."

# Another tab with image
[[extra.showcase_section.tabs]]
name = "Multilingual"
title = "Multilingual Support"
description = "Built-in support for multiple languages."
image = "/images/multilingual.jpg"
```

## Properties

### Section Properties
- **`title`** (optional): Main section heading
- **`subtitle`** (optional): Section subtitle

### Tab Properties
- **`name`** (required): Tab label
- **`title`** (optional): Content title displayed in the tab panel
- **`description`** (optional): Content description
- **`image`** (optional): Path to image to display

Note: If no `image` is provided, only the `title` and `description` will be shown as text content.

## Use Cases

- Product features with screenshots
- Different use case scenarios
- Before/after comparisons
- Step-by-step guides
- Platform-specific instructions
