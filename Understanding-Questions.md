# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The click handler is activated
* the dispatch activates the *action* of addOne and reaches into the reducer's ADD_ONE
* The reducer spreads the state and returns the "total" slice with an added 1
* TotalDisplay shows the total plus 1.
