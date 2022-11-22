import "./dropdown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { FC, useState } from "react";

export interface Props {
  name: string;
  list: string[];
}

export const Dropdown: FC<Props> = ({ name, list }) => {
  const [isNavigateOpen, setIsNavigateOpen] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setIsNavigateOpen(true);
      }}
      className="dropdown"
    >
      <h4 className="name">
        {name} <ArrowDropDownIcon fontSize="large" />
      </h4>
      {isNavigateOpen && (
        <div className="navigation" onMouseOut={() => setIsNavigateOpen(false)}>
          <ul>
            {list.map((i: string) => {
              return (
                <li className="li" key={i}>
                  {i}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export function MobileDropdown(props: any) {
  return (
    <>
      <DehazeIcon />
    </>
  );
}

export default MobileDropdown;
