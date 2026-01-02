+++
title = "Trust 섹션"
description = "제품을 사용하는 회사나 프로젝트의 로고를 표시하세요."
weight = 4
taxonomies = { tags = ["goyo", "landing-page", "trust"], categories = ["guide"] }
+++

Trust 섹션은 제품을 신뢰하고 사용하는 회사, 조직 또는 프로젝트의 로고를 보여줍니다. 이를 통해 신뢰성과 사회적 증거를 구축합니다.

## 구성

```toml
[extra.trust_section]
title = "최고의 기업들이 신뢰합니다"
logos = [
    { src = "/images/logo1.svg", alt = "Company One" },
    { src = "/images/logo2.svg", alt = "Company Two" },
    { src = "/images/logo3.svg", alt = "Company Three" },
    { src = "/images/logo4.svg", alt = "Company Four" },
]
```

## 속성

### 섹션 속성
- **`title`** (선택): 섹션 제목

### 로고 속성
- **`src`** (필수): 로고 이미지 경로
- **`alt`** (필수): 접근성을 위한 대체 텍스트

## 모범 사례

- 더 나은 스케일링을 위해 가능한 한 SVG 형식의 로고를 사용하세요
- 로고가 배경과 좋은 대비를 이루는지 확인하세요
- 로고 크기를 일관되게 유지하세요
- 더 깔끔한 모습을 위해 단색 또는 간소화된 버전의 로고를 사용하세요
