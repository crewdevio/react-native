import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Page,
  List,
  Navbar,
  BlockTitle,
  ListItem,
  Radio,
  Toggle,
} from "konsta/react";

interface Props {
  onTheme: (theme: "ios" | "material") => void;
  theme: "ios" | "material";
}

export function Home(props: Props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useLayoutEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  });

  return (
    <Page>
      <Navbar title="React Native" large transparent centerTitle />
      <BlockTitle>Theme</BlockTitle>

      <List strong inset>
        <ListItem
          label
          title="iOS Theme"
          after={
            <Radio
              onChange={() => props.onTheme("ios")}
              checked={props.theme === "ios"}
              component="div"
              slot="media"
            />
          }
        />

        <ListItem
          label
          title="Material Theme"
          after={
            <Radio
              onChange={() => props.onTheme("material")}
              checked={props.theme === "material"}
              component="div"
              slot="media"
            />
          }
        />
      </List>

      <List strong inset>
        <ListItem
          title="Dark Mode"
          label
          after={
            <Toggle
              onChange={toggleDarkMode}
              checked={darkMode}
              component="div"
              slot="after"
            />
          }
        />
      </List>

      <List strong inset>
        <Link to="/view">
          <ListItem title="Navigate" label link />
        </Link>
      </List>
    </Page>
  );
}
