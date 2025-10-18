import Form from "../../components/biography-page/Form";
import * as FormConfig from "../../components/biography-page/Form";

function BiographyPage() {
  const pageTitle = "General Information";
  const generalInformationFormConfig: FormConfig.FormParams = {
    title: "Basic information",
    fields: [
      {
        label: "First Name",
        placeholder: "Enter your first name",
        type: "text",
      },
      {
        label: "Last Name",
        placeholder: "Enter your last name",
        type: "text",
      },
      {
        label: "Date of Birth",
        type: "date",
      },
      {
        label: "Country",
        placeholder: "Enter your country",
        type: "text",
      },
      {
        label: "City",
        placeholder: "Enter your country",
        type: "text",
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "text",
      },
    ],
  };

  return (
    <>
      <main className="flex-grow w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl mt-10 mb-20 p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{pageTitle}</h1>
        <Form
          title={generalInformationFormConfig.title}
          fields={generalInformationFormConfig.fields}
        ></Form>
      </main>
    </>
  );
}

export default BiographyPage;
