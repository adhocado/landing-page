import "./featureInfoCard.scss";
import avatarIcon from "../../assets/icon_avatar.webp";
import calendarIcon from "../../assets/icon_calendar.webp";
import integrationIcon from "../../assets/icon_integration.webp";

interface FeatureInfoCardProps {
  title: string;
  description?: string;
  iconName?: string;
}

const FeatureInfoCard = ({
  title,
  description,
  iconName,
}: FeatureInfoCardProps) => {
  const getIcon = () => {
    if (iconName === "avatar") {
      return avatarIcon;
    } else if (iconName === "calendar") {
      return calendarIcon;
    } else {
      return integrationIcon;
    }
  };

  return (
    <div className="info-card">
      <img src={getIcon()} />
      <span className="card-title">{title}</span>
      <p className="card-description">
        {description}
        {iconName === "integration" && <i>Voila.</i>}
      </p>
    </div>
  );
};

export default FeatureInfoCard;
