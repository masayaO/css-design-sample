import styled from '@emotion/styled';
import { CSSProperties, FC, memo } from 'react';
import ImageUrl from './image.png';

type Props = {
  style?: CSSProperties;
};

const ResponsiveImage: FC<Props> = ({ style }) => {
  return (
    <Container style={style}>
      <Image src={ImageUrl.src} alt="画像" />
    </Container>
  );
};

export default memo(ResponsiveImage);

const Container = styled.div`
  background-color: lightgray;
  padding: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
`;
