NOTES/KICK OFF

npx create-react-app our-app


NPM:
    npm - Node Package Manager, a command line tool for handling packages of reusable JavaScript code → large and small
Node: 
    node - allowing JavaScript to be run locally on your computer, instead of in a browser

The `package.json` file is a key part of sharing JS code repositories on sites like GitHub. Instead of having to include all the dependencies' code with every project, we just include a small file, listing out what npm needs to get for the project (similar to Gemfile in Ruby)

When we run the command `npm install` in a directory where a package.json file is present, npm reads the names of each dependency from the package.json file and downloads the packages from npmjs.com

Documentation for React: 
    reactjs.org → developed and maintained by Facebook, built entirely out of JS using a combo of dependencies

    React provides a specific way to organize and structure the design of a web application.

    Using JSX, an extension of vanilla JavaScript with a specific syntax, we can write code that looks very similar to HTML. Snippets of this JSX get separated out into components, sort of like building blocks. 

    React components: - are modular, reusable, and enable a 'templating' like functionality - help us organize our user interface's logic and presentation - permitting us to think about each piece in isolation and enabling us to apply structure to complex programs

    When combined, these components form a fully working web application. These components let us separate code and functionality in a logical and easy to read way, producing highly reusable, independent, chunks.

    JSX is the return value of the functional component or the render() method os class compoment

    Every class component you use needs a render() method that returns some valid JSX. 

        In plain JavaScript, to render a div element on the page we might end up writing something like:
            let div = document.createElement('div')
            div.textContent = "hello world"
            document.body.appendChild(div)

        Three distinct steps are used here. In JSX, however, we just need to write what we want, and allow React to figure things out behind the scenes:
            <div>hello world</div>

        React sees this and understands it to be JSX, not HTML. While the exact details of how it creates the DOM element differ from traditional DOM manipulation, the end result is the same: a div element added to the page with the text 'hello world' inside.

        React must convert this JSX into regular, imperative Javascript when it renders the component:
        <h1 id="header">"Hello!"</h1>
        React.createElement("h1", {id: "header"}, "Hello!")
        Which is then committed to the actual DOM as an h1 DOM node. We never need to see this - all we write is the JSX, <h1 id="header">Hello!</h1>.


    React is more than JSX and components - React has a lot going on under the hood. Just to briefly touch on some of the cool features, React includes:
        a virtual DOM, that allows for fast, efficient, content rendering. Great for highly interactive apps;
        a declarative writing structure, allowing you to simply express how your app should look and let React handle updates and underlying data changes;
        Babel: an included transpiler that converts modern JavaScript and custom code like JSX into more widely compatible JavaScript;
        Webpack: a 'bundler' that takes all our work, along with any required dependency code, and packages it all up in a single, transferable bundle
        Built in ESLint functionality to help improve our code;

Knowing React also opens doors to similar frameworks, such as React Native for building mobile apps.

Extensions to Use:
    VS Code ES7 React/Redux
    Chrome - React Dev Tools
