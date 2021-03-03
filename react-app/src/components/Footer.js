import React from "react"
import{Box} from "../styled/Footer"
import { SiGithub } from "react-icons/si";

function Footer(){
    return (
      <Box>
        <h1> developed by Beny Lavian</h1>
        <a href="https://github.com/blavian/MySafePlace">
          <SiGithub />
        </a>
      </Box>
    );
    }

export default Footer
