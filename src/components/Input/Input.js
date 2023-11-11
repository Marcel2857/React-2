import "./Input.css";

function Input() {
  return (
    <input
      type="number"
      name="amount"
      placeholder="Ilość"
      class="amount"
      required
      min="0.01"
      step="0.01"
    />
  );
}

export default Input;
