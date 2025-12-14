+++
title = "페이지 설정"
description = "Goyo에서 개별 페이지를 설정하는 방법을 배웁니다."
weight = 5
sort_by = "weight"

[extra]
toc_expand = true
badge = "NEW"
+++

front matter의 `[extra]` 섹션에서 개별 페이지를 설정합니다.

## 배지 표시

```toml
+++
title = "페이지 제목"

[extra]
badge = "NEW"  # 옵션: NEW, BETA, UPDATED, WIP
+++
```

## 목차

```toml
+++
title = "내 페이지"

[extra]
toc_expand = true  # false (기본값): 스크롤 시 자동 펼침
                   # true: 항상 펼침
+++
```

이 페이지는 TOC가 완전히 펼쳐진 상태로 모든 API 엔드포인트를 보여줍니다.

## 인증
인증에 대한 세부 정보...

## 엔드포인트
### GET /api/users
### POST /api/users
### DELETE /api/users

## 오류 코드
### 400 Bad Request
### 401 Unauthorized
### 404 Not Found
```

`toc_expand = true`를 사용하면 독자가 TOC에서 모든 엔드포인트와 오류 코드를 한 번에 볼 수 있어 API 참조를 쉽게 탐색할 수 있습니다.
