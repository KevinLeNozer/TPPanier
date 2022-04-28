
export const createProduit = (nom, prix, poids, couleur, taille) => {

    let produit = { nom: nom, prix: prix, poids: poids, couleur: couleur, taille: taille };
    return produit;

}
let produit = createProduit("t-shirt", 15, 0.5, "rouge", "XL");
let panier= [];

export const ajouterPanier = (produit, quantite) => {
    if(produit && quantite != 0) {
        panier.push({produit:produit, quantite:quantite});
    }
}

ajouterPanier(produit, 3);
console.log(panier);

export const calculeTva = () => {
    let tva = 0;
    panier.forEach(element => {
        tva += element.produit.prix*20/100*element.quantite;
    });
    return tva
}
console.log(calculeTva())

export const prixTotal = () => {
    let total = 0;
    panier.forEach(element => {
        total += element.produit.prix*element.quantite
    });
    total += calculeTva();
    return total
}
console.log(prixTotal());


