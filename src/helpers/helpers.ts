export const generateRandomColor = () => {
  return `${Math.floor(Math.random() * 256)} ${Math.floor(
    Math.random() * 256
  )} ${Math.floor(Math.random() * 256)}`;
};
