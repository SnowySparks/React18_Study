const Controller = ({ eventHandler }) => {
  const btnlst = [-1, -10, -100, +100, +10, +1];
  return (
    <div>
      {btnlst.map((item) => {
        return (
          <button
            key={item}
            onClick={() => {
              eventHandler((current) => current + item);
            }}
          >
            {item > 0 ? "+" + String(item) : item}
          </button> // React에서 이렇게 할 경우 key값을 요구함 - 구분성위해
        );
      })}
    </div>
  );
};

export default Controller;
