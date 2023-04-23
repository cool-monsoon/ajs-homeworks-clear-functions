const characters = [
  { name: 'маг', health: 50 },
  { name: 'мечник', health: 15 },
  { name: 'лучник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'мечник', health: 0 },
  { name: 'лучник', health: 60 },
];

characters.filter((item) => item.health > 0);

export default function showHealth(character) {
  if (character.health < 15 && character.health > 0) {
    return 'critical';
  }
  if (character.health >= 15 && character.health <= 50) {
    return 'wounded';
  }
  if (character.health > 50) {
    return 'healthy';
  }

  return null;
}
