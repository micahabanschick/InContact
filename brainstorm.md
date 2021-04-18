# Brainstorms

## Models

1. User
    i. name
    ii. password
    iii. email

2. Work
    i. organization
    ii. title
    
3. Project

## Pages 

1. Home
2. Projects
3. Resume
4. Contact
5. About

# Assessment

1.  this.state = "foo" vs setState
    -- this.state = "foo" declare the default value(s) of state
    -- setState changes your state within the component and then rerenders the page
    ---- Ex1: this.setState({foo: this.state.foo<!-- with any kind of change -->})
    ---- Ex2: this.setState({count: this.state.count + 1})
    ---- Ex3: this.setState(prevState => return {count: prevState.count + 1}) <!-- alternative and arguably more efficient way to update part of state -->

    -- in a functional component, React gives us the hook useState to declare the default value(s) along with the function for changing the value(s)
    ---- Ex1: [state, setState] = useState({fooState})
    ---- Ex2: [stateAttribute, setStateAttribute] = useState(defaultAttribute)
    ---- Ex3: [name, setName] = useState('micah')

2. normal functions vs arrow functions
    -- normal functions 
    ---- functions can be hoisted (declared after it is defined)
    ---- 'this' calls the definition of the function (which is rarely useful in the context that 'this' is used)

    -- arrow functions
    ---- arrow functions cannot be hoisted (it can only be defined after being declared)
    ---- arrow functions cannot be constructed and so cannot be called with the 'new' keyword
    ---- 'this' calls the scope of the function (such as its props, state, attributes, etc., which is very useful in the context that 'this' is used)

4. event loop
    -- when a piece of asynchrounous code goes from stack to => webapi, and then => queue, and then => stack where its executed
    -- the event loop handles eaches piece of code in the queue, one at a time
    -- when the stack is empty, the event loop sends the first piece of code in the queue to be executed in the stack, and then the stack empties and the event loop passed the next piece of code in the queue 

5. lifecycle methods and hooks for class components
    -- componentDidMount(){}: executes a block for a mounted component ONLY the first time the component renders
    -- componentWillUnmount(){}: executes a block for a component ONLY before it is disabled or leaves the DOM
    -- componentDidUpdate(prevProps, prevState, snapshot){}: executes a block for a mounted component every time the component rerenders with an update
    ---- requires those three arguments prevProps, prevState, and snapshot 

6. lifecycle methods and hooks for functional components
    -- useEffect hook is used to execute lifecucle methods in functional components
    ---- Ex1: useEffect(() => {code that you want to execute when state.foo is updated}, [state.foo]) === componentDidUpdate(prevProps, prepState, snapshot){}
    ---- Ex2: useEffect(() => {code that you want to execute when the component first mounts}, []) === componentDidMount(){}
    ---- Ex3: useEffect(() => {return function cleanup() {code that you want to execute when the component will unmount}}) === componentWillUnmount(){}


const foo = () => {
    
    console.log(this) <!-- {foo: foo} -->
}

function foo() {
    console.log(this) <!--  {
        setTimeout = something,

    } -->
}

## Create Star Button

    1. Projects: Add a checkbox to projects that will show only starred projects if checked or all projects if not

    2. Project: Add a star button for each project so it can be marked starred or unstarred 

    3. Avoid redux/persistence

    - Data (state/props): 
[x]        1. Projects{state}: this.state.starsOnly = true/false
[x]        2. Projects{state}: this.state.projects 
            i. add projects in the Projects state with an additional attribute of isStarred
            ii. this.props.project.index.map(p => {
                return Object.assign({}, p, {isStarred: false})
            })
[x]        3. Project{props}: this.handleStar()
            i. use this.props.handleStar(**this.props.project**) to pass any changes from a project to Projects state 

    - Display (Rendering Logic/JSX): {}

    - Events (listeners/handlers): 
[x]        1. Projects: this.toggleStarsOnly()
            i. onClick will toggle between showing all projects and only those where isStarred = true
[x]     2. Projects: this.handleStar(**project**) 
            i. takes in a project as an argument and marks its state starred with setState on Projects 
        
[x]        3. Project: this.handleStar(event) 
            i. onClick will add/remove the isStarred status from the Projects state from inside the Project component

    - Data => Display => Event => Data => Display
