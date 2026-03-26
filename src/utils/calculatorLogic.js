export const handleDecimal = (display, handlePress) => {
  const parts = display.split(/[\+\-\*\/]/);
  const last = parts[parts.length - 1];
  if (!last.includes('.')) handlePress('.');
};

export const calculateResult = (display, setDisplay) => {
  try {
    const result = eval(display);
    setDisplay(result.toString());
  } catch {
    setDisplay('Erro');
  }
};