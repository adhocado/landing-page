import "./featureInfoCard.scss";

interface FeatureInfoCardProps {
  title: string;
  description?: string;
}

const FeatureInfoCard = ({ title, description }: FeatureInfoCardProps) => {
  return (
    <div className="info-card">
      <span className="card-title">{title}</span>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default FeatureInfoCard;
