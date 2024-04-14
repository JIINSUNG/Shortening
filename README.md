# 심플한 URL 단축기, 쇼트닝

## 0. 서비스 소개
- 서비스 링크 : https://jisshortening.netlify.app/
- 쇼트닝은 긴 URL을 짧은 URL로 보기 쉽게 만들어주는 서비스입니다.
- 쇼트닝은 무료 서비스이며 광고가 없습니다
- 쇼트닝은 회원가입 필요없이 누구나 바로 서비스 이용이 가능합니다.
- 쇼트닝은 Web기반 서비스로 모바일, 태블릿, PC 모든 플랫폼을 지원합니다.

## 1. 제공 기능
- 긴 URL을 짧은 URL로 보기 쉽게 전환
- 변환한 URL로 접속시 기존 URL로 리다이렉팅 시켜주는 기능 제공 

![image](https://github.com/JIINSUNG/Shortening/assets/49591292/07d0137c-5604-4d89-b4d4-62a99b7c3ffb)

## 2. 기술 스택
- Next.js
  
![image](https://github.com/JIINSUNG/Shortening/assets/49591292/fbba8ecd-a0db-47c9-a2d1-7704a59a3c67)
- Typescript
- CSS Module
- Maria DB

## 3. 배포
- Netlify (Next.js 배포)
- Filess.io (Maria db 호스팅) (https://filess.io/)

## 4. 개선할 점
- 이미 변환이 완료된 URL이 있다면 같은 URL을 전달하는 기능을 고려중이에요
- URL생성중 희박한 확률이지만 이미 만들어진 기존 URL과 충돌할 수 있는 문제점이 있어요, 이 문제를 해결할 예정이에요
