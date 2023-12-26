export default function Square({ value, onSquareClick }) {
    const buttonStyle = {
        padding: '15px 30px', // Adjust the padding to set the size
        fontSize: '10px', // Adjust the font size if needed
      };

  return (
    <button className="square" onClick={onSquareClick} style={buttonStyle} >
      {value}
    </button>
  );
}