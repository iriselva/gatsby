import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>

      <h1 style={headingStyles}>
        Hello gatsby and Netlify Webhooks!</h1>

        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      
    </main>
  )
}

export default IndexPage
