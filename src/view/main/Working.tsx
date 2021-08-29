import React from "react";
import WorkItem from "../../components/working/WorkItem";

const Working = () => {
  return (
    <section className="working">
      <h2 className="working__title">How does it work</h2>
      <div className="working__bottom">
        <WorkItem type="MapMarker" />
        <WorkItem type="Menu" />
        <WorkItem type="Invoice" />
        <WorkItem type="Donut" />
      </div>
    </section>
  );
};

export default Working;
