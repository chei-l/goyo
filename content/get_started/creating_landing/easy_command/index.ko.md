+++
title = "Easy Command 섹션"
description = "탭 인터페이스에서 설치 명령어나 코드 스니펫을 표시하세요."
weight = 5
taxonomies = { tags = ["goyo", "landing-page", "command"], categories = ["guide"] }
+++

Easy Command 섹션은 탭 인터페이스에서 명령어나 코드 스니펫을 표시하여 사용자가 선호하는 방법을 쉽게 선택할 수 있도록 합니다. 각 탭은 명령어(코드로 표시) 또는 링크(클릭 시 이동)를 표시할 수 있습니다.

## 구성

```toml
[extra.easy_command_section]
title = "쉬운 설치"
description = "선호하는 방법으로 몇 초만에 Goyo를 시작하세요"

# 명령어 탭 - 복사 버튼과 함께 코드 표시
[[extra.easy_command_section.tabs]]
name = "Git Clone"
command = "git clone https://github.com/hahwul/goyo.git themes/goyo"

# 또 다른 명령어 탭
[[extra.easy_command_section.tabs]]
name = "Git Submodule"
command = "git submodule add https://github.com/hahwul/goyo.git themes/goyo"

# 링크 탭 - 클릭 시 URL로 이동
[[extra.easy_command_section.tabs]]
name = "더보기"
link = "/get_started/installation"
```

## 속성

### 섹션 속성
- **`title`** (선택): 섹션 제목
- **`description`** (선택): 섹션 설명

### 탭 속성
- **`name`** (필수): 탭 레이블
- **`command`** (선택): 표시할 명령어 (코드 스니펫에 사용)
- **`link`** (선택): 이동할 URL ("더 알아보기" 탭에 사용)

참고: 각 탭은 `command` 또는 `link` 중 하나를 가져야 하며, 둘 다는 가질 수 없습니다.

## 사용 사례

- 설치 방법 (npm, yarn, git 등)
- 빠른 시작 명령어
- 다양한 프레임워크를 위한 코드 예제
- 상세 문서로의 링크
