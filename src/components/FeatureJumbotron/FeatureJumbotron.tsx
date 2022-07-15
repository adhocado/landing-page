import "./featureJumbotron.scss";
import calendarImg from "../../assets/calendar.webp";
import FeatureActionCard from "../FeatureActionCard/FeatureActionCard";
import autoIntegrationImg from "../../assets/calendar_integration.jpeg";
import communityGroupsImg from "../../assets/community_groups.jpeg";
import groupCalendarImg from "../../assets/suggest_times.jpeg";
import mockup from "../../assets/demo_mockup.webp";
import { useState } from "react";

const FeatureJumbotron = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const getCurrentImg = (imgIndex: Number) => {
    if (imgIndex === 0) {
      return autoIntegrationImg;
    } else if (imgIndex === 1) {
      return communityGroupsImg;
    } else {
      return groupCalendarImg;
    }
  };

  return (
    <div className="feature-jumbotron">
      <section>
        <h4>
          Design vs Functionality. Personal vs Professional. Most calendar apps
          on the market compromise on either one. Adhocado has it all.
        </h4>
        <div className="mockup-container">
          <div className="demo-screen-container">
            <img className="mockup" src={mockup} />
            <img
              className="screen"
              width="240px"
              height="524px"
              src={getCurrentImg(currentImg)}
            />
          </div>

          <div className="action-cards">
            <FeatureActionCard
              title="Automatic Integration"
              description="Import your personal calendars when creating future get-togethers so that they don’t clash with existing ones."
              handleDivClick={() => setCurrentImg(0)}
              isActive={currentImg === 0}
            />
            <FeatureActionCard
              title="Community Groups"
              description="Directly create or join a group through an invitation code!"
              handleDivClick={() => setCurrentImg(1)}
              isActive={currentImg === 1}
            />
            <FeatureActionCard
              title="Group Calendar"
              description="A group calendar that allows friends to find common timeslots to meet"
              handleDivClick={() => setCurrentImg(2)}
              isActive={currentImg === 2}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureJumbotron;
