import React from "react";
import InputField from "../login/InputField";
import ButtonField from "../login/ButtonField";

interface Props {
  placeholder: string;
}

const SearchBar: React.FC<Props> = (props) => {
  function searchParams(input: string) {}

  function submitQuery() {}

  return (
    <div id="search_bar">
      <InputField
        display="inline-block"
        type="text"
        label="query"
        passUp={searchParams}
        placeholder={props.placeholder}
      />
      <ButtonField id={0} text="Search" submitForm={submitQuery} />
    </div>
  );
};

export default SearchBar;
