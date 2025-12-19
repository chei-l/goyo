+++
title = "콘텐츠 생성하기"
description = "Goyo로 페이지를 만드는 방법을 알아보세요."
weight = 2
taxonomies = { tags = ["goyo", "zola"], categories = ["guide"] }
+++

`content` 디렉토리에 콘텐츠를 생성합니다. Goyo는 콘텐츠 구조에 따라 사이드바를 자동으로 생성합니다.

## Page

`./content/hello_world/index.md`를 생성합니다:

```markdown
+++
title = "Hello World"
weight = 1

[extra]
+++

# Hello World에 오신 것을 환영합니다

마크다운 콘텐츠를 작성하세요.
```

## Section

섹션은 여러 페이지를 포함합니다. 다음 구조를 생성합니다:

```
content/list/
├── _index.md       # 섹션 인덱스
├── first/
│   └── index.md    # 첫 번째 페이지
└── second/
    └── index.md    # 두 번째 페이지
```

**`_index.md`:**
```markdown
+++
title = "List"
sort_by = "weight"
+++
```

**`first/index.md`:**
```markdown
+++
title = "First"
weight = 1
+++

# 첫 번째 페이지
```

**`second/index.md`:**
```markdown
+++
title = "Second"
weight = 2
+++

# 두 번째 페이지
```

## 페이지 설정

front matter의 `[extra]` 섹션에서 개별 페이지를 설정합니다.

### 배지 표시

페이지에 시각적 표시를 추가합니다:

```toml
+++
title = "페이지 제목"

[extra]
badge = "NEW"  # 옵션: NEW, BETA, UPDATED, WIP
+++
```

### 목차

목차 표시 방식을 제어합니다:

```toml
+++
title = "내 페이지"

[extra]
toc_expand = true  # false (기본값): 스크롤 시 자동 펼침
                   # true: 항상 펼침
+++
```

### 분류체계(Taxonomies)

태그와 카테고리를 추가하여 콘텐츠를 구성합니다:

```toml
+++
title = "페이지 제목"
taxonomies = { tags = ["goyo", "zola"], categories = ["가이드"] }
+++
```

## 예제: 완전한 페이지

모든 설정 옵션을 보여주는 완전한 예제입니다:

```markdown
+++
title = "완전한 예제"
description = "사용 가능한 모든 설정을 보여주는 페이지"
weight = 3
taxonomies = { tags = ["예제", "튜토리얼"], categories = ["문서"] }

[extra]
badge = "NEW"
toc_expand = false
+++

# 완전한 예제

이 페이지는 Goyo에서 사용할 수 있는 모든 설정 옵션을 보여줍니다.

## 소개

적절한 front matter 설정이 있는 콘텐츠입니다.

## 기능

- 사이드바의 배지 표시
- 태그와 카테고리로 구성
- 커스텀 목차 동작
```
