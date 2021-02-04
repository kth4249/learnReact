import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  // 15.4.1 useContext Hook 사용하기 (함수형 컴포넌트)
  const { state } = useContext(ColorContext);
  
  return (
    // <ColorConsumer>
    //     {({state}) => (
    //         <>
    //             <div
    //                 style={{
    //                     width: '64px',
    //                     height: '64px',
    //                     background: state.color
    //                 }}
    //             />
    //             <div
    //                 style={{
    //                     width: '32px',
    //                     height: '32px',
    //                     background: state.subcolor
    //                 }}
    //             />
    //         </>
    //     )}
    // </ColorConsumer>
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
