"use client";

import { Box, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const BackModal = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { back } = useRouter();

  const closeHandler = () => {
    setIsOpen(false);
    back();
  };

  return (
    <Modal open={isOpen} onClose={closeHandler}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
