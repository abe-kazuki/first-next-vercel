import ReactDOM from "react-dom";
import {FC, cloneElement, ReactNode} from 'react';

type PortalProps = {
    children: ReactNode;
  };
  

export const Portal: FC<PortalProps> = ({ children }) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#root');
      if (!element) {
        console.error("#root element not found");
        return null;
      }
      return element ? ReactDOM.createPortal(children, element) : null;
    }
    return null;
  };
