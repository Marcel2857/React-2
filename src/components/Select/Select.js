import "./Select.css";
function Select() {
  return (
    <select class="formItem" name="currency">
      <option value="EUR">Euro</option>
      <option value="USD">Dolar Amerykański</option>
      <option value="CHF">Frank Szwajcarski</option>
    </select>
  );
}

export default Select;
