+++
title = "Chat Bubble"
weight = 7
taxonomies = { tags = ["shortcodes", "chat", "ui"], categories = ["shortcodes"] }
+++

The `chat_bubble` shortcode creates a character chat bubble component with an avatar image and message text.

## Usage

```jinja
{{/* chat_bubble(img="path/to/avatar.png", msg="Message text here") */}}
```

## Parameters

- `img` (required): Path to the character's avatar image
- `msg` (required): Message text content (supports Markdown formatting)
- `author` (optional): Author name to display below the avatar image
- `align` (optional): Chat bubble alignment - `"start"` for left (default) or `"end"` for right

## Examples

### Left-aligned (default)

{{ chat_bubble(img="/writing/shortcodes/gallery/images/image1.jpeg", author="Alice", msg="What if not all sectors of the card were read? You can try to retrieve the keys for the unread sectors by extracting nonces from the card or the reader, and then calculate the missing keys. [Learn more](#).") }}

```jinja
{{/* chat_bubble(
  img="/writing/shortcodes/gallery/images/image1.jpeg",
  author="Alice",
  msg="What if not all sectors of the card were read? You can try to retrieve the keys..."
) */}}
```

### Right-aligned

{{ chat_bubble(img="/writing/shortcodes/gallery/images/image1.jpeg", author="Bob", align="end", msg="You can also align the chat bubble to the right side.") }}

```jinja
{{/* chat_bubble(
  img="/writing/shortcodes/gallery/images/image1.jpeg",
  author="Bob",
  align="end",
  msg="You can also align the chat bubble to the right..."
) */}}
```

## Features

- **Avatar Display**: Shows a rounded avatar image
- **Flexible Alignment**: Position avatar on left (default) or right side
- **Author Name**: Optionally displays the author's name below the avatar
- **Markdown Support**: Message content supports Markdown formatting
- **Theme Integration**: Automatically adapts to dark/light theme settings
- **Responsive**: Works on all screen sizes

## Notes

The chat bubble uses DaisyUI's chat component. Use `align="start"` (default) for left-aligned bubbles or `align="end"` for right-aligned bubbles. The message content supports Markdown, allowing you to include **bold text**, *italic text*, links, and other formatting within the message.
