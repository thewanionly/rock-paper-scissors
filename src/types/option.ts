export enum RPSOption {
  Paper = 'paper',
  Rock = 'rock',
  Scissors = 'scissors',
}

export enum LSOption {
  Lizard = 'lizard',
  Spock = 'spock',
}

// Combine RPSOption and LSOption. Export "MoveOption" as const and type.
// This works like an enum and would just need to import one "MoveOption"
// Source: https://stackoverflow.com/a/51498560/9608615
export const MoveOption = {
  ...RPSOption,
  ...LSOption,
}
export type MoveOption = RPSOption | LSOption
