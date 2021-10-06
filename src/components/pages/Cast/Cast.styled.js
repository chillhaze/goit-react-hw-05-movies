import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const CastInfo = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: white;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Actor = styled.li`
  max-width: 130px;
  transition: transform 300ms linear;
  box-shadow: 1px 3px 10px -4px #050505;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 17px 0px #313232;
    border-radius: 3px;
    transform: scale(1.02);
  }
`;

export const ActorAvatar = styled.img`
  min-height: 200px;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  padding: 5px 10px;
`;

export const ActorName = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Character = styled.p`
  font-size: 12px;
`;
