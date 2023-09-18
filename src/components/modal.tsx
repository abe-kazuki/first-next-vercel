import {FC, cloneElement, ReactNode} from 'react';
import { Portal } from './portal';
import styled from 'styled-components';




const ContentWrapper = styled.div`
    background-color: white;
    box-sizing: border-box;
    border-radius: 8vmin;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vmin;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 80vmin;
    z-index: 2;
    > button {
        position: absolute;
        top: 4vmin;
        right: 4vmin;
    }
`;

const Content = styled.div`
    max-height: 80vmin;
    padding: 4vmin;
`;

const Title = styled.h1`
    font-size: 4vmin;
    margin: 3vmin auto 0;
`;

const Text = styled.p`
    color: #777;
    font-size: 2vmin;
    margin: 4vmin 0 0;
`;

type Props = {
    close: (e: any) => void;  // toggleModal を受け取る
    children: ReactNode;  // 子コンポーネントを受け取る
  };

export const Modal: FC<Props> = props => {
    console.log("Modalだよ")
    return (
      <Portal>
      <div className={"overlay"}>
        {cloneElement(props.children as any, {
              close: props.close
            })}
      </div>
      </Portal>
    );
  };

  export default Modal;