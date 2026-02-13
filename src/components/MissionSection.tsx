const MissionSection = () => {
  return (
    <section className="section-purple py-20 lg:py-28" id="about">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] mb-6 opacity-70">
          Our Mission
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-snug mb-8">
          Advancing the principle that all people have the right to an oppression and
          violence-free life
        </h2>
        <p className="font-body text-base sm:text-lg leading-relaxed opacity-80 mb-12 max-w-2xl mx-auto">
          ODVN fosters changes in our economic, social, and political systems; brings leadership,
          expertise, and best practices to community programs; and maintains a deep commitment to
          the empowerment of survivors and their children.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "70+", label: "Member Programs" },
            { stat: "88", label: "Ohio Counties Served" },
            { stat: "40+", label: "Years of Advocacy" },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-heading text-4xl lg:text-5xl font-bold mb-2">{item.stat}</div>
              <div className="font-body text-sm opacity-70">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
