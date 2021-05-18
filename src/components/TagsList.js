import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'
import slugify from 'slugify'

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map(tag => {
          const tagName = tag[0]
          const tagCount = tag[1]
          const tagSlug = slugify(tagName, {lower:true})
          return <Link to={`/tags/${tagSlug}`} key={tagName}>{tagName} ({tagCount})</Link>
        })}
      </div>
    </div>
  )
}

export default TagsList
