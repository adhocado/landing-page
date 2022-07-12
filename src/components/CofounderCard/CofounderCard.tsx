import "./cofounderCard.scss";
import femaleProfile from "../../assets/profile_1.webp";
import maleProfile1 from "../../assets/profile_2.webp";
import maleProfile2 from "../../assets/profile_3.webp";

interface CofounderProps {
  cofounder: {
    name: string;
    profile_pic: string;
    title: string;
    role: string;
    email: string;
  };
}

const CofounderCard = ({ cofounder }: CofounderProps) => {
  const getProfilePic = (profile: string) => {
    if (profile === "female1") {
      return femaleProfile;
    } else if (profile === "male1") {
      return maleProfile1;
    } else {
      return maleProfile2;
    }
  };

  return (
    <div className="cofounder-card">
      <h3>{cofounder.name}</h3>
      <p className="title-text">{cofounder.title}</p>
      <img
        width="221px"
        height="209px"
        src={getProfilePic(cofounder.profile_pic)}
      />
    </div>
  );
};

export default CofounderCard;
