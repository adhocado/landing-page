import "./App.scss";
import {
  CofounderCard,
  FeatureInfoCard,
  FeatureJumbotron,
  Footer,
  Header,
} from "./components";
import json from "../siteData.json";
import backgroundImg from "./assets/background.webp";
import mainImg from "./assets/main_graphic.webp";
import React, { useRef } from "react";

function App() {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const executeScroll = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <img className="background-img" src={backgroundImg} />
      <Header
        howItWorksScroll={() => executeScroll(howItWorksRef)}
        teamScroll={() => executeScroll(teamRef)}
        aboutScroll={() => executeScroll(aboutRef)}
      />
      <main>
        <div className="intro-section">
          <div className="intro-writeup">
            <h1>Find time for the people who matter</h1>
            <p>
              Either you run the day or the day runs you. Unfortunately, most of
              us fall into the latter category. We are at the mercy of our busy
              schedules, making it hard for us to find a common time to meet
              each other. <br />
              <br /> Take a breather. We are here to help.
            </p>
          </div>
          <div className="main-img">
            <img src={mainImg} />
          </div>
        </div>
        <div className="spacer" />
        <div className="scheduling-intro">
          <div>
            <h3>Scheduling Simplified.</h3>
            <span className="scheduling-writeup">
              Adhocado provides you with the easiest and most efficient way to
              discover common free times within your group of friends.
            </span>
          </div>
          <FeatureInfoCard
            title="Automatic Integration"
            description="Import your personal calendars when creating future get-togethers so that they don???t clash with existing ones. These get-togethers will then be synced back to your personal calendars automatically."
            iconName="integration"
          />

          <FeatureInfoCard
            title="Community Groups"
            description="Directly create or join a group through an invitation code! Facilitate effective planning among your friends through community groups that keep track of upcoming, pending, and past events."
            iconName="avatar"
          />
          <FeatureInfoCard
            title="Group Calendar"
            description="With a group calendar that allows friends to find common timeslots to meet, schedule get-togethers easily and be notified when D-day approaches!???"
            iconName="calendar"
          />
        </div>

        <div ref={howItWorksRef}>
          <FeatureJumbotron />
        </div>
        <div className="spacer" />
        <section className="team-members" ref={teamRef}>
          <h2>Our team</h2>
          <p>
            Adhocado is an up and coming revolutionary leader in scheduling
            technology headquartered in Singapore.
          </p>
          <div className="member-cards">
            {json.cofounders.map((cofounder, index) => (
              <CofounderCard key={index} cofounder={cofounder} />
            ))}
          </div>
        </section>
        <div className="spacer" />
        <section className="story" ref={aboutRef}>
          <h2>The Adhocado Story</h2>
          <p>
            As fellow Gen Zs struggling to find time to meet our friends amidst
            our busy schedules, we set out to develop a calendar that
            automatically recommends the timings when everyone can meet. <br />
            <br />
            We travelled 14,991 km and spent 10000 hours in two different
            countries to expand our technical skills and market insights. We
            interviewed over 500 people (and still counting) to discern each and
            everyone???s ideal calendar app. Just like how time never stops for
            us, we never stop for you.
          </p>
        </section>
        <div className="spacer" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
