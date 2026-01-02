+++
title = "Overview"
description = "Learn about section ordering and basic landing page setup."
weight = 1
taxonomies = { tags = ["goyo", "landing-page", "overview"], categories = ["guide"] }
+++

## Basic Setup

To create a landing page, set the template in your `content/_index.md`:

```toml
+++
template = "landing.html"
title = "Goyo"
+++
```

## Section Order

By default, sections are rendered in this order: `hero`, `features`, `trust`, `easy_command`, `showcase`, `social_proof`, `final_cta`.

You can customize the order using `section_order`:

```toml
[extra]
# Custom order - sections will render in this sequence
section_order = ["hero", "features", "showcase", "trust", "social_proof", "final_cta"]

# You can also omit sections entirely
section_order = ["hero", "features", "final_cta"]
```

Available section names: `hero`, `features`, `trust`, `easy_command`, `showcase`, `social_proof`, `final_cta`

## Optional Sections

All sections are optional. Simply omit the configuration for sections you don't need. For example, if you don't include `[extra.trust_section]` in your config, the trust section won't be displayed.
