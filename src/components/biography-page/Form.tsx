export interface FormField {
  label: string;
  type: "text" | "date" | "number" | "select";
  placeholder?: string;
  options?: string[];
}

export interface FormParams {
  title?: string;
  fields: FormField[];
}

function Form({ title, fields }: FormParams) {
  return (
    <>
      <form className="space-y-10">
        <section>
          {title !== null && (
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">
              {title}
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map((field) => {
              return (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    {field.type === "text" && (
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                      />
                    )}

                    {field.type === "date" && (
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                      />
                    )}

                    {field.type === "number" && (
                      <input
                        type="number"
                        placeholder={field.placeholder}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                      />
                    )}

                    {field.type === "select" && (
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:outline-none">
                        {field.options?.map((option) => {
                          return <option>{option}</option>;
                        })}
                      </select>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </form>
    </>
  );
}

export default Form;
