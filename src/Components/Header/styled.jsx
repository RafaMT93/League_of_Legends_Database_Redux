import styled from 'styled-components';

export const WrapperHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  height: 4rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  font-weight: bold;
`;
