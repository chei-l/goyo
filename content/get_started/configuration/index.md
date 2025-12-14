+++
title = "Configuration"
description = "Learn how to configure Goyo."
weight = 4
sort_by = "weight"

[extra]
toc_expand = true
+++

Configure Goyo theme in `config.toml`.

## Design & Branding

### Logo

```toml
[extra]
logo_text = "Goyo"                    # Text when no image
logo_image_path = "images/goyo.png"   # Logo image path
logo_image_padding = "5px"            # Optional padding
```

### Footer

```toml
[extra]
footer_html = "Powered by <a href='https://www.getzola.org'>Zola</a>"
```

## SEO & Social

### Thumbnail

```toml
[extra]
default_thumbnail = "images/default_thumbnail.jpg"
```

### Twitter

```toml
[extra]
twitter_site = "@hahwul"
twitter_creator = "@hahwul"
```

### Google Tag

```toml
[extra]
gtag = "G-XXXXXXXXXX"
```

## Navigation & UI

### Color

```toml
[extra]
default_colorset = "dark"  # Options: "dark" or "light"
```

{{ image_diff(src1="images/dark.png" src2="images/light.png" alt="Dark and Light") }}

### Font

Default: **Pretendard** (optimized for Korean and English)

**Local font:**
```toml
[extra]
custom_font_enabled = true
custom_font_name = "MyCustomFont"
custom_font_path = "fonts/mycustomfont.woff"
```

**Google Fonts:**
```toml
[extra]
custom_font_enabled = true
custom_font_name = "Roboto"
custom_font_path = "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
```

### Brightness

```toml
[extra]
brightness = "normal"  # Options: "darker", "normal", "lighter"
```

{{ carousel(images=["images/darker.png", "images/normal.png", "images/lighter.png"]) }}

### Sidebar Expand Depth

```toml
[extra]
sidebar_expand_depth = 2  # 1-5, default expansion depth
```

### Navigation

```toml
[extra]
nav = [
    { name = "Documents", url = "/introduction", type = "url", icon = "fa-solid fa-book" },
    { name = "GitHub", url = "https://github.com/hahwul/goyo", type = "url" },
    { name = "Links", type = "dropdown", members = [
        { name = "Blog", url = "https://www.hahwul.com", type = "url" },
    ] },
]

# Language-specific (optional)
nav_ko = [
    { name = "문서", url = "/ko/introduction", type = "url" },
]
```

### Language Aliases

```toml
[extra]
lang_aliases = { en = "English", ko = "한국어", ja = "日本語" }
```

### Disable Theme Toggle

```toml
[extra]
disable_theme_toggle = true  # Hides dark/light mode toggle
```

### Disable Root Sidebar Hide

```toml
[extra]
disable_root_sidebar_hide = false  # Show sidebar on landing page
```

{{ image_diff(src1="/images/side-home.jpg", src2="/images/wide-home.jpg", alt="goyo") }}

## Content & Sharing

### Edit URL

```toml
[extra]
edit_url = "https://github.com/hahwul/goyo/edit/main"
```

Adds "Edit this page" link to each page.

### Share Buttons

```toml
[extra]
enable_copy_url = true   # Copy URL button
enable_share_x = true    # Share on X button
```

### Comments

```toml
[extra.comments]
enabled = true
system = "giscus"  # or "utterances"
repo = "hahwul/goyo"
repo_id = "R_kgDOPHnqwg"
category = "General"
category_id = "DIC_kwDOPHnqws4CspmC"
```
