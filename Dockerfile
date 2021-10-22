# DOCKER HUB 안에있는 node:14 이미지 사용
# 어떤 이미지로부터 새로운 이미지를 생성할지 지정
FROM node:14

# Dockerfile을 생성 / 관리하는 사람
MAINTAINER 오창훈 <dhckdgns3@naver.com>

# /app 디렉토리 생성
RUN mkdir -p /app

# /app 디렉토리를 WORKDIR로 설정
WORKDIR /app

ADD . /app

RUN npm install

ENV NODE_ENV development

EXPOSE 5500

CMD ["npm", "start"]
# 이미지에 node.js와 npm은 설치되어 있으므로 npm바이너리로 앱 의존성만 설치
# COPY ./app/package*.json ./app/

# WORKDIR /app

# COPY ./app /app/

# RUN npm install

# EXPOSE 5500