function getRepositories() {
  const req = new XMLHttpRequest()
  const user = document.getElementById('username-field').value;
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/users/${user}/repos`)
  req.send()
}