// 1. Declare variables and capture input.
const adjective = prompt('Please type an adjective.');
const adjective2 = prompt('Please type an adjective.');
const noun = prompt("Please type a noun.");
const noun2 = prompt("Please type a noun.");
const noun3 = prompt("Please type a noun.");
const noun4 = prompt("Please type a noun.");
const noun5 = prompt("Please type a noun.");
const verb = prompt("Please type a verb.");
const verb2 = prompt("Please type a verb.");
const num = prompt("Please type a number.");
const num2 = prompt("Please type a number.");

// 2. Combine the input with other words to create a story.
const sentence = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to make a videogame. 
                They asked their friend, the ${adjective2} ${noun} for help. The ${adjective2} ${noun} said to make a ${noun3} who can ${verb}. This 
                ${noun3} will ${verb} ${num} times to save the ${noun4} from ${num2} ${verb2} ${noun5}.</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('p').innerHTML = sentence;





