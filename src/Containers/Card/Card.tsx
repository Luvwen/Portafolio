import React, { FunctionComponent } from "react";
import {
  Button,
  ButtonContainer,
  Container,
  Content,
  Img,
  Link,
  PlanContainer,
  Text,
  TextContainer,
  Title,
} from "./styles";
import heroImage from "./images/illustration-hero.svg";
import iconMusic from "./images/icon-music.svg";

export const Card: FunctionComponent = () => {
  return (
    <Container>
      <Img src={heroImage} width="100%" height="40%" />
      <Content>
        <Title>Order Summary</Title>
        <Text>
          You can now listen to millions of songs, audiobooks, and podcast on
          any device anywhere you like !
        </Text>
        <PlanContainer>
          <Img src={iconMusic} width="40px" height="40px" />
          <TextContainer>
            <Text>Annual Plan</Text>
            <Text>$59.99/year</Text>
          </TextContainer>
          <Link>Change</Link>
        </PlanContainer>
        <ButtonContainer>
          <Button>Proceed to Payment</Button>
          <Button variant="cancel">Cancel Order</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};
