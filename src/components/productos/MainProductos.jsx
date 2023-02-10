
const MainProductos = ({ title, children }) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default MainProductos;