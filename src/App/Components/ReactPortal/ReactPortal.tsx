import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
  containerId: string;
  children: ReactNode;
}

const ReactPortal: React.FC<PortalProps> = ({ containerId, children }) => {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
};

export default ReactPortal;
