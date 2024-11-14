async function verAvatar() {
    // leer usuario github
    let response = await fetch(`https://api.github.com/users/cemeache`);
    let user = await response.json();

    //Mostrar Avatar
    let img = document.createElement("img");
    img.src = user.avatar_url;
    img.className = "avatar-cemeache";
    document.body.append(img);

    return response;
}

verAvatar();