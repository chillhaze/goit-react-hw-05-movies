import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #222222;
  box-shadow: 1px 3px 10px -4px #050505;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.h1`
  font-weight: 900;
  cursor: pointer;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  margin: 0px 10px 0px 0px;
  padding: 5px 15px 5px 15px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  /* box-shadow: 1px 3px 10px -4px #050505; */

  &:hover,
  &:focus {
    background-color: #0b6e6e;
    color: white;
  }
  @media (max-width: 550px) {
    margin: 0px 0px 5px 0px;
  }
`;
