const SocialProof = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Trusted by Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {["Microsoft", "Google", "Amazon", "Meta", "Apple"].map((company) => (
            <span
              key={company}
              className="text-xl font-semibold text-muted-foreground"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
