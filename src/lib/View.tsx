import { Block, BlockTitle, Navbar, NavbarBackLink, Page } from "konsta/react";
import { useNavigate } from "react-router-dom";

export function View() {
  const navigate = useNavigate();

  return (
    <Page>
      <Navbar
        title="Other View"
        left={<NavbarBackLink onClick={() => navigate("/")} />}
      />

      <BlockTitle>Other view</BlockTitle>

      <Block strong inset className="space-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit
          magni a sit hic possimus ab unde voluptatum nisi labore, minus sint
          quas blanditiis totam molestiae culpa corrupti corporis nemo?
        </p>
      </Block>
    </Page>
  );
}
