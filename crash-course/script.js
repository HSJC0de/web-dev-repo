listOfEmails = document.querySelector(".list-of-emails");
usernameInput = document.querySelector("#username");
domainInput = document.querySelector("#domain");
topLevelDomainInput = document.querySelector("#top-level-domain");

console.log(listOfEmails.innerHTML);

function constructEmail(event){
  event.preventDefault();

  let email = "";
  email += `<p>${usernameInput.value}@${domainInput.value}${topLevelDomainInput.options[topLevelDomainInput.selectedIndex].text} </p>`;
  console.log(email);
  return email;
}

function addEmail(event){
  listOfEmails.innerHTML += constructEmail(event);
}