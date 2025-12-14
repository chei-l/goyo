+++
title = "Creating a Content"
description = "Learn how to create a page with Goyo."
weight = 2
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
