import Loader from 'react-loader-spinner';
import { LoaderWrapper } from './LoaderElement.styled';

export const LoaderElement = () => {
  return (
    <LoaderWrapper>
      <Loader
        type="TailSpin"
        color="#393b3b"
        height={60}
        width={60}
        className="Loader"
      />
    </LoaderWrapper>
  );
};
