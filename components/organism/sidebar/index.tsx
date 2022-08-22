import React from "react";
import Footer from "./footer";
import Profile from "./profile";
import MenuItem from "./menuItem";

interface SidebarProps {
  activeMenu: "overview" | "transaction" | "settings";
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />

        <div className="menus">
          <MenuItem
            title="Overview"
            icon="icon_menu_overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="icon_menu_transaction"
            href="/transaction"
            active={activeMenu === "transaction"}
          />
          <MenuItem title="Messages" icon="icon_menu_message" href="/member" />
          <MenuItem title="Card" icon="icon_menu_card" href="/member" />
          <MenuItem title="Reward" icon="icon_menu_reward" href="/member" />
          <MenuItem
            title="Settings"
            icon="icon_menu_setting"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Logout" icon="icon_menu_logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
