# Spaceman Project Proposal

## Project Choice

- [ ] Flash Cards
- [ ] Trivia (Self-scoring)
- [x] Spaceman
- [ ] Tower of Hanoi
- [ ] Simon

## Project Description

My app is called Spaceman. It's a game where players are provided a string of blank spaces(pun intended) and it is their goal to guess the letters of the word! When the player guesses a correct letter from the hidden word, that letter is added into the blank space. When the player makes an incorrect guess, the Spaceman adds a part to his ship. If the player fills in all the blank spaces and guesses the correct word, the player wins! If the player incorrectly guesses too many times, the Spaceman will take off in his spaceship. Users will have the option to play again or reset.

## Wire Frames

**Initial Landing View**
![Screen Shot 2020-07-10 at 9 01 07 AM](https://media.git.generalassemb.ly/user/28784/files/f41ceb00-c28b-11ea-818c-70debaafdd57)
**Results View of a loss**
![Screen Shot 2020-07-10 at 9 08 56 AM](https://media.git.generalassemb.ly/user/28784/files/03e8ff00-c28d-11ea-8349-5e45ff544bbc)
**Results View of a win**
![Screen Shot 2020-07-10 at 9 11 25 AM](https://media.git.generalassemb.ly/user/28784/files/5f1af180-c28d-11ea-8dcb-5bfbfa0edcad)

## User Stories

#### MVP Goals

- As a player, I want my game to recognize my letter input, so I know if I was right or wrong.
- As a player, I want to know the letters that have already been guessed, that were correct.
- As a player, I want to know the letters that have already been guessed, that were wrong.
- As a player, I want to know when I have won the game.
- As a player, I want to know when I have lost the game.
- As a player, I want to be able to reset the game whenever I deem necessary.
- As a developer, I want to create an interactive environment that is visually pleasing

#### Stretch Goals

- As a developer, I would like a loss animation of having the rocket ship take off.
- As a developer, I would like animation of the spaceship being built, throughout the game.
- As a developer, I would like to build different levels of difficulty.
- As a developer, I would like my spaceman to taunt the player on wrongly guessed letters.

#### Technologies Used

- HTML
- CSS
- Javascript

#### Approach Taken

- I initially sat down and actually played a game of "Spaceman", thinking through what the major components of the game would be. I also thought about what some of the major or main variables would be for the game and how they would interact within the functions. I found though, that my initial foundation was a little bit off and I needed more nuanced functions, that handled smaller aspects. So although I initially when in with a plan, I had to continuously update said plan to get the functionality that I desired.

#### Unsolved problems

- Although the majority of my words use a letter character only once, I was having trouble with words that had multiple of the same character, I.E. Apple or Ball. I also was having a hard time populating the full word, when a player lost, revealing what the word was. Lastly, in the UserInput box, I struggled to get it to limit the choice to one character. At this current time, you can upload a whole string of words. It will come back incorrect but still not what I would like.
