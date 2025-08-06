function generateRandomGroups(persons, numGroups) {
  // Create a copy and shuffle the items using Fisher-Yates shuffle algorithm
  const shuffledItems = [...persons];
  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
  }


  const groups = Array.from({ length: numGroups }, () => []);

  // Distribute items into groups
  for (let i = 0; i < shuffledItems.length; i++) {
    const groupIndex = i % numGroups;
    groups[groupIndex].push(shuffledItems[i]);
  }

  return groups;
}
  // output example
const interns = ["Blaise", "Igna", "persy", "cynthia", "precious", "collins", "elize", ];
const numberOfGroups = 2;
const generatedGroups = generateRandomGroups(interns, numberOfGroups);

console.log(generatedGroups);
