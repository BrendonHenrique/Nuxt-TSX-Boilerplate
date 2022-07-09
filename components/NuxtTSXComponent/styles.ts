import styled from "vue-styled-components"

export const NuxtTSXStyledCustomComponent = styled("div")`
  ${({
    theme,
  }: StyledNuxtTSXTheme) => `
      height: 100vh;
      width: 100vw;
      padding: 0 ${theme.space[16]};
      background-color: ${theme.colors.secondary5};
    `};
`;
