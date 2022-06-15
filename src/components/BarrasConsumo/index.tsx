import React from 'react';
import styled from 'styled-components';
import { Progress } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  & > div {
    border-radius: 6px;
  }
`;

const Title = styled.span`
  width: 50px;
`;

export default function BarrasConsumo() {
  return (
    <div>
      <Tooltip label="Foram consumidos 20L de água">
        <Container>
          <Title>Seg</Title>
          <Progress
            width="100%"
            height="32px"
            value={20}
            colorScheme="twitter"
          />
        </Container>
      </Tooltip>

      <Tooltip label="Foram consumidos 70L de água">
        <Container>
          <Title>Ter</Title>
          <Progress
            width="100%"
            height="32px"
            value={70}
            colorScheme="twitter"
          />
        </Container>
      </Tooltip>

      <Tooltip label="Foram consumidos 80L de água">
        <Container>
          <Title>Qua</Title>
          <Progress
            width="100%"
            height="32px"
            value={80}
            colorScheme="twitter"
          />
        </Container>
      </Tooltip>

      <Tooltip label="Foram consumidos 60L de água">
        <Container>
          <Title>Qui</Title>
          <Progress
            width="100%"
            height="32px"
            value={60}
            colorScheme="twitter"
          />
        </Container>
      </Tooltip>

      <Tooltip label="Foram consumidos 42L de água">
        <Container>
          <Title>Sex</Title>
          <Progress
            width="100%"
            height="32px"
            value={42}
            colorScheme="twitter"
          />
        </Container>
      </Tooltip>

      <Tooltip label="Foram consumidos 33L de água">
        <Container>
          <Title>Sáb</Title>
          <Progress
            width="100%"
            height="32px"
            value={33}
            colorScheme="twitter"
          />
        </Container>
      </Tooltip>

      <Tooltip label="Foram consumidos 56L de água">
        <Container>
          <Title>Dom</Title>
          <Progress
            width="100%"
            height="32px"
            value={56}
            colorScheme="twitter"
          />
        </Container>
      </Tooltip>
    </div>
  );
}
