import React, { Component } from 'react'
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {
//     return (
//         <div>
//             <h2>색상을 선택하세요.</h2>
//             <ColorConsumer>
//                 {({ actions }) => (
//                     <div style={{ display: 'flex' }}>
//                     {colors.map(color => (
//                         <div
//                             key={color}
//                             style={{
//                                 background: color,
//                                 width: '24px',
//                                 height: '24px',
//                                 cursor: 'pointer'
//                             }}
//                             onClick={() => actions.setColor(color)}
//                             onContextMenu={e => {
//                                 e.preventDefault();
//                                 actions.setSubcolor(color);
//                             }}
//                         />
//                     ))}
//                 </div>
//                 )}
//             </ColorConsumer>
//             <hr/>
//         </div>
//     )
// }

class SelectColors extends Component {
    // 15.4.2 static contextType 사용하기 (클래스형 컴포넌트)
    static contextType = ColorContext;

    handleSetColor = color => {
        // this.context를 통해 Context의 value를 가르킬 수 있게 됨.
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subColor => {
        this.context.actions.setSubColor(subColor);
    }
    render() {
        return (
            <div>
            <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                        // onClick={() => actions.setColor(color)}
                        // onContextMenu={e => {
                        //     e.preventDefault();
                        //     actions.setSubcolor(color);
                        // }}
                        onClick={() => this.handleSetColor(color)}
                        onContextMenu={e => {
                            e.preventDefault();
                            this.handleSetSubcolor(color);
                        }}
                    />
                ))}
            </div>
            <hr/>
        </div>
        )
    }
}

export default SelectColors;