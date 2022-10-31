# 1만 시간의 법칙 <img src="https://img.shields.io/badge/HTML5-red"> <img src="https://img.shields.io/badge/Scss-pink"> <img src="https://img.shields.io/badge/JavaScript-yellow">

## 프로젝트 소개

"1만 시간의 법칙"은 어떤 분야의 전문가가 되기 위해서는 최소한 1만 시간의 훈련이 필요하다는 법칙이다.

"1만 시간의 법칙"에서 말하는 기준에 부합하는 전문가가 되기 위해서 하루에 몇 시간을 공부하면 될지, 몇 일이 소요될지 계산해주는 웹페이지 입니다.

![image](https://user-images.githubusercontent.com/90930391/198871992-a7eb023f-84ce-4fbb-b8b0-2cf487a1a7ca.png)

## 개발 기간

- 2022/09/12 ~ 2022/10/31

### 개발 환경

- HTML5
- Sass
- JavaScript

## 주요 기능

1. 되고 싶은 전문 분야와 하루 공부 시간을 입력란에 작성합니다.

![image](https://user-images.githubusercontent.com/90930391/198872149-7c2ae2be-3d46-4d85-83e2-3c7df4d19bbb.png)

- 전문 분야를 입력시 "한글, 영문, 숫자"만이 허용됩니다.

- 하루 공부 시간을 입력시 "1이상 24미만의 숫자"만 입력이 허용됩니다.

- 위 허용 사항을 지키지 않은 입력 내용에 대해서는 입력창의 경계를 빨간색으로 표시하여 사용자에게 입력내용에 문제가 있음을 알려줍니다.

2. "나는 며칠 동안 훈련을 해야 1만 시간이 될까?" 버튼을 클릭한다.

![image](https://user-images.githubusercontent.com/90930391/198872130-70a27fb9-0bca-4fab-9e57-96dd3d3c4f35.png)

- 입력 내용 중 누락되거나 허용되지 않는 범주의 입력값이 주어진 경우, 알림창 팝업을 띄워줍니다.

3. 하루 훈련 시간을 입력하면 예상되는 입력한 전문 분야가 1만 시간이 되는 훈련 일수를 표시하여 줍니다.

![image](https://user-images.githubusercontent.com/90930391/198872215-7f75489f-87dd-4d9a-abde-4eadd8a49680.png)

4. "훈련하러 가기 GO!GO!"를 클릭하면 Modal 창이 나타납니다.

![image](https://user-images.githubusercontent.com/90930391/198872250-e93269f7-5e8c-4f90-ac5b-add856a46c4f.png)

5. "종료하고 진짜 운련하러 가기 GO!GO!" 버튼을 클릭하면 Modal창이 닫히고, 브라우저의 새 창에 인프런 강좌(https://www.inflearn.com/course/1%EB%A7%8C%EC%8B%9C%EA%B0%84-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%9C%EC%9E%91) 가 연결됩니다.

6. Modal 창 밖의 blur 처리된 공간을 클릭하면 Modal 창이 사라지고 결과 section은 그대로 유지됩니다.

7. 새로고침을 하는 경우 입력 내용이 모두 초기화됩니다.
