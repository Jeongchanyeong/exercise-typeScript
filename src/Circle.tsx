import React from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  // optional props (required 여부 정해줌)
  borderColor?: string;
  text?: string | number;
}

const Circle = ({ bgColor, borderColor, text = "default" }: CircleProps) => {
  return (
    <>
      {/*  defalut값 보내는 방법       
      ContainerProps의 borderColor가 ?를 주지 않으면 무조건 string이어야 하는데 App.tsx에서 borderColor를 사용하고 있지 않기 때문에 undefined 값을 전달받기 때문에 에러가 생긴다.
      ?? "gray"는 undefined시 gray를 적용해라 라는 뜻
      */}
      <Container bgColor={bgColor} borderColor={borderColor ?? "gray"}>
        {text}
      </Container>
    </>
  );
};

export default Circle;

// 일일이 하나하나 타입을 지정해주지 않아도 interface 내부에 객체 값으로 타입값을 지정해주고 해당되는 element에 붙여주면 됨

//  interface는 object의 shape을 설명해준다.
