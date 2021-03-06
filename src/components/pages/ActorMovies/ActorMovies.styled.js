import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 1px 3px 10px -4px #050505;
`;

export const Title = styled.h2`
  /* padding: 20px 0; */
  line-height: 42px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #ede9e9;
`;

export const List = styled.ul`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 550px) {
    gap: 10px;
  }
`;

export const ListItem = styled.li`
  max-width: 180px;
  min-width: 160px;
  transition: transform 300ms linear;

  box-shadow: 1px 3px 10px -4px #050505;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 17px 0px #313232;
    border-radius: 3px;
    transform: scale(1.02);
  }
  /* @media (max-width: 550px) {
    max-width: 160px;
    min-width: 130px;
  } */
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 270px;
  /* @media (max-width: 550px) {
    height: 220px;
  } */
`;
export const MovieName = styled.p`
  /* margin-top: 10px; */
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  font-weight: 600;
  @media (max-width: 550px) {
    padding: 5px 0;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    font-weight: 600;
  }
`;
