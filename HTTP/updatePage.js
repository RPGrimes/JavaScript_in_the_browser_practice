const updatePage = (repoData) => {
  document.querySelector('#repo-name').innerText = repoData.full_name;
    document.querySelector('#repo-image').src = repoData.organization.avatar_url
    document.querySelector('#repo-description').innerText = repoData.description;
    document.querySelector('#repo-link').setAttribute('href', repoData.html_url);
    document.querySelector('#repo-language').innerText = repoData.language;
}

module.exports = updatePage;