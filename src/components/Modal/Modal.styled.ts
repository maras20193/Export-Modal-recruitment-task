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
  width: 80%;
  max-width: 800px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  font-size: 18px;
  background-color: grey;
  padding: 10px;
`;
export const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
