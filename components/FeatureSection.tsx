import { ReactNode } from "react";

interface FeatureSectionProps {
  eyebrowText: string;
  eyebrowIcon: ReactNode;
  title: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  isGlass?: boolean;
  imageClassName?: string;
  sectionStyle?: React.CSSProperties;
  children: ReactNode;
}

export default function FeatureSection({
  eyebrowText,
  eyebrowIcon,
  title,
  imageSrc,
  imageAlt,
  isReversed = false,
  isGlass = false,
  imageClassName = "",
  sectionStyle,
  children,
}: FeatureSectionProps) {
  return (
    <section className={`section ${isGlass ? "section-glass" : ""}`} style={sectionStyle}>
      <div className="container">
        <div className="section-grid">
          {isReversed ? (
            <>
              <div className="section-content">{children}</div>
              <div className="section-image-wrapper">
                <div className="image-title-overlay">
                  <span className="eyebrow">
                    {eyebrowIcon} {eyebrowText}
                  </span>
                  <h2 className="section-title">{title}</h2>
                </div>
                <img src={imageSrc} alt={imageAlt} className={imageClassName} />
              </div>
            </>
          ) : (
            <>
              <div className="section-image-wrapper">
                <div className="image-title-overlay">
                  <span className="eyebrow">
                    {eyebrowIcon} {eyebrowText}
                  </span>
                  <h2 className="section-title">{title}</h2>
                </div>
                <img src={imageSrc} alt={imageAlt} className={imageClassName} />
              </div>
              <div className="section-content">{children}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
