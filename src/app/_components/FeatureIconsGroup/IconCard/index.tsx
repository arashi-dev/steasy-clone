import React from "react";

type IconCardProps = {
  icon: React.ReactNode;
  text: string;
};

const IconCard: React.FC<IconCardProps> = ({ icon, text }) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-max text-center">{icon}</div>

      <p className="mx-auto mb-8 mt-4 max-w-[12.5rem] text-center font-gothic text-base">
        {text}
      </p>
    </div>
  );
};

export default IconCard;
