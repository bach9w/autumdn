const Infomation = () => {
  if (typeof window !== "undefined") {
    // Изчислете информацията с помощта на обекта window
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const screenSize = calculateScreenSize(screenWidth, screenHeight);
    return screenSize;
  }
  return null;
};

const calculateScreenSize = (width: number, height: number) => {
  const size = `&screen-width=${width}&screen-height=${height}`;
  return { size, width, height };
};

export default Infomation;
