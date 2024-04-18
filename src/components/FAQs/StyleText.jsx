export const StyleText = ({ text, coloredText, isBold }) => {
  if (!coloredText) {
    return text;
  }

  const coloredTextArray = Array.isArray(coloredText)
    ? coloredText
    : [coloredText];
  const parts = text?.split(
    new RegExp(
      `(${coloredTextArray
        .map((ct) => ct.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`
    )
  );

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 !== 0 && index < parts.length - 1) {
          const coloredIndex = Math.floor(index / 2);
          return (
            <span
              key={index}
              className={`${
                isBold ? "font-bold text-[#1E1C1D]" : "text-[var(--primary)]"
              }`}
            >
              {coloredTextArray[coloredIndex]}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};
