const produits = [
 { id: 1, catégorie:"Accessoires", nom: "Clavier", prix: 120, stock:5 },
 { id: 2, catégorie:"Accessoires", nom: "Souris", prix: 80, stock:8 },
{ id: 3, catégorie:"Informatique", nom: "Écran", prix: 900, stock:0 },
{ id: 4, catégorie:"Accessoires", nom: "Casque", prix: 240, stock:3 }
];

for (const produit of produits) {
      console.log(`${produit.nom} : ${produit.prix} MAD`);}

const produitsDisponibles = produits.filter(p => p.stock > 0);
console.log(`Nombre de produits disponibles : ${produitsDisponibles.length}`);

const valeurStock = produits.reduce((somme, p) => somme + (p.prix * p.stock), 0);
console.log(`Valeur totale du stock : ${valeurStock} MAD`);

const produitsDispo = produits.filter(p => p.stock > 0);
if (produitsDispo.length === 0) {
  console.log("Aucun produit disponible.");
} else {
  let moinsCher = produitsDispo[0];
  for (const p of produitsDispo) {
    if (p.prix < moinsCher.prix) {
      moinsCher = p;
    }
  }
  console.log(`Le produit le moins cher est : ${moinsCher.nom} (${moinsCher.prix} MAD)`);
}

const resumeproduits = produits.map(p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
for (const ligne of resumeproduits) {
  console.log(ligne);
}


