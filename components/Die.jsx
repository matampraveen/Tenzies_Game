export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      style={styles}
      onClick={() => props.hold(props.id)}
      aria-label={`Die with a value of ${props.value},${
        props.isHeld ? "Held" : "not held"
      }`}
    >
      {props.value}
    </button>
  );
}
