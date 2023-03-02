import styled from "styled-components";

export const Thumb = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    #0000003b;
  border-radius: 20px;
`;

export const Logo = styled.img`
  width: 76px;
  height: 22px;
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`;

export const BackGroundImg = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  margin-top: 28px;
  margin-left: 36px;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  z-index: 1;
`;

export const User = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 47%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
`;

export const Elipse = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 48.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
export const Circle = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  z-index: 2;
  position: absolute;
  width: 62px;
  height: 62px;
  top: 48.5%;
  left: 50%;
  border-radius: 50px;
  transform: translate(-50%, -50%);
`;

export const Tweets = styled.p`
  position: absolute;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  left: 130px;
  top: 264px;

  color: #ebd8ff;
`;
export const Followers = styled.p`
  position: absolute;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  left: 89px;
  top: 304px;
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  position: absolute;
  text-transform: uppercase;
  width: 196px;
  height: 50px;
  padding: 14px;
  color: #373737;
  left: 89px;
  top: 374px;
  border: none;
  outline: none;
  background: ${(props) => props.backgroundColor};
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
