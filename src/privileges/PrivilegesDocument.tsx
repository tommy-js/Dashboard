import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import FixedCheckbox from "./FixedCheckbox";

const PrivilegesDocument: React.FC = () => {
  return (
    <div id="privileges_page">
      <Header fontSize="22px" text="Employee Privileges" />
      <SubHeader text="This page outlines the privileges available to different employees" />
      <Header fontSize="18px" text="General" />
      <SubHeader text="Can create" />
      <FixedCheckbox status={true} label="Users" />
      <FixedCheckbox status={true} label="Documents, Blogs and Tutorials" />
      <FixedCheckbox status={false} label="Stocks" />
      <SubHeader text="Can modify" />
      <FixedCheckbox status={true} label="Users" />
      <FixedCheckbox status={true} label="Documents, Blogs and Tutorials" />
      <FixedCheckbox status={true} label="Stocks" />
      <SubHeader text="Can delete" />
      <FixedCheckbox status={true} label="Users" />
      <FixedCheckbox status={true} label="Documents, Blogs and Tutorials" />
      <FixedCheckbox status={false} label="Stocks" />
      <Header fontSize="18px" text="Premium" />
      <SubHeader text="Can create" />
      <FixedCheckbox status={true} label="Users" />
      <FixedCheckbox status={true} label="Documents, Blogs and Tutorials" />
      <FixedCheckbox status={true} label="Stocks" />
      <SubHeader text="Can modify" />
      <FixedCheckbox status={true} label="Users" />
      <FixedCheckbox status={true} label="Documents, Blogs and Tutorials" />
      <FixedCheckbox status={true} label="Stocks" />
      <SubHeader text="Can delete" />
      <FixedCheckbox status={true} label="Users" />
      <FixedCheckbox status={true} label="Documents, Blogs and Tutorials" />
      <FixedCheckbox status={true} label="Stocks" />
    </div>
  );
};

export default PrivilegesDocument;
