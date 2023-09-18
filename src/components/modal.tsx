import {FC, cloneElement, ReactNode} from 'react';
import { Portal } from './portal';
import styled from 'styled-components';


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