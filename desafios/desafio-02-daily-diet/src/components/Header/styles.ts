import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
`

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid ${theme.COLORS["gray-2"]}
`
