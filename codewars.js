// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
    let split = x.split(" ")
    
    split.sort((a, b) => {
      const aLastChar = a.charAt(a.length - 1)
      const bLastChar = b.charAt(b.length - 1)
      if(aLastChar > bLastChar) {
        return 1
      } else if(bLastChar > aLastChar) {
        return - 1
      } else {
        return 0
      }
      
    })
    return split
}