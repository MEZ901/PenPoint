"use client";

import { Button, ButtonGroup } from "@mui/material";
import { LogoNoBackground } from "@public/assets/logo";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <img
        src={LogoNoBackground.src}
        width={144}
        alt="PenPoint"
        className="logo"
      />
      <div>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button sx={{ px: 5 }}>Sign in</Button>
          <Button sx={{ px: 5 }}>Sign up</Button>
        </ButtonGroup>
      </div>
    </nav>
  );
};

export default Navbar;
