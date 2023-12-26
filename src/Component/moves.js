

export default function Move( { jumpTo,description, move}) {


        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
}