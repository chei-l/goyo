+++
title = "개요"
description = "섹션 순서 및 기본 랜딩 페이지 설정에 대해 알아보세요."
weight = 1
taxonomies = { tags = ["goyo", "landing-page", "overview"], categories = ["guide"] }
+++

## 기본 설정

랜딩 페이지를 만들려면 `content/_index.md`에서 템플릿을 설정하세요:

```toml
+++
template = "landing.html"
title = "Goyo"
+++
```

## 섹션 순서

기본적으로 섹션은 다음 순서로 렌더링됩니다: `hero`, `features`, `trust`, `easy_command`, `showcase`, `social_proof`, `final_cta`.

`section_order`를 사용하여 순서를 커스터마이징할 수 있습니다:

```toml
[extra]
# 커스텀 순서 - 섹션이 이 순서대로 렌더링됩니다
section_order = ["hero", "features", "showcase", "trust", "social_proof", "final_cta"]

# 특정 섹션을 완전히 생략할 수도 있습니다
section_order = ["hero", "features", "final_cta"]
```

사용 가능한 섹션 이름: `hero`, `features`, `trust`, `easy_command`, `showcase`, `social_proof`, `final_cta`

## 선택적 섹션

모든 섹션은 선택사항입니다. 필요하지 않은 섹션의 구성을 생략하면 됩니다. 예를 들어, 설정에 `[extra.trust_section]`을 포함하지 않으면 trust 섹션이 표시되지 않습니다.
