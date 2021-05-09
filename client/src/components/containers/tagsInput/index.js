import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import TagsInputStyle from "./styled";

const TagsInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();

    if (input !== "") {
      setTags([...tags, input]);
      setInput("");
    }

    console.log(tags);
  };

  return (
    <TagsInputStyle>
      <div>
        <ul>
          {tags &&
            tags.map((tag, index) => (
              <li key={index} className="tag__element">
                <span>{tag}</span>
                <i onClick={() => removeTags(index)}>
                  <MdClose />
                </i>
              </li>
            ))}

          <div className="input__container">
            <div className="input__wrapper">
              <input
                type="text"
                onChange={addTags}
                className="tag__input"
                value={input}
                placeholder="enter site url"
              ></input>
            </div>
            <button onClick={(e) => clickHandler(e)}>
              <div class="submit__tag">SUBMIT</div>
            </button>
          </div>
        </ul>
      </div>
    </TagsInputStyle>
  );
};

export default TagsInput;
