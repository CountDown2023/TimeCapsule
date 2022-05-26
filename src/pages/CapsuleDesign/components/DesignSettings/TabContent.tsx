import React from "react";
const TabContent = (props: any) => {
  if (props.tab === 0) return <div>0</div>;
  else if (props.tab === 1) return <div>1</div>;
  else return <div>2</div>;
};

export default TabContent;
