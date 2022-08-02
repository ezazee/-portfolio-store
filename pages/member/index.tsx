import React from "react";
import OverviewContent from "../../components/organism/overviewContent";
import Sidebar from "../../components/organism/sidebar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <OverviewContent />
    </section>
  );
}
