import React from "react";

const HeaderIcon = (props: any) => {
  return (
    <div>
      <props.Icon customClass={"h-8"} />
      <p>{props.title}</p>
    </div>
  );
};

export default HeaderIcon;
