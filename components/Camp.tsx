import React from "react";

const CampSite = () => {
  return <div> Camp Site 1</div>;
};

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:max-container">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"></div>
      <CampSite />
    </section>
  );
};

export default Camp;
