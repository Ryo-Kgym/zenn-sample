"use client";

import { Modal } from "@mantine/core";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export const BackModal = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { back } = useRouter();

  const closeHandler = () => {
    setIsOpen(false);
    back();
  };

  return (
    <Modal opened={isOpen} onClose={closeHandler}>
      {children}
    </Modal>
  );
};
