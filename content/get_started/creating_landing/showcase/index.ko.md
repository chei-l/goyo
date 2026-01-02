+++
title = "Showcase 섹션"
description = "이미지 또는 텍스트 설명이 포함된 탭 콘텐츠를 표시하세요."
weight = 6
taxonomies = { tags = ["goyo", "landing-page", "showcase"], categories = ["guide"] }
+++

Showcase 섹션은 탭 콘텐츠를 표시하며, 각 탭에는 이미지 또는 텍스트 콘텐츠(제목 + 설명)가 표시됩니다. 프로젝트의 다양한 측면을 강조하는 데 완벽합니다.

## 구성

```toml
[extra.showcase_section]
title = "테마 쇼케이스"
subtitle = "Goyo 테마의 다양한 측면을 살펴보세요"

# 이미지가 있는 탭
[[extra.showcase_section.tabs]]
name = "문서화"
title = "깔끔한 문서화"
description = "Goyo의 미니멀한 디자인 접근 방식으로 아름답고 읽기 쉬운 문서 페이지를 경험하세요."
image = "/images/doc-preview.jpg"

# 텍스트만 있는 탭
[[extra.showcase_section.tabs]]
name = "커스터마이징"
title = "쉬운 커스터마이징"
description = "간단한 설정 옵션으로 사이트를 커스터마이징하세요. 복잡한 설정이 필요하지 않습니다."

# 이미지가 있는 또 다른 탭
[[extra.showcase_section.tabs]]
name = "다국어"
title = "다국어 지원"
description = "다국어에 대한 내장 지원."
image = "/images/multilingual.jpg"
```

## 속성

### 섹션 속성
- **`title`** (선택): 메인 섹션 제목
- **`subtitle`** (선택): 섹션 부제

### 탭 속성
- **`name`** (필수): 탭 레이블
- **`title`** (선택): 탭 패널에 표시되는 콘텐츠 제목
- **`description`** (선택): 콘텐츠 설명
- **`image`** (선택): 표시할 이미지 경로

참고: `image`가 제공되지 않으면 `title`과 `description`만 텍스트 콘텐츠로 표시됩니다.

## 사용 사례

- 스크린샷이 포함된 제품 기능
- 다양한 사용 사례 시나리오
- 전후 비교
- 단계별 가이드
- 플랫폼별 지침
