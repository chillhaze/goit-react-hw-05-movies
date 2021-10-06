import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWrapper = styled.div``;

export const PersonContainer = styled.div`
  width: 80%;
  height: 90%;

  margin-top: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 1px 3px 10px -4px #050505;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  & > img {
    max-height: 500px;
  }
`;
export const Name = styled.h1`
  padding: 10px 5px;
  line-height: 42px;
  font-size: 28px;
  font-weight: bold;
  border-bottom: 1px solid #ede9e9;
`;

export const FullDate = styled.div`
  display: flex;
`;
export const BirthDate = styled.p`
  margin-top: 10px;
  padding: 10px;
`;
export const PlaceOfBirth = styled.p`
  margin-top: 10px;
  padding: 10px;
`;
export const DeathDate = styled.p`
  margin-top: 10px;
  padding: 10px;
`;
export const Biography = styled.p`
  font-size: 14px;
  margin-top: 10px;
  padding: 10px;
`;
