import { useEffect, useState } from "react";
import { Dropdown } from "../dropdown/dropdown";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";
import { Avatar } from "@mui/material";
import { Search } from "../search/search";
const logo = require("../../assets/logo.png");
export function Navbar() {
  const [width, setWidth] = useState(1024);
  const list = ["Início", "Filmes", "Séries", "Animações"];

  useEffect(() => {});
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="navigate">
        <Dropdown name="Navegar" list={list} />
      </div>
      <div className="icons">
        <ul>
          <li style={{ display: "flex" }}>
            <Search />
      
          </li>
          <li>
            <NotificationsIcon fontSize="large" />
          </li>
          <li>
            <Avatar className="avatar" variant="rounded" />
          </li>
        </ul>
      </div>
    </div>
  );
}
