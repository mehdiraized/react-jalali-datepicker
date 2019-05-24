import styled from "../../theme";

export const DaysBody = styled("div")`
  width: 300px;
  max-height: 85%;
  position: relative;
  overflow: auto;
  border-radius: ${8 / 16}rem;
  background-color: ${props => props.theme.backColor};
  & * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }
  @media (min-width: 450px) {
    width: 310px;
  }
  @media (min-width: 768px) {
    width: 325px;
  }
`;

export const Table = styled("table")<{ timePicker: boolean }>`
  width: 100%;
  font-size: 1rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  padding: ${props => (props.timePicker ? `${8 / 16}rem` : 0)};

  th {
    font-size: 1rem;
    font-weight: 300;
    color: ${props => props.theme.weekDaysColor};
  }
`;

export const ButtonsDiv = styled("div")`
  margin-bottom: ${16 / 16}rem;

  button {
    border: none;
    margin: 0;
    padding: ${8 / 16}rem ${24 / 16}rem;
    width: auto;
    min-width: 80px;
    overflow: visible;
    font: inherit;
    line-height: normal;
    appearance: none;
    outline: 0;
    border-radius: ${4 / 16}rem;
    cursor: pointer;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
      outline: 0;
    }
  }
  .rdp__button--cancel {
    margin-right: 1rem;
    color: ${props => props.theme.cancelColor};
    background-color: ${props => props.theme.cancelBackColor};
    transition: background-color 0.2s ease;
    &:hover,
    &:focus {
      color: ${props => props.theme.cancelHoverColor};
      background-color: ${props => props.theme.cancelHoverBackColor};
    }
  }
  .rdp__button--submit {
    margin-right: 1rem;
    color: ${props => props.theme.submitColor};
    background-color: ${props => props.theme.submitBackColor};
    transition: background-color 0.2s ease;
    &:hover,
    &:focus {
      color: ${props => props.theme.submitHoverColor};
      background-color: ${props => props.theme.submitHoverBackColor};
    }
  }
`;

export const ChangeViewButton = styled("button")`
  min-width: 40px !important;
  min-height: 40px;
  float: left;
  margin-left: 16px !important;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease;
  background-color: ${props => props.theme.changeViewButtonBackColor};
  svg {
    fill: ${props => props.theme.changeViewButtonColor};
  }
  &:hover {
    background-color: ${props => props.theme.changeViewButtonHoverBackColor};
    svg {
      fill: ${props => props.theme.changeViewButtonHoverColor};
    }
  }
`;

export const TimeDays = styled("div")`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;