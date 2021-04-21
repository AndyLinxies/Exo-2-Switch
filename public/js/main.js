let meteo = prompt('Quelle meteo ?');
switch (meteo) {
    case 'pluie':
        alert('Il pleut je prend le parapluie')
        break;
    case 'soleil':
        alert('Il fait soleil.Profitez en pour bronzer')
        break;
    case 'nuageux':
        alert('Risque de pluie. Faites attention')
        break;
    case 'brume':
        alert('Il fait brumeux, veuillez ouvrir les yeux')
        break;
    case 'neige':
        alert('Il va neiger veuillez mettre vos bottes')
        break;

    default:
        alert('Pour les conseils veuillez taper soit pluie,soleil,nuageux,brume ou neige. Merci')
        break;
}