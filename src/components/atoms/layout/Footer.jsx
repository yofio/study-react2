import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  text-align: center;
  color: #fff;
  padding: 8px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
