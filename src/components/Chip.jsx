import { Chip as MuiChip } from "@mui/material";
import { FILTERS_ENUM } from "../models/ResearchModel";

export default function Chip(props) {
  return (
    <>
      {Object.keys(FILTERS_ENUM).map((filter) => {
        if (filter === FILTERS_ENUM.initialAge) {
          if (
            props.research[FILTERS_ENUM.initialAge] !== null &&
            props.research[FILTERS_ENUM.finalAge] !== null
          ) {
            return (
              <MuiChip
                key={filter}
                label={`${props.research[FILTERS_ENUM.initialAge]}-${
                  props.research[FILTERS_ENUM.finalAge]
                } anos`}
              />
            );
          } else if (props.research[FILTERS_ENUM.initialAge] !== null) {
            return (
              <MuiChip
                key={filter}
                label={`Acima de ${
                  props.research[FILTERS_ENUM.initialAge]
                } anos`}
              />
            );
          } else if (props.research[FILTERS_ENUM.finalAge] !== null) {
            return (
              <MuiChip
                key={filter}
                label={`Abaixo de ${
                  props.research[FILTERS_ENUM.finalAge]
                } anos`}
              />
            );
          } else {
            return null;
          }
        } else if (filter === FILTERS_ENUM.initialIncome) {
          if (
            props.research[FILTERS_ENUM.initialIncome] !== null &&
            props.research[FILTERS_ENUM.finalIncome] !== null
          ) {
            return (
              <MuiChip
                key={filter}
                label={`${props.research[FILTERS_ENUM.initialIncome]}-${
                  props.research[FILTERS_ENUM.finalIncome]
                } BRL`}
              />
            );
          } else if (props.research[FILTERS_ENUM.initialIncome] !== null) {
            return (
              <MuiChip
                key={filter}
                label={`Acima de ${
                  props.research[FILTERS_ENUM.initialIncome]
                } BRL`}
              />
            );
          } else if (props.research[FILTERS_ENUM.finalIncome] !== null) {
            return (
              <MuiChip
                key={filter}
                label={`Abaixo de ${
                  props.research[FILTERS_ENUM.finalIncome]
                } BRL`}
              />
            );
          } else {
            return null;
          }
        } else if (
          filter === FILTERS_ENUM.finalAge ||
          filter === FILTERS_ENUM.finalIncome ||
          props.research[filter] === null
        ) {
          return null;
        } else {
          return <MuiChip key={filter} label={props.research[filter]} />;
        }
      })}
    </>
  );
}
