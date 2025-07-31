function changeHeading() {
  const headingRef = document.querySelector("#heading");
  console.log(headingRef);

  console.log(headingRef.innerHTML);

  headingRef.innerHTML = "I am changed";
}

function queryChatbot() {
  const queryInputRef = document.querySelector("#queryInput");
  const query = queryInputRef.value;
  console.log(query)

  const responseDiv=document.querySelector("#response")
  responseDiv.innerHTML="Js is an object oriented prohgrammibng language "
}
