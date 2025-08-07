function generateRandomGroups(interns, numberOfGroups) {
  const shuffled = [...interns].sort(() => 0.5 - Math.random());
  const groups = [];
  for (let i = 0; i < numberOfGroups; i++) {
    groups.push([]);
  }
  shuffled.forEach((intern, index) => {
    groups[index % numberOfGroups].push(intern);
  });
  return groups;
}

function generateGroups() {
  const internsInput = document.getElementById("interns").value;
  const interns = internsInput.split("\n").filter((name) => name.trim() !== "");
  const numberOfGroups = parseInt(
    document.getElementById("numberOfGroups").value
  );
  const sizeOfGroup = 2;

  if (
    Math.floor(Math.trunc(interns.length / numberOfGroups)) >= sizeOfGroup &&
    (interns.length % numberOfGroups >= sizeOfGroup ||
      interns.length % numberOfGroups === 0)
  ) {
    const generatedGroups = generateRandomGroups(interns, numberOfGroups);
    displayGroups(generatedGroups);
  } else {
    document.getElementById("result").innerHTML =
      "Not enough interns to form the required number of groups with each group having at least 2 interns.";
  }
}

function displayGroups(groups) {
  let resultHTML = "<h2>Generated Groups:</h2>";
  groups.forEach((group, index) => {
    resultHTML += `<h3>Group ${index + 1}</h3>`;
    resultHTML += '<ul class="mb-1  items-center justify p-4">';
    group.forEach((intern) => {
      resultHTML += `<li class="list-disc ">${intern}</li>`;
    });
    resultHTML += "</ul>";
  });
  document.getElementById("result").innerHTML = resultHTML;
}
