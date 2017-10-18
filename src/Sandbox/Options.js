import React from 'react';
var placeholder = "http://3.bp.blogspot.com/-JfemdXlQ-Ns/UzHKRp3KoeI/AAAAAAABAmY/7N2ghKTYI9o/s3200/Screen+Shot+2014-03-25+at+7.21.15+PM.png";
var Options = () => {
  return (
    <div>
      Options
      <ul>
        <li>placeholder option</li>
        <li>placeholder option</li>
        <li>placeholder option</li>
      </ul>

      <h1>Placeholder SandBox</h1>
      <div>
        <img src={placeholder} height="300" width="300"/>
      </div>
    </div>
  );
}

export default Options;