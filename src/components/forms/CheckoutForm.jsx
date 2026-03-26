const fields = [
  { name: "fullName", label: "Full Name", placeholder: "Enter your full name" },
  { name: "phone", label: "Phone Number", placeholder: "0xx xxx xxxx" },
  { name: "address", label: "Address", placeholder: "Street, house number..." },
];

export default function CheckoutForm({ form, onChange, onSubmit }) {
  return (
    <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
      {fields.map(({ name, label, placeholder }) => (
        <div key={name} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">{label} *</label>
          <input
            name={name}
            value={form[name]}
            onChange={onChange}
            placeholder={placeholder}
            className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition"
          />
        </div>
      ))}

      <div className="flex gap-4">
        {["province", "district"].map((name) => (
          <div key={name} className="flex flex-col gap-1 flex-1">
            <label className="text-sm font-medium text-gray-600 capitalize">{name} *</label>
            <input
              name={name}
              value={form[name]}
              onChange={onChange}
              placeholder={name === "province" ? "e.g. Phnom Penh" : "e.g. Chamkarmon"}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Note (optional)</label>
        <textarea
          name="note"
          value={form.note}
          onChange={onChange}
          placeholder="Any special instructions..."
          rows={3}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition resize-none"
        />
      </div>

      <button
        type="button"
        onClick={onSubmit}
        className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition shadow-md"
      >
        Confirm Order
      </button>
    </div>
  );
}




