import "./featureActionCard.scss";

interface FeatureActionCardProps {
  title: string;
  description?: string;
}

const FeatureActionCard = ({ title, description }: FeatureActionCardProps) => {
  return (
    <div className="action-card">
      <span className="card-title">{title}</span>
      <span>{description}</span>
    </div>
  );
};

export default FeatureActionCard;
