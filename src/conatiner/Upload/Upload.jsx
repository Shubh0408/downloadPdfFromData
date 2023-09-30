import React from 'react'

const Upload = () => {
  return (
    <div>
      <h2>HTML Forms</h2>

<form action="/action_page.php">
  <label for="fname">Shape</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="fname">Size</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="fname">Cts</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="fname">Code</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="lname">Pid</label><br/>
  <input type="text" id="lname" name="lname"/><br></br>
  <input type="submit" value="Submit" />
</form> 
    </div>
  )
}

export default Upload