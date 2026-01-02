+++
title = "Social Proof Section"
description = "Showcase user testimonials and reviews."
weight = 7
taxonomies = { tags = ["goyo", "landing-page", "testimonials"], categories = ["guide"] }
+++

The social proof section displays testimonials from your users, helping build trust and credibility. Each testimonial includes the author's name, role, quote, and optional avatar.

## Configuration

```toml
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
    {
        author = "Alice Johnson",
        role = "Technical Writer",
        quote = "Clean design and easy to use. Perfect for our documentation needs."
    },
]
```

## Properties

### Section Properties
- **`title`** (optional): Section heading

### Testimonial Properties
- **`author`** (required): Name of the person giving the testimonial
- **`role`** (required): Job title or role
- **`quote`** (required): Testimonial text
- **`avatar`** (optional): Path to avatar image

## Best Practices

- Keep quotes concise and impactful
- Use real testimonials when possible
- Include diverse perspectives (developers, managers, writers)
- Add avatars for a more personal touch
- Showcase specific benefits or features mentioned
