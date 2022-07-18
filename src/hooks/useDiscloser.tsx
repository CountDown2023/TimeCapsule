import { useState } from "react";

const useDiscloser = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const setOpen = () => {
    setIsOpen(true);
  };

  const setClose = () => {
    setIsOpen(false);
  };

  const setToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, setOpen, setClose, setToggle };
};

export default useDiscloser;
