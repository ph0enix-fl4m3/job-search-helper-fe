import Button from "../../components/shared/button/Button";
import Form from "../../components/shared/form/Form";
import * as FormConfig from "../../components/shared/form/Form";

function BiographyPage() {
  const pageTitle = "General Information";
  const generalInformationFormConfig: FormConfig.FormParams = {
    title: "Basic information",
    fields: [
      {
        label: "First Name",
        placeholder: "Enter your first name",
        type: "text",
        id: "first-name",
      },
      {
        label: "Last Name",
        placeholder: "Enter your last name",
        type: "text",
        id: "last-name",
      },
      {
        label: "Date of Birth",
        type: "date",
        id: "date-of-birth",
      },
      {
        label: "Country",
        placeholder: "Enter your country",
        type: "text",
        id: "date-of-birth",
      },
      {
        label: "City",
        placeholder: "Enter your country",
        type: "text",
        id: "city",
      },
      {
        label: "Email",
        placeholder: "Enter your email",
        type: "text",
        id: "email",
      },
    ],
  };

  const professionalBackgroundFormConfig: FormConfig.FormParams = {
    title: "Professional Background",
    fields: [
      {
        label: "Current Occupation",
        type: "text",
        placeholder: "e.g., Software Developer, Student",
        id: "current-occupation",
      },

      {
        label: "Years of Experience",
        type: "number",
        placeholder: "e.g., 3",
        id: "years-of-experience",
      },

      {
        label: "Education Level",
        type: "select",
        options: [
          "High School",
          "Bachelor's Degree",
          "Masters's Degree",
          "PhD",
          "Other",
        ],
        id: "education-level",
      },

      {
        label: "Field of Study",
        type: "text",
        placeholder: "e.g., Computer Science, Design",
        id: "field-of-study",
      },
    ],
  };

  // const technicalSkillsFormConfig: FormConfig.FormParams = {
  //   title: "Technical Skills",
  //   fields: [
  //     {
  //       label: "Current Occupation",
  //       type: "text",
  //       placeholder: "e.g., Software Developer, Student",
  //     },

  //     {
  //       label: "Years of Experience",
  //       type: "number",
  //       placeholder: "e.g., 3",
  //     },

  //     {
  //       label: "Education Level",
  //       type: "select",
  //       options: [
  //         "High School",
  //         "Bachelor's Degree",
  //         "Masters's Degree",
  //         "PhD",
  //         "Other",
  //       ],
  //     },

  //     {
  //       label: "Field of Study",
  //       type: "text",
  //       placeholder: "e.g., Computer Science, Design",
  //     },
  //   ],
  // };

  return (
    <>
      <main className="flex-grow w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl mt-10 mb-20 p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{pageTitle}</h1>
        <form className="space-y-10">
          <section>
            <Form
              title={generalInformationFormConfig.title}
              fields={generalInformationFormConfig.fields}
            ></Form>
          </section>
          <section>
            <Form
              title={professionalBackgroundFormConfig.title}
              fields={professionalBackgroundFormConfig.fields}
            ></Form>
          </section>
        </form>

        <div className="flex justify-end pt-6">
          <Button
            label="Save Data"
            onClick={() => {
              console.log("This works!!");
            }}
          ></Button>
        </div>
      </main>
    </>
  );
}

export default BiographyPage;
