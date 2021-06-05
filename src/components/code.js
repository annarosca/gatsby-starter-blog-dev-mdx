import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import theme from "prism-react-renderer/themes/okaidia"

const copyToClipboard = str => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

const Button = props => (
  <button
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      border: "none",
      boxShadow: "none",
      textDecoration: "none",
      margin: "8px",
      padding: "8px 12px",
      background: "#E2E8F022",
      borderRadius: "8px",
      cursor: "pointer",
      color: "#E2E8F0",
      fontSize: "14px",
      fontFamily: "sans-serif",
      lineHeight: "1",
    }}
    {...props}
  />
)

const LanguageRibbon = props => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      border: "none",
      boxShadow: "none",
      textDecoration: "none",
      marginLeft: "2rem",
      padding: "8px 12px",
      background: "#d5e6ff",
      borderRadius: " 0px 0px 8px 8px",
      color: "#000",
      fontSize: "12px",
      textTransform: "uppercase",
      fontWeight: "500",
      fontFamily: "sans-serif",
      lineHeight: "1",
    }}
  >
    {props.language}
  </div>
)

const FileRibbon = props => (
  <div
    style={{
      display: "block",
      padding: "8px 2rem",
      borderBottom: "2px solid #d5e6ff",
      boxShadow: "none",
      textDecoration: "none",
      color: "white",
      fontSize: "13px",
      textTransform: "lowercase",
      fontWeight: "500",
      fontFamily: "sans-serif",
      fontStyle: "italic",
      lineHeight: "1",
    }}
  >
    {props.title}
  </div>
)

export const Code = ({ codeString, language, metastring, title, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false)

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              borderRadius: "8px",
              overflow: "auto",
            }}
          >
            {title && <FileRibbon title={title}></FileRibbon>}
            <div
              style={{
                display: "flex",
                position: "relative",

                padding: "0 0 40px 0",
              }}
            >
              {language && (
                <LanguageRibbon language={language}></LanguageRibbon>
              )}
              <Button
                onClick={() => {
                  copyToClipboard(codeString)
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 3000)
                }}
              >
                {isCopied ? "🎉 Copied!" : "Copy"}
              </Button>
            </div>
            {tokens.map((line, i) => (
              <div
                {...getLineProps({ line, key: i })}
                style={{
                  padding: "1rem 2rem 1rem 2rem",
                }}
              >
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}
