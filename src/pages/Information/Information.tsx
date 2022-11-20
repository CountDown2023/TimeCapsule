import InformationView from "./Information.view";

const Information = () => {
  const onSubmitVoc = (content: string) => {
    // TODO: API 연동
    console.log(content);
  };

  return <InformationView onSubmitVoc={onSubmitVoc} />;
};

export default Information;
