const setupTags = recipes => {
  const tags = {}

  // For each item in the recipes array, get the list of tags => tagsList
  for (let item of recipes) {
    const tagsList = item.content.tags
    //For each tag in the tagsList array, verify if it exists in the tags objects,
    for (let tag of tagsList) {
      // If it exists, add +1 to the value
      if(tag in tags) {
        tags[tag]++
      }
      // Otherwise, create the tag with the value of 1
      else {
        tags[tag] = 1
      }
    }
  }

  // Take the tags object
  // Transfor it in an array
  // Sort it by alphabetical order
  const orderedTags = Object.entries(tags).sort()

  return orderedTags
}

export default setupTags
