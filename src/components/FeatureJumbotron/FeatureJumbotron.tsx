import "./featureJumbotron.scss";
import calendarImg from "../../assets/calendar.webp";
import FeatureActionCard from "../FeatureActionCard/FeatureActionCard";

const FeatureJumbotron = () => {
  return (
    <div className="feature-jumbotron">
      <section>
        <h4>
          Design vs Functionality. Personal vs Professional. Most calendar apps
          on the market compromise on either one. Adhocado has it all.
        </h4>
        <div className="mockup-container">
          <img src={calendarImg} />
          <div className="action-cards">
            <FeatureActionCard
              title="Automatic Integration"
              description="Import your personal calendars when creating future get-togethers so that they don’t clash with existing ones."
            />
            <FeatureActionCard
              title="Community Groups"
              description="Directly create or join a group through an invitation code!"
            />
            <FeatureActionCard
              title="Group Calendar"
              description="A group calendar that allows friends to find common timeslots to meet"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureJumbotron;
