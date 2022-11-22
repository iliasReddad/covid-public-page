import { Pipe, PipeTransform } from '@angular/core';
  
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'CardTypeColorPipe'})
export class CardTypeColorPipe implements PipeTransform {
  transform(ele: any): string {
  
    let color: string;
  
    switch (ele.split(',')[1]) {
      case 'Anger':
        color = 'red lighten-1';
        break;
      case 'Approval':
        color = 'blue lighten-1';
        break;
      case 'Optimism':
        color = 'green lighten-1';
        break;
      case 'Fear':
        color = 'brown lighten-1';
        break;
      case 'Mistrust':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Sadness':
        color = 'deep-purple accent-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'color: ' + color;
  
  }
}