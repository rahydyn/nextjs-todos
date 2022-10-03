export const GoogleFormsView = ({ formsContent }) => {
  const items = formsContent.info.items;
  return (
    <>
      <div>Registerd Google Forms</div>
      <div>
        <span>Form ID : </span>
        <p>{formsContent.formId}</p>
      </div>
      <div>
        <span>Title : </span>
        <p>{formsContent.info.title}</p>
      </div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <span>Question {index}. : </span>
            <p>{item.title}</p>
          </div>
        );
      })}
    </>
  );
};

// sample content
// {
//     "formId": "1AEjMA7Wxtn8yPHXIhxWUzig22f8JIURa60Rk-1ZnUCY",
//     "info": {
//         "title": "インタビューフォーム",
//         "documentTitle": "インタビ",
//         "isionId": "00000017",
//         "responderUri": "https://docs.google.com/forms/d/e/1FAIpQLSeYiFISfpboxj0wOXo1HIU91tMNjI0JJjjDlE3vj1ICmY1_Kg/viewform",
//         "items": [
//             {
//                 "itemId": "0d72c87a",
//                 "title": "お名前",
//                 "questionItem": {
//                     "question": {
//                         "questionId": "57ab5e22",
//                         "requd": "True",
//                         "textQuestion": {}
//                     }
//                 }
//             },
//             {
//                 "itemId": "2d5367ab",
//                 "title": "趣味趣味に関する",
//                 "questionItem": {
//                     "question": {
//                         "questionId": "b5f",
//                         "textQuestion": {}
//                     }
//                 }
//             }
//         ]
// }
