import "./featureActionCard.scss";

interface FeatureActionCardProps {
  title: string;
  description?: string;
  handleDivClick: () => void;
  isActive: boolean;
}

const FeatureActionCard = ({
  title,
  description,
  handleDivClick,
  isActive,
}: FeatureActionCardProps) => {
  return (
    <div
      className={`action-card ${isActive ? "selected" : ""}`}
      onClick={handleDivClick}
    >
      <span className={`card-title ${isActive ? "selected" : ""}`}>
        {title}
      </span>
      <span>{description}</span>
    </div>
  );
};

export default FeatureActionCard;
