
            const LinksSocialMedia = {
                github: "Turith",
                youtube: "I don't have this social media",
                facebook: "noneExistent",
                instagram: "404",
                twitter: "404"
            }

            function changeSocialMediaLinks(){
                for(let li of socialLinks.children){ 
                    const social = li.getAttribute('class')
                    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
                }
            }

            changeSocialMediaLinks()

            function getGitHubInfo(){
                const url = `https://api.github.com/users/${LinksSocialMedia.github}`

                fetch(url)
                .then(response => response.json())
                .then(data => {
                    userName.textContent = data.name
                    userBio.textContent = data.bio
                    userLink.href = data.html_url
                    userPhoto.src = data.avatar_url
                    userLogin.textContent = data.login
                })
            }

            getGitHubInfo()
