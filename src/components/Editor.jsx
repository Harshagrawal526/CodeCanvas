import React, { useState } from 'react'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material.css'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/css/css'
// import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'


export default function Editor(props) {
  const { language,displayName,value,onChange } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }
  
  return (

    <div className={`grow basis-0 flex flex-col bg-[#b56a6a00] p-2 ${open ? '' : 'grow-0'}`}>
      <div className="flex justify-between bg-[#1e85ca] text-[white] pl-4 pr-2 py-2 rounded-t-lg ">
        {displayName}
        <button
          type="button"
          className="text-[white] cursor-pointer ml-2 bg-none border-none"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      {/* <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="grow overflow-hidden rounded-br-lg rounded-bl-lg"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      /> */}
      <AceEditor
        value={value}
        mode={language}
        theme="monokai"
        onBeforeLoad={handleChange}
        className="grow overflow-hidden rounded-br-lg rounded-bl-lg"
        // onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  )
}