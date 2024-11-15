async function verAvatar() {
    const response = await fetch('https://api.github.com/users/cemeache');
    const usu = await response.json();

    let img = document.createElement('img');
    img.src = usu.avatar_url;
    img.className = "avatar-celia";
    document.body.append(img);

    console.log(response);
}

//verAvatar();