import "./featureInfoCard.scss";

interface FeatureInfoCardProps {
  title: string;
  description?: string;
}

const FeatureInfoCard = ({ title, description }: FeatureInfoCardProps) => {
  return (
    <div className="info-card">
      <span className="card-title">{title}</span>
      <span>{description}</span>
    </div>
  );
};

export default FeatureInfoCard;
