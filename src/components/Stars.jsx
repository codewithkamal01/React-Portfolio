function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-[#EB6200]" : "text-gray-500"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
export default Stars;
