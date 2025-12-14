+++
title = "Configuration"
description = "Goyo의 설정 방법을 알아보세요."
weight = 4
sort_by = "weight"

[extra]
toc_expand = true
+++

`config.toml`에서 Goyo 테마를 설정합니다.

## 디자인 & 브랜딩

### 로고

새로운 구조화된 형식을 사용하여 사이트 로고를 설정하세요:

```toml
[extra.logo]
text = "Goyo"                              # 이미지 없을 때 텍스트
image_path = "images/goyo.png"             # 기본 로고 이미지 경로
image_padding = "5px"                      # 선택사항: padding
dark_image_path = "images/goyo-dark.png"   # 다크 테마용 로고 (선택사항)
light_image_path = "images/goyo-light.png" # 라이트 테마용 로고 (선택사항)
```

**테마별 로고:** `dark_image_path`와 `light_image_path`를 지정하면, 사용자가 다크/라이트 테마를 토글할 때 로고가 자동으로 전환됩니다. 지정하지 않으면 `image_path`가 두 테마 모두에 사용됩니다.

**레거시 형식 (하위 호환성 지원):**
```toml
[extra]
logo_text = "Goyo"                    # 이미지 없을 때 텍스트
logo_image_path = "images/goyo.png"   # 로고 이미지 경로
logo_image_padding = "5px"            # 선택사항: padding
```

### 푸터

```toml
[extra]
footer_html = "Powered by <a href='https://www.getzola.org'>Zola</a>"
```

## SEO & 소셜

### 썸네일

```toml
[extra]
default_thumbnail = "images/default_thumbnail.jpg"
```

### 트위터

```toml
[extra]
twitter_site = "@hahwul"
twitter_creator = "@hahwul"
```

### 구글 태그

```toml
[extra]
gtag = "G-XXXXXXXXXX"
```

## 네비게이션 & UI

### 컬러셋

```toml
[extra]
default_colorset = "dark"  # 옵션: "dark" 또는 "light"
```

### 폰트

기본값: **Pretendard** (한국어와 영어에 최적화)

**로컬 폰트:**
```toml
[extra]
custom_font_enabled = true
custom_font_name = "MyCustomFont"
custom_font_path = "fonts/mycustomfont.woff"
```

**구글 폰트:**
```toml
[extra]
custom_font_enabled = true
custom_font_name = "Roboto"
custom_font_path = "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
```

### 밝기

```toml
[extra]
brightness = "normal"  # 옵션: "darker", "normal", "lighter"
```

### 사이드바 확장 깊이

```toml
[extra]
sidebar_expand_depth = 2  # 1-5, 기본 확장 깊이
```

### 네비게이션

```toml
[extra]
nav = [
    { name = "Documents", url = "/introduction", type = "url", icon = "fa-solid fa-book" },
    { name = "GitHub", url = "https://github.com/hahwul/goyo", type = "url" },
    { name = "Links", type = "dropdown", members = [
        { name = "Blog", url = "https://www.hahwul.com", type = "url" },
    ] },
]

# 언어별 네비게이션 (선택사항)
nav_ko = [
    { name = "문서", url = "/ko/introduction", type = "url" },
]
```

### 언어 별칭

```toml
[extra]
lang_aliases = { en = "English", ko = "한국어", ja = "日本語" }
```

### 테마 토글 비활성화

```toml
[extra]
disable_theme_toggle = true  # 다크/라이트 모드 토글 숨김
```

### 루트 사이드바 숨기기 비활성화

```toml
[extra]
disable_root_sidebar_hide = false  # 랜딩 페이지에서 사이드바 표시
```

{{ image_diff(src1="/images/side-home.jpg", src2="/images/wide-home.jpg", alt="goyo") }}

## 콘텐츠 & 공유

### 편집 URL

```toml
[extra]
edit_url = "https://github.com/hahwul/goyo/edit/main"
```

각 페이지에 "Edit this page" 링크를 추가합니다.

### 공유 버튼

```toml
[extra]
enable_copy_url = true   # URL 복사 버튼
enable_share_x = true    # X 공유 버튼
```

### 댓글

```toml
[extra.comments]
enabled = true
system = "giscus"  # 또는 "utterances"
repo = "hahwul/goyo"
repo_id = "R_kgDOPHnqwg"
category = "General"
category_id = "DIC_kwDOPHnqws4CspmC"
```
