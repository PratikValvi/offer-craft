export const TINYMCE_API_KEY =
  "7ljmbbttb7o13o43rs6prrd95htqgw44qgwip3s9qmd9hig3";

export const tinymceEditorConfig = {
  height: 400,
  menubar: false,
  plugins:
    "tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste autocorrect a11ychecker typography inlinecss",
  toolbar:
    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
  tinycomments_mode: "embedded",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
};

export const initialValue = `
<p>Dear [Recipient's Name],</p>
<p>We are pleased to offer you the position of [Position Title] at [Company Name]. Your skills, experience, and qualifications make you an excellent fit for our team. We believe that your contributions will significantly enhance our company's success.</p>
<p>Your annual salary will be [Salary Amount], along with additional benefits such as [List of Benefits]. Your start date is scheduled for [Start Date], and your working hours will be [Working Hours].</p>
<p>We are confident that your expertise will bring valuable insights to our team and contribute to our continued growth. Please review the attached contract for further details.</p>
<p>We are excited to have you join us and look forward to working together!</p>
<p>Best regards,</p>
<p>[Your Name]</p>
<p>[Your Position]</p>
<p>[Company Name]</p>
`;

export const defaultTempleName = "Default Template";

export const defaultTemplateJSON = {
  "type": "BODY",
  "content": [
    {
      "type": "P",
      "content": [
        "Dear [Recipient's Name],"
      ]
    },
    {
      "type": "P",
      "content": [
        "We are pleased to offer you the position of [Position Title] at [Company Name]. Your skills, experience, and qualifications make you an excellent fit for our team. We believe that your contributions will significantly enhance our company's success."
      ]
    },
    {
      "type": "P",
      "content": [
        "Your annual salary will be [Salary Amount], along with additional benefits such as [List of Benefits]. Your start date is scheduled for [Start Date], and your working hours will be [Working Hours]."
      ]
    },
    {
      "type": "P",
      "content": [
        "We are confident that your expertise will bring valuable insights to our team and contribute to our continued growth. Please review the attached contract for further details."
      ]
    },
    {
      "type": "P",
      "content": [
        "We are excited to have you join us and look forward to working together!"
      ]
    },
    {
      "type": "P",
      "content": [
        "Best regards,"
      ]
    },
    {
      "type": "P",
      "content": [
        "[Your Name]"
      ]
    },
    {
      "type": "P",
      "content": [
        "[Your Position]"
      ]
    },
    {
      "type": "P",
      "content": [
        "[Company Name]"
      ]
    }
  ],
  "attributes": {
    "id": "tinymce",
    "class": "mce-content-body",
    "data-id": "tiny-react_62079944451702924480255",
    "aria-label": "Rich Text Area. Press ALT-0 for help.",
    "contenteditable": "true",
    "spellcheck": "false"
  }
}

export const linkedInProfileLink = "https://www.linkedin.com/in/pratik-rajendra-valvi/";