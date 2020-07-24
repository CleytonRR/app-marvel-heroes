import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 5%;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: "GilroySemiBold";
  color: #b7b7c8;
`;
export const Title = styled.Text`
  font-family: "GilroyHeavy";
  font-size: 32px;
`;
export const ContainerAvatar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Avatar = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const AvatarLinearGradient = styled(LinearGradient).attrs(() => ({}))`
  position: absolute;
  left: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  align-self: center;
`;
