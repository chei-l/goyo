+++
title = "Trust Section"
description = "Display logos of companies or projects that use your product."
weight = 4
taxonomies = { tags = ["goyo", "landing-page", "trust"], categories = ["guide"] }
+++

The trust section showcases logos of companies, organizations, or projects that trust and use your product. This builds credibility and social proof.

## Configuration

```toml
[extra.trust_section]
title = "Trusted by the Best"
logos = [
    { src = "/images/logo1.svg", alt = "Company One" },
    { src = "/images/logo2.svg", alt = "Company Two" },
    { src = "/images/logo3.svg", alt = "Company Three" },
    { src = "/images/logo4.svg", alt = "Company Four" },
]
```

## Properties

### Section Properties
- **`title`** (optional): Section heading

### Logo Properties
- **`src`** (required): Path to logo image
- **`alt`** (required): Alternative text for accessibility

## Best Practices

- Use SVG format for logos when possible for better scaling
- Ensure logos have good contrast with the background
- Keep logo sizes consistent
- Use monochrome or simplified versions of logos for a cleaner look
