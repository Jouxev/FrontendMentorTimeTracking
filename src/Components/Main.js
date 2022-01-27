import styled from "styled-components";
import { Card } from ".";
import profilePic from "../assets/images/image-jeremy.png";

import exercise from "../assets/images/icon-exercise.svg";
import work from "../assets/images/icon-work.svg";
import play from "../assets/images/icon-play.svg";
import study from "../assets/images/icon-study.svg";
import social from "../assets/images/icon-social.svg";
import selfCare from "../assets/images/icon-self-care.svg";
import { data } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60%;
  width: 60%;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(3, 200px);
  ${mobile({
    height: "80%",
    width: "90%",
    gridTemplateColumns: "repeat(1,320px)",
    gridTemplateRows: "200px repeat(6, 160px)",
    margin: "40px 0px",
  })}
`;

const ProfileContainer = styled.div`
  border-radius: 15px;
  background-color: var(--DarkBlue);
  grid-area: 1 / 1 / 3 / 2;
  ${mobile({
    gridArea: "1/1/2/2",
  })}
`;
const NameContainer = styled.div`
  background-color: var(--SVioletSocial);
  height: 60%;
  border-radius: 15px;
  padding: 25px;
  ${mobile({
    height: "40%",
    display: "flex",
    alignItems: "center",
  })}
`;
const Name = styled.div``;
const FullName = styled.div`
  ${mobile({
    display: "flex",
  })}
`;
const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid white;
  margin-bottom: 15px;
  ${mobile({
    marginRight: "20px",
  })}
`;
const SmallText = styled.h5`
  color: var(--SoftBluePlay);
  font-weight: 300;
`;
const Title = styled.h1`
  color: white;
  font-weight: 200;
  font-size: 28px;
  line-height: 15px;
  ${mobile({
    lineHeight: "0px",
    marginRight: "5px",
  })}
`;
const TimeContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  ${mobile({
    flexDirection: "row",
  })}
`;
const TimeItem = styled.p`
  line-height: 0px;
  font-size: 12px;
  cursor: pointer;
  color: ${(props) =>
    props.active ? "var(--PaleBlue)" : "var(--DesaturatedBlue)"};
  &:hover {
    color: var(--PaleBlue);
  }
`;
export const Main = () => {
  const [period, setperiod] = useState("weekly");

  return (
    <Container>
      <ProfileContainer>
        <NameContainer>
          <Image src={profilePic} />
          <Name>
            <SmallText> Report for </SmallText>
            <FullName>
              <Title> Jeremy </Title>
              <Title> Robson</Title>
            </FullName>
          </Name>
        </NameContainer>
        <TimeContainer>
          <TimeItem
            active={period === "daily"}
            onClick={() => {
              setperiod("daily");
            }}
          >
            {" "}
            Daily{" "}
          </TimeItem>
          <TimeItem
            active={period === "weekly"}
            onClick={() => {
              setperiod("weekly");
            }}
          >
            {" "}
            Weekly{" "}
          </TimeItem>
          <TimeItem
            active={period === "monthly"}
            onClick={() => {
              setperiod("monthly");
            }}
          >
            {" "}
            Monthly{" "}
          </TimeItem>
        </TimeContainer>
      </ProfileContainer>
      <Card
        mystyle="grid-area: 1 / 2 / 2 / 3; background-color: var(--LightRedWork);"
        item={data[0]}
        icon={work}
        period={period}
        index={0}
      />
      <Card
        mystyle="grid-area: 1 / 3 / 2 / 4; background-color: var(--SoftBluePlay); "
        item={data[1]}
        icon={play}
        period={period}
        index={1}
      />
      <Card
        mystyle="grid-area: 1 / 4 / 2 / 5; background-color: var(--SLightRedStudy); "
        item={data[2]}
        icon={study}
        period={period}
        index={2}
      />
      <Card
        mystyle="grid-area: 2 / 2 / 3 / 3;background-color: var(--SLimeGreenExercise); "
        item={data[3]}
        icon={exercise}
        period={period}
        index={3}
      />
      <Card
        mystyle="grid-area: 2 / 3 / 3 / 4;background-color: var(--SVioletSocial); "
        item={data[4]}
        icon={social}
        period={period}
        index={4}
      />
      <Card
        mystyle="grid-area: 2 / 4 / 3 / 5; background-color: var(--SSoftOrangeSelfCare);"
        item={data[5]}
        icon={selfCare}
        period={period}
        index={5}
      />
    </Container>
  );
};
