const Button = ({ item, setTipAmount, setCustomActive }) => {
  const handleTip = (tip) => {
    if (!isNaN(tip)) {
      setTipAmount(tip);
      return;
    }

    setCustomActive(true);
  };
  return (
    <a
      onClick={() => {
        handleTip(item);
      }}
      className={`font-bold text-center  ${
        isNaN(item)
          ? 'text-neutralDarkGrayishCyan bg-neutralVeryLightGrayishCyan text-lg'
          : 'text-white bg-primaryDarkGreen text-2xl'
      } rounded  py-2 hover:cursor-pointer hover:bg-primaryStrongCyan hover:text-primaryDarkGreen`}
    >
      {`${item} %`}
    </a>
  );
};

export default Button;
