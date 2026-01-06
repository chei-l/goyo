+++
title = "채팅 버블"
weight = 7
taxonomies = { tags = ["shortcodes", "chat", "ui"], categories = ["shortcodes"] }
+++

`chat_bubble` 숏코드는 아바타 이미지, 캐릭터 이름, 메시지 텍스트가 포함된 캐릭터 채팅 버블 컴포넌트를 생성합니다.

## 사용법

```jinja
{{/* chat_bubble(img="path/to/avatar.png", title="캐릭터 이름", body="메시지 텍스트") */}}
```

## 매개변수

- `img` (필수): 캐릭터 아바타 이미지 경로
- `title` (필수): 채팅 버블 위에 표시할 캐릭터 이름 또는 제목
- `body` (필수): 메시지 텍스트 내용 (Markdown 형식 지원)

## 예제

{{ chat_bubble(img="/writing/shortcodes/gallery/images/image1.jpeg", title="앨리스", body="카드의 모든 섹터를 읽지 못한 경우 어떻게 하나요? 카드나 리더에서 nonce를 추출하여 읽지 못한 섹터의 키를 검색한 다음 누락된 키를 계산할 수 있습니다. [더 알아보기](#).") }}

```jinja
{{/* chat_bubble(
  img="/writing/shortcodes/gallery/images/image1.jpeg",
  title="앨리스",
  body="카드의 모든 섹터를 읽지 못한 경우 어떻게 하나요? 카드나 리더에서 nonce를 추출하여..."
) */}}
```

## 기능

- **아바타 표시**: 왼쪽에 둥근 아바타 이미지 표시
- **캐릭터 이름**: 메시지 위에 캐릭터 이름 표시
- **Markdown 지원**: 메시지 본문에서 Markdown 형식 지원
- **테마 통합**: 다크/라이트 테마 설정에 자동으로 적응
- **반응형**: 모든 화면 크기에서 작동

## 참고사항

채팅 버블은 DaisyUI의 채팅 컴포넌트를 기본 왼쪽 정렬로 사용합니다. 메시지 본문은 Markdown을 지원하므로 메시지 내에 **굵은 텍스트**, *기울임꼴 텍스트*, 링크 및 기타 형식을 포함할 수 있습니다.
