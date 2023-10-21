import { useEffect, useRef, useState } from "react";

import ReactDOM from "react-dom";

interface PortalProps {
    children: React.ReactNode;
    selector: string;
}

const Portal = ({ children, selector }: PortalProps) => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>(selector);
        setMounted(true);
    }, [selector]);

    return mounted && ref.current ? ReactDOM.createPortal(children, ref.current) : null;
};

export default Portal;
