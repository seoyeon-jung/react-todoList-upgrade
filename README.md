# React로 TodoList 만들기
### 2022.12.13 ~ 2022.12.14
- React로 TodoList 만들기
- [이전 과제](https://github.com/seoyeon-jung/react-todolist)를 `react-router-dom`, `styled-components`, `redux`를 사용해서 다시 만들어보기
- 내일배움캠프 4기 리액트 숙련과정 개인 과제
<br>
<br>

## 사용한 기술 스택  
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<br>
<br>

## 완성된 페이지
- [오늘 뭐하지?🤔](https://react-todo-list-upgrade.vercel.app/)  << 완성된 페이지 보러가기
- 실제 구현 모습
![오늘-뭐하지__-Chrome-2022-12-14-17-53-33](https://user-images.githubusercontent.com/95006849/207551159-afa54e25-162c-45ab-895e-bd87b23e90a1.gif)

<br>
<br>

## Requirement
- **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.**
- todos 모듈은 `**Ducks 패턴**`으로 구현합니다.
- **메인 페이지**
    - 디자인과 화면 구성은 자유롭게 구현합니다.
    - Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현
    - Todo를 추가하면  제목 input과 내용 input은 다시 빈 값이 되도록 구현합니다.
    - input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현합니다.
    - todo의 완료상태**가 `true`**이면**,** 상태 버튼의 라벨을 **“취소”,  `false`** 이면 라벨을 “**완료”** 로 보이도록 구현합니다.
    - 전체 화면의 **최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한**하고, **컨텐츠를 화면의 가운데로 배치** 합니다.
    - 상세보기 클릭하면 Todo의 상세 페이지로 이동합니다. 
- **상세 페이지**
  - 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
    - Todo의 ID
    - Todo의 제목
    - Todo의 내용
    - `이전으로` 버튼
        - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.
- **제한사항**
    - map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
    - Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.
<br>
<br>

## 폴더 구조
![KakaoTalk_20221214_172232670](https://user-images.githubusercontent.com/95006849/207543588-1efbc554-8984-4ee8-bacc-4c341a4ff828.jpg)
<br>
<br>

## Error Log
- `자세히 보기` 클릭 시 id의 페이지로 넘어가지 않는 문제

![image](https://user-images.githubusercontent.com/95006849/207544251-3f5908d3-9906-458f-b31f-2d8f40fd155d.png)

=> `modules` 안에 있는 `Todos.jsx` 파일의 코드인데, 처음에는 `todos`만 작성하고, 초기값으로 사용할 `todo`를 작성하지 않았음

=> 그래서 `todo`를 추가하고 나니 Detail.jsx 파일에서 id 값을 받아 페이지를 이동할 수 있었다

```javascript
const todo = useSelector((state) => state.todos.todo);
// 이 부분이 제대로 작동 (콘솔창에 찍어봤음)
```
