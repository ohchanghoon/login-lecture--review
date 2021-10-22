# DOCKER HUB 안에있는 node:14 이미지 사용
FROM node:14

# 사용자 명시
MAINTAINER 오창훈 <dhckdgns3@naver.com>

# 이미지안에 애플리케이션 코드를 넣기 위한 디렉터리 생성
# RUN mkdir /LOGIN

# 애플리케이션의 작업 dir
WORKDIR /LOGIN

# RUN mkdir ./app

# 이미지에 node.js와 npm은 설치되어 있으므로 npm바이너리로 앱 의존성만 설치
COPY ./app/package*.json ./app/

WORKDIR /app

COPY ./app /app/

RUN npm install

EXPOSE 5500