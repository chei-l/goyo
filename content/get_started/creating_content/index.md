+++
title = "Creating a Content"
description = "Learn how to create a page with Goyo."
weight = 2
taxonomies = { tags = ["goyo", "zola"], categories = ["guide"] }
+++

Create content in the `content` directory. Goyo automatically generates sidebar navigation from your content structure.

## Page

Create `./content/hello_world/index.md`:

```markdown
+++
title = "Hello World"
weight = 1

[extra]
+++

# Welcome to Hello World

Your markdown content goes here.
```

## Section

Sections contain multiple pages. Create this structure:

```
content/list/
├── _index.md       # Section index
├── first/
│   └── index.md    # First page
└── second/
    └── index.md    # Second page
```

**`_index.md`:**
```markdown
+++
title = "List"
sort_by = "weight"
+++
```

**`first/index.md`:**
```markdown
+++
title = "First"
weight = 1
+++

# First Page
```

**`second/index.md`:**
```markdown
+++
title = "Second"
weight = 2
+++

# Second Page
```

## Page Configuration

Configure individual pages using the `[extra]` section in front matter.

### Badge Indicator

Add visual indicators to your pages:

```toml
+++
title = "Your Page Title"

[extra]
badge = "NEW"  # Options: NEW, BETA, UPDATED, WIP
+++
```

### Table of Contents

Control how the table of contents displays:

```toml
+++
title = "My Page"

[extra]
toc_expand = true  # false (default): auto-expand on scroll
                   # true: always expanded
+++
```

### Taxonomies

Add tags and categories to organize your content:

```toml
+++
title = "Your Page"
taxonomies = { tags = ["goyo", "zola"], categories = ["guide"] }
+++
```

## Example: Complete Page

Here's a complete example showing all configuration options:

```markdown
+++
title = "Complete Example"
description = "A page demonstrating all available configurations"
weight = 3
taxonomies = { tags = ["example", "tutorial"], categories = ["documentation"] }

[extra]
badge = "NEW"
toc_expand = false
+++

# Complete Example

This page demonstrates all available configuration options in Goyo.

## Introduction

Content with proper front matter configuration.

## Features

- Badge indicator in sidebar
- Organized with tags and categories
- Custom table of contents behavior
```
