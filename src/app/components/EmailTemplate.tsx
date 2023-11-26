type EmailTemplateProps = {
  subject: string;
  message: string;
};

const EmailTemplate = ({ subject, message }: EmailTemplateProps) => (
  <div>
    <h1>{subject}</h1>
    <div>{message}</div>
  </div>
);

export default EmailTemplate;
