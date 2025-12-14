+++
title = "콘텐츠 생성하기"
description = "Goyo로 페이지를 만드는 방법을 알아보세요."
weight = 2
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
