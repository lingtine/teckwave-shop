import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

function Modal() {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  }, []);
  return mounted && ref.current
    ? createPortal(
        <div className="h">hjfsadfbilábfábilfbáidbfáilbfíabdf</div>,
        ref.current
      )
    : null;
}
export default Modal;
