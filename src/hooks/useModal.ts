import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return { isModalOpen, handleModalClose, handleModalOpen };
};
