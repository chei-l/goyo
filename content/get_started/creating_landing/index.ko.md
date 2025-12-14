+++
title = "랜딩 페이지 만들기"
description = "Goyo로 현대적이고 기능이 풍부한 랜딩 페이지를 만드는 방법을 알아보세요."
weight = 3
sort_by = "weight"

[extra]
+++

`content/_index.md`에서 `landing.html` 템플릿으로 랜딩 페이지를 생성합니다.

## 설정 예시

모든 섹션은 선택사항입니다. 필요하지 않은 섹션은 생략하세요.

```toml
+++
template = "landing.html"
title = "Goyo"

[extra]
version = "v0.1.0"

# Hero 섹션
# 페이지 상단의 메인 섹션입니다.
[extra.hero]
title = "Goyo에 오신 것을 환영합니다!"
badge = "✨ Minimalist Documentation Theme"
description = "문서화를 위한 간단하고 깔끔한 Zola 테마입니다."
image = "/images/landing.jpg" # 배경 이미지
cta_buttons = [
    { text = "시작하기", url = "/get-started/installation/", style = "primary" },
    { text = "GitHub에서 보기", url = "https://github.com/your/repo", style = "secondary" },
]

# Features 섹션
# 주요 기능을 그리드 형태로 강조합니다.
# 섹션 제목과 설명을 설정합니다
[extra.features_section]
title = "주요 기능"
description = "깔끔하고 미니멀하며 콘텐츠에 집중"

[[extra.features_section.features]]
title = "문서 친화적"
desc = "깔끔한 문서 작성 경험을 제공합니다."
icon = "fa-solid fa-book"

[[extra.features_section.features]]
title = "심플한 디자인"
desc = "미니멀리즘을 추구하는 테마입니다."
icon = "fa-solid fa-minimize"

# Trust 섹션
# 당신을 신뢰하는 회사나 프로젝트의 로고를 보여줍니다.
[extra.trust_section]
title = "최고의 기업들이 신뢰합니다"
logos = [
    { src = "/images/logo1.svg", alt = "Company One" },
    { src = "/images/logo2.svg", alt = "Company Two" },
]

# Showcase 섹션
# 탭으로 구성된 이미지 또는 텍스트 컨텐츠를 표시합니다.
# 각 탭은 이미지 또는 텍스트 컨텐츠(제목 + 설명)를 표시할 수 있습니다.
[extra.showcase_section]
title = "테마 쇼케이스"
subtitle = "Goyo 테마의 다양한 측면을 살펴보세요"

[[extra.showcase_section.tabs]]
name = "문서화"
title = "깔끔한 문서화"
description = "Goyo의 미니멀한 디자인 접근 방식으로 아름답고 읽기 쉬운 문서 페이지를 경험하세요."
image = "/writing/shortcodes/gallery/images/image1.jpeg"

[[extra.showcase_section.tabs]]
name = "커스터마이징"
title = "쉬운 커스터마이징"
description = "간단한 설정 옵션으로 사이트를 커스터마이징하세요."
image = "/writing/shortcodes/gallery/images/image5.jpeg"

[[extra.showcase_section.tabs]]
name = "다국어"
title = "다국어 지원"
description = "다국어에 대한 내장 지원."
image = "/writing/shortcodes/gallery/images/image6.jpeg"

# Social Proof 섹션
# 사용자들의 추천사를 보여줍니다.
[extra.social_proof_section]
title = "사용자들의 평가"
testimonials = [
    {
        author = "Jane Doe",
        role = "TechCorp 개발자",
        quote = "Goyo는 우리의 문서화 프로세스를 완전히 바꾸어 놓았습니다. 간단하고, 우아하며, 믿을 수 없을 정도로 빠릅니다.",
        avatar = "/images/avatars/jane.png"
    },
    {
        author = "John Smith",
        role = "Innovate LLC 프로젝트 관리자",
        quote = "최고의 Zola 문서 테마입니다. 설정이 매우 쉬웠습니다.",
        avatar = "/images/avatars/john.png"
    },
]

# Final Call to Action 섹션
# 푸터 전 사용자에게 마지막으로 행동을 유도하는 섹션입니다.
[extra.final_cta_section]
title = "시작할 준비가 되셨나요?"
description = "오늘 Goyo와 함께 여정을 시작하고 아름다운 문서를 쉽게 만들어보세요."
button = { text = "지금 시작하기", url = "/get-started/installation/" }
image = "/images/contribute.png"
+++
```

## 섹션

- **`hero`**: 메인 배너 (제목, 설명, 배경 이미지, CTA 버튼)
- **`features_section`**: 기능 그리드 (제목, 설명, 아이콘 - Font Awesome)
- **`trust_section`**: 회사/프로젝트 로고
- **`showcase_section`**: 탭 형태의 이미지 또는 텍스트 콘텐츠
- **`social_proof_section`**: 사용자 추천사
- **`final_cta_section`**: 최종 행동 유도 (선택사항: 이미지 포함 가능)

- **`[extra.final_cta_section]`**: `title`, `description`, 그리고 `text`와 `url`을 가진 단일 `button`으로 구성된 마지막 클릭 유도 블록입니다.
    - `image` 필드를 추가하면 CTA 섹션에 이미지를 함께 보여줄 수 있습니다. 예시: `image = "/images/contribute.png"`
