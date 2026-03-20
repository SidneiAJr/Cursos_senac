function redeSocialFavorito() {
    let redesocial = (prompt("Instagram|Tiktok|Twitter|Facebbok|Linkedin: "))
    switch (redesocial) {
        case "Instagram":
            alert(`Perfeito Para Fotos Stories`)
            break;
        case "Tiktok":
            alert(`Video Curtos e muita dança`)
            break;
        case "Twitter":
            alert(`O lugar das Noticias Rapidas`)
            break; 
        case "Facebbok":
            alert(`Classico mas ainda forte para grupos`)
        case "Linkedin": 
            alert(`Rede Profissional e network`)
            break;
        default:
        alert(`Qual e cade tuas rede sociais??`)
        break;
    }
}
 redeSocialFavorito()
