+++
title = "Creating a Landing Page"
description = "Learn how to create a modern, feature-rich landing page with Goyo."
weight = 3
sort_by = "weight"
taxonomies = { tags = ["goyo", "landing-page", "template"], categories = ["guide"] }

[extra]
+++

Create a landing page in `content/_index.md` with `landing.html` template.

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

## Configuration Example

All sections are optional. Omit sections you don't need.

```toml
+++
template = "landing.html"
title = "Goyo"

[extra]
version = "v0.1.0"

# Hero Section
# The main section at the top of the page.
[extra.hero]
title = "Welcome to Goyo!"
badge = "✨ Minimalist Documentation Theme"
description = "A simple and clean Zola theme for documentation."
image = "/images/landing.jpg" # Background image
cta_buttons = [
    { text = "Get Started", url = "/get-started/installation/", style = "primary" },
    { text = "View on GitHub", url = "https://github.com/your/repo", style = "secondary" },
]

# Features Section
# A grid to highlight key features.
# Configure the section title and description
[extra.features_section]
title = "Essential Features"
description = "Clean, minimal, and focused on content"

[[extra.features_section.features]]
title = "Documentation Friendly"
desc = "Provides a clean writing experience for documentation."
icon = "fa-solid fa-book"

[[extra.features_section.features]]
title = "Simple Design"
desc = "A theme that pursues minimalism."
icon = "fa-solid fa-minimize"

# Trust Section
# Display logos of companies or projects that trust you.
[extra.trust_section]
title = "Trusted by the Best"
logos = [
    { src = "/images/logo1.svg", alt = "Company One" },
    { src = "/images/logo2.svg", alt = "Company Two" },
]

# Easy Command Section
# Display commands in a tabbed interface.
# Each tab can show either a command (displays code) or a link (navigates directly on click).
[extra.easy_command_section]
title = "Easy Installation"
description = "Get started with Goyo in seconds using your preferred method"

[[extra.easy_command_section.tabs]]
name = "Git Clone"
command = "git clone https://github.com/hahwul/goyo.git themes/goyo"

[[extra.easy_command_section.tabs]]
name = "Git Submodule"
command = "git submodule add https://github.com/hahwul/goyo.git themes/goyo"

[[extra.easy_command_section.tabs]]
name = "More"
link = "/get_started/installation"

# Showcase Section
# Display tabbed content with images or text.
# Each tab can show either an image or text content (title + description).
[extra.showcase_section]
title = "Theme Showcase"
subtitle = "Explore different aspects of Goyo theme"

[[extra.showcase_section.tabs]]
name = "Documentation"
title = "Clean Documentation"
description = "Experience beautiful and readable documentation pages with Goyo's minimalist design approach."
image = "/writing/shortcodes/gallery/images/image1.jpeg"

[[extra.showcase_section.tabs]]
name = "Customization"
title = "Easy Customization"
description = "Customize your site with simple configuration options."
image = "/writing/shortcodes/gallery/images/image5.jpeg"

[[extra.showcase_section.tabs]]
name = "Multilingual"
title = "Multilingual Support"
description = "Built-in support for multiple languages."
image = "/writing/shortcodes/gallery/images/image6.jpeg"

# Social Proof Section
# Showcase testimonials from your users.
[extra.social_proof_section]
title = "What Our Users Say"
testimonials = [
    {
        author = "Jane Doe",
        role = "Developer at TechCorp",
        quote = "Goyo has transformed our documentation process. It's simple, elegant, and incredibly fast.",
        avatar = "/images/avatars/jane.png"
    },
    {
        author = "John Smith",
        role = "Project Manager at Innovate LLC",
        quote = "The best Zola theme for documentation out there. The setup was a breeze.",
        avatar = "/images/avatars/john.png"
    },
]

# Final Call to Action Section
# A final prompt for users before the footer.
# You can also add an image field to show an image above the CTA text.
[extra.final_cta_section]
title = "Ready to Get Started?"
description = "Begin your journey with Goyo today and create beautiful documentation with ease."
button = { text = "Start Now", url = "/get-started/installation/" }
image = "/images/contribute.png" # (Optional) Image above the CTA section
+++
```

## Sections

- **`hero`**: Main banner with title, description, background image, and CTA buttons
- **`features_section`**: Features grid with title, description, icon (Font Awesome)
- **`trust_section`**: Company/project logos
- **`easy_command_section`**: Tabbed commands with optional link tabs
- **`showcase_section`**: Tabbed content with images or text
- **`social_proof_section`**: User testimonials
- **`final_cta_section`**: Final call-to-action with optional image
