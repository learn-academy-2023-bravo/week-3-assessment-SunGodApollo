# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the thing used in React. It is a thing that has html blended with Javascript. In order to use JavaScript inside of JSX, curly brackets must be used in order for the JavaScript to work. That is the syntax that is used to differentiate between HTML and JavaScript.

Researched answer: I was sort of right. JSX allows us to write HTML in JavaScript. It simplifies this process by eliminating steps. JSX translates html into javascript in real time. for example, we can declare an h1 tag. 
<h1>Hello, world!<h1>. Then, if we wish to use javascript inside of that tag, we must wrap it inside of curly braces. <h1>Hello, world! {10 + 10} dollars says jsx makes React easier!<h1>



1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn is a package manager. Yarn stands for, "yet another resource negotiator". It was a program developed by facebook to make the using of Jest and other things a bit easier. The files that are modified are the files that you wish to modify. That is, if I wish to add yarn dependencies to the current file I'm working on, I'd simply input yarn into the terminal and the computer will add yarn dependencies to the file. I can also specify which dependencies I want to add. For example, I could say, yarn add jest, and yarn will add jest dependencies in order to test the code I'm currently working on with jest.

Researched answer: yarn is one of the main javascript package managers. It was meant to be used as a replacement for npm which was used widely by many developers. Yarn was introduced as a faster and more secure way to manage packages, especially when dealing with very large codebases. Yarn can also install many packages at once, something that npm could not do. 

3. What is a React component?

Your answer: Everything in react is a component. A component is like a piece to a puzzle, or a way to separate work into different sections in order to manage errors and separate logic more efficiently. For example, the App component in react is mainly used to store the logic of the application; this can be state variables and other logic. This logic can then be used to handle changes and then these changes can be rendered within other components. Components, as stated earlier, make it easy to keep track of work inside an application. If one was to do all the work inside of a single component, like App.js, then one would have to scour over all the logic of the application, which could include a lot.

Researched answer: Components let a developer split the application into separate and reusable pieces. Components can be thought of as similar to functions in javascript, since functions can be re-used as many times as the user wishes. Components accept inputs from the user, which are called properties, from the main component App.js. These inputs are passed into the component as properties, or props.

4. What is the difference between state values and props in React?

Your answer: State values are code that can be changed over time, depending on the input of the user. Once can then create a handleChange function, and make that function change the state of the state variable. Properties, or props, are then passing that change into another component, or the child. We can do so by including a component call in our App component, and including the state variable inside of the component call. We then go into said component and call it using props.stateVariable.

Researched answer: props are used to trasnfer data from parent component to child component. State is owned locally, and the component itself updates it. Props are owned and read by the parent. A prop can then be passed down to the child from the parent's state function. All the work, however, is done by the parent, and the child only displays that. 

5. What is the DOM?

Your answer: dom is Document Object Model. It is a piece of code that is always listening for changes that the user provides. That is all that I remember from the lecture. 

Researched answer: DOM allows javascript to access snippets of HTML more easily. The DOM represents the entire application's user interface; DOM is usually represented by a tree structure. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A div tag is a tag in HTML that is normally used to visually divide sections of HTML in HTML code. div tags are useful for giving class names. These class names can then be used to make visual changes and make applications more visually pleasing. A span tag is a tag which spans the whole page.

Researched answer: div tags allow modifications to be made for the whole block that is enclosed in the div tag. A span tag is used more for making modifications in a line, or a sentence. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Also known as OOP, oop is a fundamental programming process that is used by nearly every developer throughout their career. This is the most popular method. It relies on the use of classes and objects. This makes programs more reusable and simple.

2. Ruby: Ruby is elegant and simple. It is object based, meaning that objects are used a lot in this language. It is a back-end programming language. It is very versatile. The ruby language is used to build applications, websites, and even automation tools.

3. Implicit return: When a return is implied, there is no need to use the return in a function. This is mostly common in arrow functions that do not use curly brackets. However, if curly brackets are used, then the return is explicit.

4. Ruby blocks: blocks in ruby are descirbed as anonymous functions that can then be passed into methods. Blocks are enclosed in a do-end statement or curly braces. Curly braces are used for single line blocks of code. blocks can have arguments, and these are often defined by placing them in between two | | characters.

5. Ruby hashes: a ruby hash is a data structure used to store data. These have no numberical indexes. Hashes are created by placing curly braces outside of a hash, { }. So, essentially, a hash is similar to an object in javascript?
