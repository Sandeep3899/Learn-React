const Shimmer = ({ count = 8 }) => {
  return (
    <div className="shimmer-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer shimmer-img" />
          <div className="shimmer-body">
            <div className="shimmer shimmer-line thick full" />
            <div className="shimmer shimmer-line medium" />
            <div className="shimmer shimmer-line short" />
            <div className="shimmer shimmer-chip" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
