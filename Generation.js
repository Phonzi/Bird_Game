/*
 * A function that takes in two arrays and determines whether they are exactly equal
 *
 * Params:
 * 	arr1: Array
 * 	arr2: Array
 * Returns:
 * 	Boolean
 *
 * NOTES:
 * 	The arrays may be multidimensional
 * 	The dimensions may not be equal (should return false in this case)
 * 	arraysEqual([1,3,5],[1,3,5]) -> true
 * 	arraysEqual([1,3,5],[1,3,6]) -> false
 * 	arraysEqual([1,3,[5]],[1,3,5]) -> false
 * 	arraysEqual([1,3,[5,6]],[1,3,[5,6]]) -> true
 * 	arraysEqual([1,3,[5,6]],[1,3,[5,7]]) -> false
 *
 */
function arraysEqual(arr1,arr2){

}

/*
 * A function that returns arrays representing every element removed from the array passed in
 * 
 * Params:
 * 	state: Single Dimensional Array containing only integers
 * Returns
 * 	2 Dimensional Array Containing integers
 *
 * NOTES:
 * 	changeState([1,2,3])->[[2,3],[1,3],[2,3]]
 * 	changeState([1,2,3,4])->[[2,3,4],[1,3,4],[1,2,4],[1,2,3]]
 */
function changeState(state){

}

/*
 * A function that takes in one array and determines whether it qualifies as a "Goal State"
 * 
 * Params:
 * 	state: Single Dimensional Array containing only integers
 * Returns:
 * 	Boolean
 *
 * NOTES:
 * 	The array passed in qualifies as a goal state when the sum of all the values in it equals 7
 * 	If this function seems kinda useless and trivial, it's because it's mostly a placeholder for now
 * 	isGoalState([1,1,1,1,1,1,1]) -> true
 * 	isGoalState([1,1,1,1,1,1]) -> false
 * 	isGoalState([7]) -> true
 * 	isGoalState([7,1]) -> false
 *
 */
function isGoalState(state){

}

/*
 * A function that finds the minimum number of state changes it takes to reach a "Goal State" from the starting state
 *
 * Params:
 * 	starting_state: Array
 * Returns:
 * 	Integer
 *
 * NOTES:
 * 	This is the most important function to the game level generation
 * 	It checks how quickly the starting_state can be transformed into a goal state using changeState
 *
 * 	Using the current changeState and isGoalState functions, it will find the minimum number of elements that
 * 	must be removed from an array to be left with an array where the values all add together to 7
 *
 * 	Example:
 * 		starting_state=[2,3,5,9]
 * 		changeState([2,3,5,9]) -> [ [3,5,9], [2,5,9], [2,3,9], [2,3,5] ]
 * 		choosing state = [2,3,5]
 * 		isGoalState(state) -> false
 * 		changeState([2,3,5]) -> [ [3,5], [2,5], [2,3] ]
 * 		chooing state = [2,5]
 * 		isGoalState(state) -> true
 * 		starting state reached goal state in minimum of 2 operations [2,3,5,9] -> [2,3,5] -> [2,5]
 * 		returns 2
 *
 * 		Possible for no goal state to be reachable Ex - [1,4,5,9]
 * 		Should return -1 in this case
 *
 * 		May be suboptimal solutions that must be avoided
 * 		[1,2,2,5,7] -> [2,2,5,7] -> [2,5,7] -> [5,7] -> [7]  - 4 Steps - Suboptimal
 * 		[1,2,2,5,7] -> [2,2,5,7] -> [2,5,7] -> [2,5] - 3 Steps - Optimal
 *
 * 	The simplest solution is probably writing a variant of Dijkstra's Algorithm
 * 	https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 *
 */

function distanceToGoalState(starting_state){

}


/*
 * This is just a utility function that lets you log anything into the Test_Gen.html page for testing purposes
 * *Fancy Print*
 */
function output(val){
	document.body.innerHTML+=`<p class="display">${val}</p>`
}

output("Hello")
output("World!")


