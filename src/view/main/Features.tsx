import React from "react";
import FeatureItem from "../../components/features/FeatureItem";

const Features = () => {
  return (
    <section className="features">
      <div className="features__main">
        <FeatureItem type="discount" title="Daily Discounts" />
        <FeatureItem type="location" title="Live Tracing" />
        <FeatureItem type="time" title="Quick Delivery" />
      </div>
    </section>
  );
};

export default Features;
