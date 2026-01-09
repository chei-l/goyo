+++
title = "Members"
weight = 20
taxonomies = { tags = ["shortcodes", "members", "team"], categories = ["shortcodes"] }
+++

The `members` shortcode displays team members or contributors in a visually appealing card layout. Each member can have a name, photo, role, and description with markdown support. The shortcode supports both grid (card view) and line (horizontal card) layouts.

## Usage

```jinja
{%/* members() */%}
Name | Role | Image Path | Description
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about **responsive** web apps
Bob Wilson | Backend Engineer | ./member2.svg | Expert in *scalable* architecture
{%/* end */%}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `layout` | string | `"grid"` | Layout type: `"grid"` for card view or `"line"` for horizontal cards |
| `cols` | number | 3 | Number of columns in grid layout (1-6) |

### Member Data Format

Each member is defined on a single line with pipe (`|`) separators:

```
Name | Role | Image Path | Description
```

- **Name** (required): Member's name
- **Role** (optional): Member's role or title  
- **Image Path** (optional): Path to member's photo (relative or absolute URL)
- **Description** (optional): Brief description (supports markdown)

## Examples

### Basic Grid Layout (Default)

Display members in a 3-column grid with cards:

```jinja
{%/* members() */%}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines.
{%/* end */%}
```

{% members() %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines.
{% end %}

### Two Column Grid

Display members in a 2-column layout:

```jinja
{%/* members(cols=2) */%}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
{%/* end */%}
```

{% members(cols=2) %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
{% end %}

### Line Layout

Display members as horizontal cards (one per row):

```jinja
{%/* members(layout="line") */%}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications. With over 5 years of experience, Alice has worked on numerous projects ranging from small startups to large enterprises.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture. Bob has deep expertise in distributed systems and has built high-performance APIs handling millions of requests.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines. Carol ensures smooth deployments and maintains infrastructure across multiple cloud providers.
{%/* end */%}
```

{% members(layout="line") %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications. With over 5 years of experience, Alice has worked on numerous projects ranging from small startups to large enterprises.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture. Bob has deep expertise in distributed systems and has built high-performance APIs handling millions of requests.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines. Carol ensures smooth deployments and maintains infrastructure across multiple cloud providers.
{% end %}

### Without Images

Members without an image path will display a default avatar placeholder:

```jinja
{%/* members() */%}
David Lee | Security Specialist | | Ensures application security and compliance.
Emma Brown | Technical Writer | | Creates clear and comprehensive documentation.
{%/* end */%}
```

{% members() %}
David Lee | Security Specialist | | Ensures application security and compliance.
Emma Brown | Technical Writer | | Creates clear and comprehensive documentation.
{% end %}

### Minimal Information

You can display members with just names:

```jinja
{%/* members(cols=4) */%}
Alex Thompson
Sarah Miller
Michael Chen
Jessica Garcia
{%/* end */%}
```

{% members(cols=4) %}
Alex Thompson
Sarah Miller
Michael Chen
Jessica Garcia
{% end %}

## Design Features

- **Responsive**: Automatically adjusts from single column on mobile to multi-column on larger screens
- **Theme Support**: Seamlessly integrates with dark and light themes
- **Hover Effects**: Cards lift and change appearance on hover for better interactivity
- **Markdown Support**: Member descriptions support markdown formatting (bold, italic, links, etc.)
- **Flexible Layout**: Choose between grid or line layout based on your needs
- **Default Avatar**: Displays a clean placeholder icon when no image is provided
