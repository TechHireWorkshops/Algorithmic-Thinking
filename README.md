# Algorithms - Planning your Approach

![](https://media3.giphy.com/media/c4UFjRMfRRkXu/giphy.gif?cid=ecf05e477fe189765b6e09127b23898c9943b33d8179bcf1&rid=giphy.gif)

## What are algorithms?
Algorithms are a plan.  They're a set of rules whereby any input of a certain type produces an output meeting our conditions.

- Why do we want to get good at them?
- What do practical algorithms usually do?

## The one way to solve any algorithm
<details>
<summary>The solution</summary>
	
![](https://i.imgur.com/IlweEFM.gif)

There's no one way to solve every algorithm
</details>

### So how do we get good at them?
#### Practice
- [HackerRank](https://www.hackerrank.com)
- [LeetCode](https://https://leetcode.com/)
- [Edabit](https://edabit.com/)

#### Use them
Creating more ambitious programs necessitates better algorithms.

#### Play games
- [Zachtronics](https://store.steampowered.com/developer/zachtronics)
- [Coding Game](https://www.codingame.com/start)

#### Immerse yourself
There are tools, approaches, and guidelines that allow us to solve algorithms reliably and efficiently.

## General approach
### Understand the problem
Read the description and understand what is being asked of you.  Look at what the input and output data type.  Looking at examples can be helpful.

### Pseudo Code
Make a plan.  Think of the steps you'll take to transform your input into a useable form, the sorts, filters, etc to get the pertinent data, and the transformations to the expected output.

- Solve the problem on paper - think of what you'd do if you were solving the problem by hand
- Break the problem into small individual steps
- Try filling in steps from both the input and output.

### Code it
Transform your pseudo code to real code. Googling here can be a vital. Check along the way with console logs and debuggers to make sure you're getting what you expect. Work through your steps and test until it works.


### Refactor and Consider Edge Cases
Look to see if you can trim fat or combine steps. Consider how your code would react if supplied unusual inputs.

## Our method in action
### The problem

> There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
> 
> In each step, you will choose any 3 piles of coins (not necessarily consecutive).
> Of your choice, Alice will pick the pile with the maximum number of coins.
> You will pick the next pile with maximum number of coins.
> Your friend Bob will pick the last pile.
> Repeat until there are no more piles of coins.
> Given an array of integers piles where piles[i] is the number of coins in the ith pile.
> 
> Return the maximum number of coins which you can have.


> *Example 1:* 
> Input: piles = [2,4,1,2,7,8]
> Output: 9
> Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
> Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
> The maximum number of coins which you can have are: 7 + 2 = 9.
> On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.

> *Example 2:* 
> Input: piles = [2,4,5]
> Output: 4


> *Example 3:* 
> Input: piles = [9,8,7,6,5,1,2,3,4]
> Output: 18
 
### The solution
<details>
<summary>Version 1</summary>

```
	let maxCoins = function(piles) { 
	    let count=0
	    while(piles.length>0){
	        let max = Math.max.apply(null, piles)
	        piles.splice(piles.indexOf(max),1)
	        let second=Math.max.apply(null, piles)
	        piles.splice(piles.indexOf(second),1)
	        count+=second
	        piles.splice(piles.indexOf(Math.min.apply(null, piles)),1)
	    }
	    return count
	};
```
	
Time Limit Exceeded on LeetCode
</details>
	
<details>
<summary>Version 2</summary>

```
	let maxCoins = function(piles) { 
		let count=0
    	piles=piles.sort((a,b)=>a-b)
		while(piles.length>1){
     		count+=piles[piles.length-2]
	  		piles.splice(piles.length-2,2)
	   		piles.splice(0,1)
    	}
		return count
	};
```

Completes in 2136 ms
</details>

	
<details>
<summary>Version 3</summary>

```
	let maxCoins = function(piles) { 
	    let count=0
        piles=piles.sort((a,b)=>a-b)
	    for(let i = piles.length-2;i>=piles.length/3;i-=2){
            count+=piles[i]
        }
	    return count
	};
```

Completes in 212 ms
</details>

## Understanding data manipulation
Data manipulation is the ability to read, update, and change type of data to identify important information, sort it, and format it as needed.  Understanding the rules and tools of each data type are essential.

### Our Featured Players
Arrays and objects are by far the most important data types in algorithms

[Array properties and methods](https://www.w3schools.com/jsref/jsref_obj_array.asp)

[Object properties and methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

