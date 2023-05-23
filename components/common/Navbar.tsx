import { LogoBlack } from "@/public/assets/logo";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav>
      <div className="navElements">
        <img src={LogoBlack.src} alt="logo" width={100} />
        <div className="navButtons">
          <Button>
            Sign In
          </Button>
          <Button variant="contained">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
