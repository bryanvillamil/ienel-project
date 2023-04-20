import styled from 'styled-components'

export const CustomButton = styled.button`
  display: flex;
  cursor: pointer;
  padding: 12px 15px;
  background: ${props => props.theme.colors.colorPrimary};
  transition: all 0.5s ease;
  border-radius: 5px;
  margin: 0;
  border: 0;
  margin-top: 20px;
  text-align: center;
  box-shadow: 1px 4px 8px #333;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
`;