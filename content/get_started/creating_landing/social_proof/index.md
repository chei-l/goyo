+++
title = "Social Proof Section"
description = "Showcase user testimonials and reviews."
weight = 7
taxonomies = { tags = ["goyo", "landing-page", "testimonials"], categories = ["guide"] }
+++

The social proof section displays testimonials from your users in a clean, minimalist card layout, helping build trust and credibility. Each testimonial features a centered profile picture, name, role, and quote in a simple, elegant design.

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

## Design Features

- **Clean card layout**: Simple, minimalist design without distractions
- **Centered content**: Profile pictures, names, and roles are centered for a clean look
- **Responsive grid**: Cards automatically arrange in a flexible grid that centers properly on all screen sizes
- **Avatar-first design**: Profile pictures are prominently displayed at the top of each card

## Best Practices

- Keep quotes concise and impactful (2-3 sentences work best)
- Use real testimonials when possible
- Include diverse perspectives (developers, managers, writers)
- Always add avatars for a more personal and trustworthy touch
- Showcase specific benefits or features mentioned
- Aim for 3-6 testimonials for optimal visual balance
