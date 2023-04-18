import styled from '@emotion/styled';
import { CSSProperties, FC, memo } from 'react';

type Props = {
  text: string;
  style?: CSSProperties;
};

const GradationText: FC<Props> = ({ text, style }) => {
  return (
    <Container style={style}>
      <Text>{text}</Text>
    </Container>
  );
};

export default memo(GradationText);

const Container = styled.div`
  display: inline-block;
`;

const Text = styled.p`
  font-size: 30px;
  font-weight: 700;
  background: -webkit-linear-gradient(-45deg, #2af598, #009efd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
