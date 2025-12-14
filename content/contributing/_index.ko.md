+++
title = "기여하기"
description = "Goyo에 기여하는 방법"
weight = 7
sort_by = "weight"

[extra]
+++

Goyo에 기여해주셔서 감사합니다!

## 기여 방법

- [GitHub 이슈](https://github.com/hahwul/goyo/issues/new)로 버그 리포트
- 기능 제안
- 문서 개선
- 풀 리퀘스트 제출
- Goyo 사이트 공유

## 설정

사전 요구사항: Zola v0.21.0+, Just, Git

```bash
# 포크 및 클론
git clone https://github.com/YOUR-USERNAME/goyo.git
cd goyo

# 의존성 설정
cd /tmp
curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
chmod +x tailwindcss && mv tailwindcss ../goyo/src/
cd ../goyo
curl -sLo src/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
curl -sLo src/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js

# 빌드 및 실행
just build
just dev  # http://127.0.0.1:1111
```

## 가이드라인

**코드:**
- 기존 패턴 따르기
- 간단하게 유지
- 로컬 테스트
- 명확한 커밋 메시지

**문서:**
- 명확한 언어
- 예제 제공
- 다국어 지원

**테마:**
- 반응성 테스트
- 다크/라이트 모드 확인
- 접근성 유지

## 풀 리퀘스트 제출

```bash
git checkout -b feature/your-feature
# 변경 작업
just build && zola check --skip-external-links
git commit -m "Add feature: description"
git push origin feature/your-feature
```

[github.com/hahwul/goyo](https://github.com/hahwul/goyo)에서 PR 열기

**PR 가이드라인:**
- PR당 하나의 기능
- 명확한 설명
- 이슈 참조 (예: "Fixes #123")
- 피드백에 열린 자세

## 일반 작업

```bash
just build                          # 사이트 빌드
just dev                            # 개발 서버
zola check --skip-external-links    # 링크 확인
rm -rf public                       # 빌드 정리
```

## 테스트

- 오류 없이 빌드
- 내부 링크 확인
- 브라우저에서 테스트
- 다크/라이트 모드 확인
- 다국어 테스트 (해당되는 경우)

## 도움 받기

- [GitHub 이슈](https://github.com/hahwul/goyo/issues)
- [문서](https://goyo.hahwul.com)

Goyo에 기여해 주셔서 감사합니다! ❤️
