const SectionTitle = ({ children }) => {
  return (
    <h4 className="uppercase text-2xl md:text-3xl border-l-8 border-primary-color pl-3 font-semibold text-primary-color my-8 md:my-10 lg:my-16">
      {children}
    </h4>
  );
};

export default SectionTitle;
