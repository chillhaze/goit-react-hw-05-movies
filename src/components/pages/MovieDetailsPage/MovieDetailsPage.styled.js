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

export const Movie = styled.div`
  padding: 10px;
  @media (max-width: 550px) {
    padding: 10px 5px;
  }
  margin-top: 10px;
  background-color: white;
  box-shadow: 1px 3px 10px -4px #050505;
`;

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin-bottom: 10px;
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  padding: 10px 30px;
  @media (max-width: 550px) {
    padding: 10px 10px;
  }
`;

export const Title = styled.h2`
  text-align: left;
  @media (max-width: 550px) {
    text-align: center;
  }
  margin-bottom: 10px;
  font-size: 34px;
  font-weight: 900;
  line-height: 50px;
  border-bottom: 1px solid #ede9e9;
`;

export const SubTitle = styled.h3`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 900;
  line-height: 30px;
`;

export const Info = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 700px) {
    padding-bottom: 10px;
    flex-direction: column;
    border-bottom: 1px solid #ede9e9;
  }
`;

export const InfoItem = styled.div`
  /* display: flex;
  flex-direction: column;
  margin-top: 15px; */
`;

export const Accent = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const MovieImg = styled.img`
  align-content: flex-start;
  height: 350px;
  box-shadow: 1px 3px 17px -1px #050505;
`;
export const LinksWrapper = styled.div`
  margin-top: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ede9e9;
  font-weight: 600;
`;
