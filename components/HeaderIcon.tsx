import React from "react";

const HeaderIcon = (props: any) => {
  return (
    <div className="mx-4 flex flex-col hover:text-white active:text-red-400 cursor-pointer lg:mx-6">
      <props.Icon customClass="h-8 " />
      <p className="my-2">{props.title}</p>
    </div>
  );
};

export default HeaderIcon;
