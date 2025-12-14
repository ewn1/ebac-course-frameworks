document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('#avatar')
    const profileName = document.querySelector('#name')
    const profileUsername = document.querySelector('#username')
    const profileRepository = document.querySelector('#repository')
    const profileFollowers = document.querySelector('#followers')
    const profileFollowing = document.querySelector('#following')
    const profileLink = document.querySelector('#gb-link')

    fetch("https://api.github.com/users/ewn1")
        .then(function(answer) {
            return answer.json()
        })
        .then(function(json) {
            profileAvatar.src = json.avatar_url
            profileName.innerText = json.name
            profileUsername.innerText = json.login
            profileRepository.innerText = json.public_repos
            profileFollowers.innerText = json.followers
            profileFollowing.innerText = json.following
            profileLink.href = json.html_url
        })
})