import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Ellipsis } from "../assets/images/icon-ellipsis.svg";
import { mobile } from "../responsive";

const Container = styled.div`
  ${(props) => props.mystyle};
  position: relative;
  border-radius: 15px;
  ${mobile((props) => {
    const rowStart = props.index + 2;
    const rowEnd = props.index + 3;
    return {
      gridArea: rowStart.toString() + " / 1 / " + rowEnd.toString() + " / 2",
    };
  })}
`;
const IconContainer = styled.div`
  position: absolute;
  height: 40px;
  width: 200px;
  top: 0;
  overflow: hidden;
  ${mobile({
    width: "100%",
  })}
`;
const Icon = styled.img`
  position: absolute;
  right: 10px;
  top: -2px;
  width: 64px;
`;
const InfoContainer = styled.div`
  background-color: var(--DarkBlue);
  position: absolute;
  height: 160px;
  width: 200px;
  bottom: 0;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #34397b;
  }
  ${mobile({
    width: "100%",
    height: "120px",
  })}
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
const Title = styled.h4`
  color: white;
  font-weight: 400;
`;
const MenuIcon = styled.img`
  cursor: pointer;
  &:hover {
    fill: white;
  }
`;

const TimeContainer = styled.div`
  padding: 0px 20px;
  ${mobile({
    display: "flex",
    justifyContent: "space-between",
  })}
`;
const CurrentTime = styled.h1`
  color: white;
  font-weight: 200;
  line-height: 5px;
`;
const PreviousTime = styled.p`
  color: var(--SoftBluePlay);
  font-size: 12px;
`;
export const Card = (props) => {
  const [selectedPeriod, setselectedPeriod] = useState(
    props.item.timeframes.weekly
  );
  useEffect(() => {
    props.period === "daily"
      ? setselectedPeriod(props.item.timeframes.daily)
      : props.period === "weekly"
      ? setselectedPeriod(props.item.timeframes.weekly)
      : props.period === "monthly" &&
        setselectedPeriod(props.item.timeframes.monthly);
  });
  return (
    <Container mystyle={props.mystyle} index={props.index}>
      <IconContainer>
        <Icon src={props.icon} />
      </IconContainer>

      <InfoContainer>
        <TitleContainer>
          <Title> {props.item.title} </Title>
          <Ellipsis />
        </TitleContainer>
        <TimeContainer>
          <CurrentTime>{selectedPeriod.current}hrs</CurrentTime>
          <PreviousTime>
            {" "}
            last{" "}
            {props.period === "daily"
              ? "day"
              : props.period === "weekly"
              ? "week"
              : props.period === "monthly" && "month"}{" "}
            {selectedPeriod.previous}hrs
          </PreviousTime>
        </TimeContainer>
      </InfoContainer>
    </Container>
  );
};
