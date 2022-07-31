import { Button, Modal } from "../../components";
import { useModal } from "../../hooks";
import { Form } from "./components";
import * as S from "./Dashboard.styled";

export const Dashboard = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <S.Wrapper>
      <Button.Primary uppercase onClick={handleModalOpen}>
        Toggle Modal
      </Button.Primary>
      <Modal
        title="Export report"
        isOpen={isModalOpen}
        onClose={handleModalClose}
      >
        <Form closeModal={handleModalClose} />
      </Modal>
    </S.Wrapper>
  );
};
