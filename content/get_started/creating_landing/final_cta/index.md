+++
title = "Final CTA Section"
description = "Add a final call-to-action to encourage user engagement."
weight = 8
taxonomies = { tags = ["goyo", "landing-page", "cta"], categories = ["guide"] }
+++

The final call-to-action (CTA) section appears at the bottom of your landing page, just before the footer. It's your last chance to encourage visitors to take action.

## Configuration

```toml
[extra.final_cta_section]
title = "Ready to Get Started?"
description = "Begin your journey with Goyo today and create beautiful documentation with ease."
button = { text = "Start Now", url = "/get-started/installation/" }
image = "/images/contribute.png" # Optional image
```

## Properties

- **`title`** (required): Main heading for the CTA
- **`description`** (required): Supporting text that explains the value proposition
- **`button`** (required): Call-to-action button
  - `text`: Button label
  - `url`: Link destination
- **`image`** (optional): Path to an image displayed above the CTA text

## Best Practices

- Keep the message clear and action-oriented
- Use compelling button text (e.g., "Start Now", "Get Started", "Try It Free")
- Link to your most important conversion page (installation, signup, etc.)
- The image can reinforce your message or show a visual preview
- Make the CTA stand out from the rest of the page

## Examples

### Simple CTA
```toml
[extra.final_cta_section]
title = "Start Building Today"
description = "Join thousands of developers using Goyo for their documentation."
button = { text = "Get Started", url = "/get-started/installation/" }
```

### CTA with Image
```toml
[extra.final_cta_section]
title = "Contribute to Goyo"
description = "Help us make Goyo better. Contributions are welcome!"
button = { text = "View GitHub", url = "https://github.com/hahwul/goyo" }
image = "/images/contribute.png"
```
