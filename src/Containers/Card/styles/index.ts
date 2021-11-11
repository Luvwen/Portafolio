import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: coral; */
  height: 600px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-family: "Red Hat Display", sans-serif;
`;

export const Img = styled.img<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  color: hsl(224, 23%, 55%);
`;

export const PlanContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 25%;
  width: 85%;
  background-color: hsl(225, 100%, 98%);
  align-items: center;
  border-radius: 15px;
  margin-top: 25px;
`;

export const TextContainer = styled.div``;

export const Link = styled.a`
  font-size: 14px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button<{ variant?: "cancel" }>`
  margin-top: 15px;
  padding: 13px 75px;
  border-radius: 10px;
  background-color: ${({ variant }) =>
    variant === "cancel" ? "transparent" : "hsl(245, 75%, 52%)"};
  color: ${({ variant }) =>
    variant === "cancel" ? "hsl(224, 23%, 55%)" : "hsl(225, 100%, 98%)"};
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
