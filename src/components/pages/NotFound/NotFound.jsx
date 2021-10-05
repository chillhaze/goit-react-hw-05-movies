import { Link } from 'react-router-dom';
import { NotFoundWrapper, Title, TitleNumber } from './NotFound.styled';

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <Title>
        <TitleNumber>404</TitleNumber>
        Page not found...
      </Title>

      <button type="button">
        <Link to="/">{`<< Back on home page`}</Link>
      </button>
    </NotFoundWrapper>
  );
}
