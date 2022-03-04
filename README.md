# Lost in the Wild Memory Game
_“Life is more fun if you play games.” - Roald Dahl_

Lost in the Wild is a web-based single-player memory game. Its objective is to find all the matching pairs of animals hiding in the wild. Memory games like this one, while fun to play, can also be used as tools to improve a player's short-term memory, attention, concentration, and focus.

The game was built as my second milestone project for Code Institute's Full Stack Software Development course. The topic for the project was chosen because the memory game (Pexeso) was one of my most favourite games growing up.

You can view the live website [here](https://monika-hrda.github.io/memory-game/ "Lost in the Wild | Memory Game"). 
***
## User Experience (UX)

### User Stories

As a user, I want to be able to: 

* easily understand what the purpose of the website is.
* navigate the website easily and intuitively.
* find instructions on how to play the game.
* choose various difficulty levels of the game.
* keep track of my progress in the game.
* view the website clearly on multiple devices, including my mobile device, so that I can achieve my other goals on the go.
* find the website's creator on Github, so that I can learn more about and/or follow them to keep up with their updates.

### Design

* #### Colour Scheme

The colour scheme has been designed to give a unified front with muted pastel colours. Colours on the buttons calling to action stand out and add a playful tone to the site. 

* #### Typography

  [Lobster font](https://fonts.google.com/specimen/Lobster) has been used for the main heading as it is more untraditional and conveys playfulness. 

  [Roboto](https://fonts.google.com/specimen/Roboto) has been identified as a perfect pairing to Lobster for its relative simplicity and readability (as per research on [The 30 Best Font Combinations for Web Design​](https://elementor.com/blog/font-pairing/)).

* #### Imagery

  I decided not to use photographs, but go for images of cartoon animals and vector images of foliage instead. I did this to evoke a fun and consistent style across the website. 

  The images were originally uploaded as SVG files, with the intention to animate the animals. Upon running into some complications related to not being able to access inner classes of the individual parts of the SVG files, I decided to leave this feature out for now. (I have however gained a deeper understanding of SVGs in the process and plan to look at embedding the SVG files as an object instead of an img tag in order to implement this feature.)

  The images of foliage were edited in Photoshop to use on the background to evoke a feeling of the animals being lost / hiding in a jungle.

### Wireframes

* Main menu
![main menu wireframe](docs/wireframes/menu.jpg)

* Board view
![board view wireframe](docs/wireframes/board.jpg)

* Choose board size view
![choose board size wireframe](docs/wireframes/choose-board-size.jpg)

* Result view
![result view wireframe](docs/wireframes/result.jpg)

***
## Features

### Existing Features

* The starting screen consists of **main menu** with five buttons. 
  * The first three buttons give the user option to **choose game difficulty** - Easy, Medium, or Hard. The difficulty levels represent different number of cards on the board. If the user does not make a choice, the Easy option is pre-selected as a default option. 
  * The **Rules** button opens a modal which informs the user on how to play the game. The modal can be dismissed by clicking on the Close button, the 'x' button in the corner, or by clicking anywhere outside of the modal. 
  * The **Play** button starts a game based on the selected difficulty level.

* The Game screen fades into view as the leaves on the sides of the screen fade out. 
  * At the top of the page, right above the game board, are 4 different counters and game controls.
  * **Time counter** counts minutes and seconds since the board was laid out. 
  * **Moves** counter informs the user about how many turns has he taken so far / how many pairs of cards has he turned.
  * There is the **Rules** button again, may the user want to revisit the instructions. 
  * The **Quit** button is made very visible and gives the user an option to leave the game and return to the main menu at any point in the game. 
  * It opens the **Quit modal** which asks user to choose between returning to the game or leaving the game altogether. Dismissing the button by clicking outside of it is disabled. 
  * The **Game Board** consists of either 8, 12, or 16 cards representing various difficulty levels. The cards are shuffled and the animals hiding on the front face of the cards are revealed by clicking on the card. 
  It is only possible to click on 2 cards at the most while taking a turn, and there is a timeout set to give user a chance to memorize location of the animal on those particular cards. 
  If a match is made, the cards remain turned face up. 

* The game ends when all pairs have been found and a **Win Modal** pops up to congratulate the user on winning. It also lets them know how long it took them to win the game, and how many turns did they make in the process. 
  * User has the option to either dismiss the modal by clicking on the **Close** button, or click on another button to return to **Main Menu**. 
  * At this point the button above the board changes from being a **Quit** button to **Main Menu** button.

* The Rules and Quit game modals are triggered by allocated buttons. The functionality to open modals was implemented by Bootstrap in their cases, however JavaScript was used and event listener added to the **Quit button** to have player confirm their choice. The Win modal is triggered by a call from JavaScript.

* Social media links in the **footer** redirect the user to the relevant social media pages; these open in a new tab.

* **Favicon** allows users to locate the game tab easily. 

* The game is fully **responsive** on all used screen sizes.

### Features Left to Implement in the Future

* Animations on the animal cards. Animals could wink at the player when their match has been found. 

* Ability for the user to submit their name, and being addressed by it. 

* Leaderboard allowing users to compare their score to either their personal best score or to other players' scores. 

* Playing against the computer.

* The game could remember the user's name, and preffered difficulty level for their next visit (Local Storage API). 

* 404 page

***
## Technologies Used

### Languages Used

* JavaScript
* HTML5
* CSS3

### Frameworks, Libraries & Programs Used

* [Bootstrap v4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - to assist with responsiveness and styling of the website
* [Bootstrap Icons](https://icons.getbootstrap.com/) - to display icons for social media in the footer
* [Google Fonts](https://fonts.google.com/)
* [https://svgtopng.com/](https://svgtopng.com/) - to convert SVG files to PNG
* [https://www.iloveimg.com/](https://www.iloveimg.com/) - to resize multiple PNG files at once
* [https://onlinepngtools.com/](https://onlinepngtools.com/) - to fit PNG files in a rectangle
* [https://imagecompressor.com/](https://imagecompressor.com/) - to compress image files
* [https://favicon.io/](https://favicon.io/favicon-converter/) - to generate favicon from one of the animal images
* Git
* Github
* Gitpod
* GitHub Pages
* Google Chrome Developer Tools
* Photoshop - to edit images and create a page background

***
## Testing

During the development process, the game was continuously tested and bugs and issues that were found were resolved. A few examples would be:

* Using class 'card' on cards caused issue with displaying them because of Bootstrap using the class for their own card component. The custom class was renamed as soon as I realised that.
* It took some JavaScript magic to create Bootstrap rows dynamically. 
* While working on the cards flipping mechanism, there were issues with getting cards to be responsive without getting their images squished, the rows disappering completely, images and cards overlapping, the height not being responsive, etc. A lot of it was solved by discovering the CSS properties 'aspect-ratio' and 'object-fit' (https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio, https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
* When using white colour as a background colour for the animal images, there seemed to be a colour contrast issue. Some animals were switched around to accommodate this. See example below, with the last board being one with no contrast issues:
![examples of contrast issues with cards and subsequent cards choice](docs/screenshots/cards-contrast-issue-examples.jpg)
* If the time it took the player to win had seconds < 10, the winning time was not displaying correctly. JS bug was fixed with adding some conditional logic.
![bug showing number of seconds incorrectly](docs/screenshots/winning-time-bug.jpg)
* Reloading the page as a way to quit the game stopped working when the site was deployed to GitHub Pages. This is due to GitHub not serving from the root directory. It was fixed by appending the GitHub endpoint to the redirect url string, using conditional logic, so that I could work in Gitpod and GitHub at the same time.


***
## Deployment

This project can be forked and subsequently deployed to GitHub Pages following these steps: 

1. Log in to GitHub and locate this project (you are most likely here). 
2. Locate the Fork button at the top right corner of the page and click on it. 
3. In your copy of the project (repository) click on Settings button above the repository. 
4. Locate link to 'Pages' in the left hand side menu and click on it.
5. Click the 'None' button and select the 'main' branch (it could also be called 'master'). 
6. Click on the 'Save' button. 
7. The page will refresh and the link to your newly published site will be revealed. (It usually takes a couple of minutes for the site to be built, so please be patient.)

***
## Credits

### Code

* inspiration and knowledge from:
  * content and walk-through projects from Code Institute's JS Essentials and Interactive Frontend Development modules
  * [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * official [Bootstrap](https://getbootstrap.com/docs/4.6/) website
  * [W3Schools](https://www.w3schools.com/) website and its examples
  * walkthrough on creating a memory game by [Code with Ania Kubow](https://www.youtube.com/watch?v=tjyDOHzKN0w&ab_channel=CodewithAniaKub%C3%B3w)
* creating a flip card (HTML & CSS part, customized) - https://www.w3schools.com/howto/howto_css_flip_card.asp
* Bootstrap modal - https://getbootstrap.com/docs/4.6/components/modal/#static-backdrop


### Content

Content written by Monika Hrda.

### Media

* Images of cartoon animals for playing cards - [Vecteezy](https://www.vecteezy.com/vector-art/5277505-set-of-animal-illustrations-in-a-cute-vector-graphic)
* Image used for the back of cards as well as the background - [Vecteezy](https://www.vecteezy.com/vector-art/1892423-tropical-branches-with-leaves-pastel-color-on-white-background)
* Image used as background (tone & colours edited by me in Photoshop) - [Vecteezy](https://www.vecteezy.com/vector-art/829994-print-tropical-leaves-background)

### Acknowledgements

Fellow Slackers from Code Institute's Slack channel deserve a big thank you for their support, advice, encouragement, and friendship. 