import React from "react";
import { Box, Content } from "../styled/Footer"
import { SiGithub, SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <Box>
      <Content>
        <p>Developed By Beny Lavian</p>
        <a href="https://github.com/blavian/MySafePlace">
          <SiGithub size="32px" />
        </a>
        <a href="https://www.linkedin.com/in/benjamin-lavian/">
          <SiLinkedin size="32px" />
        </a>
      </Content>
    </Box>
  );
}

export default Footer;
