function Content({ children, className, id }) {
  return (
    <section
      id={id}
      className={`px-14 font-roboto text-primary-light ${className}`}
    >
      {children}
    </section>
  );
}

export default Content;
