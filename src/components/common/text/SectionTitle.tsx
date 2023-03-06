import { type FC } from "react";

interface ISectionTitle {
  title: string;
  subtitle?: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title, subtitle }) => {
  return (
    <div className="mt-10 mb-6">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle ? (
        <p className="font-inter text-sm text-default-darkgray">
          Task you must complete this week, do or die!
        </p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
