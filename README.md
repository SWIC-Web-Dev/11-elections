# Election Data Processing

## Calculate Turnout Percentages

Create a `calculateTurnoutPercentages` function in `src/utils.js`. This function should process each precinct to calculate voter turnout percentage.

```javascript
/* Should show:
[
  { name: "Downtown", turnoutPercent: 59.76 },
  { name: "University", turnoutPercent: 62.52 },
  { name: "Riverside", turnoutPercent: 47.67 },
  { name: "Suburban", turnoutPercent: 65.20 }
]
*/
```

## Find and Report Problem Precincts

The purpose of this function is to identify precincts that have reported issues. Create a `findProblematicPrecincts` function that filters the precinct list to show only those with problems.

```javascript
/* Should show precincts with non-empty issues arrays:
[
  { id: 1, name: "Downtown", issues: ["printer-jam", "long-lines"] },
  { id: 2, name: "University", issues: ["ballot-shortage"] },
  { id: 4, name: "Suburban", issues: ["long-lines"] }
]
*/
```

## Generate a District Summary

The `generateTurnoutSummary` function needs to aggregate voting data across all districts. It should calculate:

- Total registered voters
- Total voter turnout
- Average turnout percentage
- Number of precincts

```javascript
/* Should show:
{
  totalRegisteredVoters: 5835,
  totalVoterTurnout: 3474,
  averageTurnoutPercentage: 58.79,
  precinctCount: 4
}
*/
```

## Sort Precincts by Performance

Implement the `sortPrecinctsByTurnout` function to sort precincts by their voter turnout percentage (highest to lowest). Remember our lesson on declarative sorting with comparison functions:

```javascript
// Example from previous lesson:
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];
// Ascending (lowest to highest)
const sortedByPrice = products.sort((a, b) => a.price - b.price);
// Descending (highest to lowest, what we want for turnout)
const sortedByPriceDesc = products.sort((a, b) => b.price - a.price);

// Your turnout sorting should follow this pattern:
/* Should show (sorted by turnout percentage, highest first):
[
  { name: "Suburban", turnoutPercent: 65.20 },
  { name: "University", turnoutPercent: 62.52 },
  { name: "Downtown", turnoutPercent: 59.76 },
  { name: "Riverside", turnoutPercent: 47.67 }
]
*/
```

Remember:

- The comparison function should return a negative number if `b` should come before `a` (since we want highest first)
- Don't forget to calculate the percentage before sorting
- Create a new array to maintain immutability (since `sort` mutates the original array)

## Duplicate District Data

The `duplicateDistrict` function should create a complete copy of a district's data structure. We've tried using simple spread operators, but it's not working with our nested equipment data:

```javascript
/* Current problematic output:
{
  id: "D1-copy",
  name: "Copy of Central District",
  precincts: [
    {
      id: 1,
      equipment: {
        machines: [
          { id: "M1", status: "maintenance" }, // Should still be "active"!
          { id: "M2", status: "maintenance" }
        ]
      }
    }
  ]
}
*/
```

Fix this issue using `structuredClone`.

## Move Precinct Between Districts

The `movePrecinctToDistrict` function should safely move a precinct from one district to another. The function needs to:

1. Create a proper deep copy of the data
2. Remove the precinct from its source district
3. Add it to the destination district
4. Return the new state without modifying the original data

```javascript
/* After moving University precinct (id: 2) from D1 to D2:
{
  districts: [
    {
      id: "D1",
      precincts: [/* should only have Downtown precinct */]
    },
    {
      id: "D2",
      precincts: [/* should now have University precinct added */]
    }
  ]
}
*/
```

## Check Equipment Status (using `every`)

Create a function `checkPrecinctEquipment` that verifies if all voting machines in a precinct are operational (status === "active").

```javascript
/* Should show:
Input precinct: Riverside
{ 
  operational: true,
  message: "All machines active"
}

Input precinct: Downtown
{
  operational: false,
  message: "Some machines need maintenance"
}
*/
```

## Find First Late Report (using `find`)

Create a function `findFirstLateReport` that returns the first precinct that reported after 19:00.

```javascript
/* Should show:
{
  name: "University",
  timeReported: "19:22"
}
*/
```

## Check Supply Levels (using `some`)

Create a function `checkLowSupplies` that checks if any precinct across all districts is running low on supplies. The function should accept thresholds as parameters.

```javascript
/* Should show:
checkLowSupplies(electionData, { ballotThreshold: 100, penThreshold: 50 })
{
  hasLowSupplies: true,
  precincts: ["Downtown", "University"]
}
*/
```

## Verify Issue Types (using `includes`)

Create a function `hasIssueType` that checks if a specific type of issue has been reported across any precincts.

```javascript
/* Should show:
hasIssueType(electionData, "printer-jam")  // true
hasIssueType(electionData, "power-outage") // false
*/
```

Remember:

- `every` returns true only if ALL elements meet the condition
- `find` returns the first element that matches the condition
- `some` returns true if ANY element meets the condition
- `includes` checks if an array contains a specific value

## Requirements

1. All functions must be pure - no mutation of input data
2. Use `structuredClone` for deep copying complex nested objects
3. Maintain immutability when working with arrays and objects
4. Use modern JavaScript syntax (destructuring, arrow functions, etc.)

## Tips

- Remember to use `structuredClone` when working with nested objects
- Array methods like `map`, `filter`, and `reduce` create new arrays
- The spread operator (`...`) only creates shallow copies

## Bonus Challenge

Create a `generateDistrictReport` function that chains array methods to:

1. Filter districts to find those with problem precincts
2. Sort the precincts by turnout percentage
3. Map the data to a formatted report string
4. Maintain immutability throughout the chain

```javascript
/* Should show:
[
  "ALERT: Central District - 2 problem precincts",
  "- Suburban (65.20% turnout): long-lines",
  "- Downtown (59.76% turnout): printer-jam, long-lines"
]
*/
```

---

## Homework Reflection Guidelines

### AI Collaboration Process

- Which AI tools did you use? (Claude, ChatGPT, GitHub Copilot, etc.)
- What types of prompts worked best?
- How did you verify and modify AI-generated code?
- What did you learn about effectively working with AI?

### Technical Understanding

- Which array methods did you find most useful and why?
- How did you handle the challenge of maintaining immutability?
- What was your approach to working with nested data structures?
- How did your understanding of JavaScript concepts improve?

### Challenges & Solutions

- What was the most difficult function to implement? Why?
- How did you debug problems you encountered?
- Were there any concepts you had to research further?
- What would you do differently next time?

### Success Stories

- Which parts came naturally to you?
- What are you most proud of in your implementation?
- How did previous lessons help you with this assignment?
- What "aha moments" did you have while coding?

### Code Walkthrough Preparation

For your screencast presentation, select one function and discuss:

1. The problem it solves
2. Your implementation approach
3. Key JavaScript concepts used
4. How you maintained immutability

You will show your code and explain your thought process. Remember to practice speaking clearly and explaining your code step by step.

### Learning Outcomes

- What are your key takeaways from this assignment?
- How do you plan to apply what you've learned? Might it be helpful for the upcoming project?
- What topics would you like to explore further?

Remember: Be honest about your AI usage - the goal is to learn how to effectively combine AI tools with your own understanding to solve problems.
