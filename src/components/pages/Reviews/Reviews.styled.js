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

export const ReviewInfo = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: white;
`;

export const ReviewList = styled.ul``;

export const Review = styled.li`
  margin-bottom: 20px;
  padding: 10px 30px;
  @media (max-width: 550px) {
    padding: 10px 10px;
  }
  border-bottom: 1px solid #ede9e9;
`;

export const Author = styled.p`
  padding: 10px 0;
`;
export const Content = styled.p`
  font-style: italic;
`;
export const ReviewAccent = styled.span`
  line-height: 24px;
  font-weight: 600;
  margin-left: 5px;
`;
