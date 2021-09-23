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

export const MoviesPageContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 1px 3px 10px -4px #050505;
`;

export const SearchForm = styled.form`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #aba7a7;
  border-radius: 3px;
  /* box-shadow: 1px 3px 10px -4px #050505; */
  overflow: hidden;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  :placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  ::hover {
    opacity: 1;
  }
`;

export const SearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const List = styled.ul`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ListItem = styled.li`
  max-width: 180px;
  /* border: 1px solid #222222; */
  box-shadow: 1px 3px 10px -4px #050505;
`;

export const MovieImg = styled.img`
  min-width: 180px;
  width: 100%;
  height: 270px;
`;

export const MovieName = styled.p`
  overflow: hidden;
  /* margin-top: 10px; */
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  font-weight: 600;
`;
