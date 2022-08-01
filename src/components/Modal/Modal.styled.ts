import { motion } from "framer-motion";
import styled from "styled-components";

export const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(3px);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.secondary};

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 560px) {
    width: 80%;
  }
`;

export const Header = styled.div`
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 12px 10px;
`;
export const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
