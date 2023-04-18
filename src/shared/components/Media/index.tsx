import styled from '@emotion/styled';
import { CSSProperties, FC, memo } from 'react';

type Props = {
  style?: CSSProperties;
};

const Media: FC<Props> = ({ style }) => {
  return (
    <Container style={style}>
      <p>画面切り替え</p>
    </Container>
  );
};

export default memo(Media);

const Container = styled.div`
  @media (width < 600px) {
    background-color: red;
  }

  @media (width >= 600px) {
    background-color: blue;
  }
`;
