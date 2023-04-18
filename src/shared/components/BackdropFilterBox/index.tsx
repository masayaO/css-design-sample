import styled from '@emotion/styled';
import { CSSProperties, FC, memo } from 'react';

type Props = {
  style?: CSSProperties;
};

const BackdropFilterBox: FC<Props> = ({ style }) => {
  return (
    <div style={{ backgroundColor: 'red', padding: '20px' }}>
      <Container style={style}>
        <p>磨りガラス表現</p>
      </Container>
    </div>
  );
};

export default memo(BackdropFilterBox);

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.35);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
  backdrop-filter: blur(10px) saturate(120%);
  padding: 20px 10px;
  border-radius: 10px;
  width: 200px;
`;
