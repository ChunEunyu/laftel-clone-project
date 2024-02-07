export default function Checkbox({ children, disabled, checked, onChange }) {
    return (
      <label>
        <input
          className="mr-2"
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        <span className="text-[#6C6C6C] font-semibold hover:text-[#816bff] text-sm">
            {children}
        </span>
      </label>
    );
}
