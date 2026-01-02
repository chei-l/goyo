+++
title = "Final CTA 섹션"
description = "사용자 참여를 유도하는 최종 행동 유도를 추가하세요."
weight = 8
taxonomies = { tags = ["goyo", "landing-page", "cta"], categories = ["guide"] }
+++

최종 행동 유도(CTA) 섹션은 푸터 바로 전, 랜딩 페이지 하단에 나타납니다. 방문자가 행동을 취하도록 유도하는 마지막 기회입니다.

## 구성

```toml
[extra.final_cta_section]
title = "시작할 준비가 되셨나요?"
description = "오늘 Goyo와 함께 여정을 시작하고 아름다운 문서를 쉽게 만들어보세요."
button = { text = "지금 시작하기", url = "/get-started/installation/" }
image = "/images/contribute.png" # 선택적 이미지
```

## 속성

- **`title`** (필수): CTA의 메인 제목
- **`description`** (필수): 가치 제안을 설명하는 보조 텍스트
- **`button`** (필수): 행동 유도 버튼
  - `text`: 버튼 레이블
  - `url`: 링크 대상
- **`image`** (선택): CTA 텍스트 위에 표시되는 이미지 경로

## 모범 사례

- 메시지를 명확하고 행동 지향적으로 유지하세요
- 설득력 있는 버튼 텍스트를 사용하세요 (예: "지금 시작", "시작하기", "무료로 사용해보기")
- 가장 중요한 전환 페이지(설치, 가입 등)로 링크하세요
- 이미지는 메시지를 강화하거나 시각적 미리보기를 보여줄 수 있습니다
- CTA가 페이지의 나머지 부분에서 돋보이도록 만드세요

## 예시

### 간단한 CTA
```toml
[extra.final_cta_section]
title = "오늘 바로 시작하세요"
description = "문서화를 위해 Goyo를 사용하는 수천 명의 개발자와 함께하세요."
button = { text = "시작하기", url = "/get-started/installation/" }
```

### 이미지가 있는 CTA
```toml
[extra.final_cta_section]
title = "Goyo에 기여하기"
description = "Goyo를 더 나아지게 도와주세요. 기여를 환영합니다!"
button = { text = "GitHub 보기", url = "https://github.com/hahwul/goyo" }
image = "/images/contribute.png"
```
