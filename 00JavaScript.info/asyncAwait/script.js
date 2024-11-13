async function verAvatar() {
    // leer usuario github
    let response = await fetch(`https://api.github.com/users/albdom222`);
    let user = await response.json();

    //Mostrar Avatar
    let img = document.createElement("img");
    img.scr = user.avatar_url;
    img.className = "avatar-alberto";
    document.body.append(img);

    return response;

}

verAvatar();