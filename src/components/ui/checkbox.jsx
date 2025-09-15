export function Checkbox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className="w-4 h-4 accent-blue-600 cursor-pointer"
      checked={checked}
      onChange={onChange}
    />
  );
}
