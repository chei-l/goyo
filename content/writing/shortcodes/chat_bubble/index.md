+++
title = "Chat Bubble"
weight = 7
taxonomies = { tags = ["shortcodes", "chat", "ui"], categories = ["shortcodes"] }
+++

The `chat_bubble` shortcode creates a character chat bubble component with an avatar image, character name, and message text.

## Usage

```jinja
{{/* chat_bubble(img="path/to/avatar.png", title="Character Name", body="Message text here") */}}
```

## Parameters

- `img` (required): Path to the character's avatar image
- `title` (required): Character name or title to display above the chat bubble
- `body` (required): Message text content (supports Markdown formatting)

## Example

{{ chat_bubble(img="/writing/shortcodes/gallery/images/image1.jpeg", title="Alice", body="What if not all sectors of the card were read? You can try to retrieve the keys for the unread sectors by extracting nonces from the card or the reader, and then calculate the missing keys. [Learn more](#).") }}

```jinja
{{/* chat_bubble(
  img="/writing/shortcodes/gallery/images/image1.jpeg",
  title="Alice",
  body="What if not all sectors of the card were read? You can try to retrieve the keys..."
) */}}
```

## Features

- **Avatar Display**: Shows a rounded avatar image on the left
- **Character Name**: Displays the character's name above the message
- **Markdown Support**: Message body supports Markdown formatting
- **Theme Integration**: Automatically adapts to dark/light theme settings
- **Responsive**: Works on all screen sizes

## Notes

The chat bubble uses DaisyUI's chat component with default left alignment. The message body supports Markdown, allowing you to include **bold text**, *italic text*, links, and other formatting within the message.
