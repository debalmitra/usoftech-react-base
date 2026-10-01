import {
  Panel,
  View,
  Page,
  Navbar,
  List,
  ListItem,
  Icon,
  f7,
} from "framework7-react";

import NavigationService from "../core/NavigationService";
import Storage from "../core/Storage";
export default function AppMenu() {
  const logout = () => {
    Storage.logout();

    f7.panel.close("left");

    NavigationService.navigate("/", {
      replaceState: true,
    });
  };
  const navigate = (path) => {
    f7.panel.close("left");

    NavigationService.navigate(path);
  };

  return (
    <Panel left reveal resizable swipe>
      <View>
        <Page>
          <Navbar title="Menu" />

          <List strongIos outlineIos dividersIos>
            <ListItem
              title="Dashboard"
              link="#"
              onClick={(event) => {
                event.preventDefault();

                navigate("/dashboard/");
              }}
            >
              <Icon f7="house" slot="media" />
            </ListItem>

            <ListItem
              title="Settings"
              link="#"
              onClick={(event) => {
                event.preventDefault();

                navigate("/settings/");
              }}
            >
              <Icon f7="gear" slot="media" />
            </ListItem>

            <ListItem
              title="Examples"
              link="#"
              onClick={(event) => {
                event.preventDefault();
                navigate("/examples/");
              }}
            >
              <Icon f7="square_list" slot="media" />
            </ListItem>

            <ListItem
              title="Logout"
              link="#"
              onClick={(event) => {
                event.preventDefault();
                logout();
              }}
            >
              <Icon f7="arrow_right_to_line" slot="media" />
            </ListItem>
          </List>
        </Page>
      </View>
    </Panel>
  );
}
