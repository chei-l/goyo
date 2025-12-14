+++
title = "Page Configuration"
description = "Learn how to configure individual pages in Goyo."
weight = 5
sort_by = "weight"

[extra]
toc_expand = true
badge = "NEW"
+++

Configure individual pages using the `[extra]` section in front matter.

## Badge Indicator

```toml
+++
title = "Your Page Title"

[extra]
badge = "NEW"  # Options: NEW, BETA, UPDATED, WIP
+++
```

## Table of Contents

```toml
+++
title = "My Page"

[extra]
toc_expand = true  # false (default): auto-expand on scroll
                   # true: always expanded
+++
```

This page shows all API endpoints with the TOC fully expanded.

## Authentication
Details about authentication...

## Endpoints
### GET /api/users
### POST /api/users
### DELETE /api/users

## Error Codes
### 400 Bad Request
### 401 Unauthorized
### 404 Not Found
```

With `toc_expand = true`, readers can see all endpoints and error codes in the TOC at once, making it easier to navigate the API reference.
