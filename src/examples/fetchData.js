import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const staticData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        sampleData
        complexData {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(staticData)
  return <div>
    <h2>{data.site.siteMetadata.person.name}</h2>
    <div>
      {data.site.siteMetadata.complexData.map((item, index)=> {
        return <p key={index}>{item.name}:{item.age}</p>
      })}
    </div>
  </div>
}

export default FetchData
