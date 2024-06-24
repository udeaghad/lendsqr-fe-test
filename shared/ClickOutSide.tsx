import { ClickOutSideProps } from "../types";

const ClickOutSide = ({
  listening,
  menuRef,
  setListening,
  setIsOpen,
}: ClickOutSideProps) => {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        const cur = menuRef.current;
        const node = evt.target as Node;
        if (cur?.contains(node)) return;
        setIsOpen(false);
      });
    });
  };
};

export default ClickOutSide;
