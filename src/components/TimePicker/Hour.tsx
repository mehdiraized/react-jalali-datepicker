import * as React from "react";
import { hours, hours24, minutes } from "../../utils/timePicker";
import { MinuteWithAnimation, Numbers } from "./styled";
import { fa } from "../../utils";

const convertNumberValue = (n: number): string => {
  if (n === 24 || n === 0) {
    return `۰۰`;
  }
  return fa(n);
};

export const Hours: React.FunctionComponent<{
  insideHour: boolean;
  hourSelecting: boolean;
  hour: number;
  minute: number;
}> = ({ insideHour, hourSelecting, minute, hour }) => {
  if (!hourSelecting) {
    return (
      <MinuteWithAnimation>
        {minutes.map((m, i) => (
          <Numbers key={`rdp-time${i}`} idx={i}>
            {convertNumberValue(m)}
          </Numbers>
        ))}
      </MinuteWithAnimation>
    );
  }
  return (
    <React.Fragment>
      {hours.map((h, i) => (
        <Numbers
          key={`rdp-time${i}`}
          idx={i}
          top="15%"
          clockHalfWidth={85}
          numbersPadd={10}
          style={{ opacity: insideHour ? 1 : 0.3 }}
        >
          {convertNumberValue(h)}
        </Numbers>
      ))}
      {hours24.map((h, i) => (
        <Numbers key={i + 1} idx={i} style={{ opacity: !insideHour ? 1 : 0.3 }}>
          {convertNumberValue(h)}
        </Numbers>
      ))}
    </React.Fragment>
  );
};
