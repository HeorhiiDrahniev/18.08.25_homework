let queue = [];
let stack = [];
let queueCounter = 1;
let stackCounter = 1;

function findMissing(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return null;
}

// Add to the queue
document.getElementById("addQueue").addEventListener("click", () => {
  if (queue.length === 0) {
    queueCounter = 1;
  }

  let missing = findMissing(queue);
  if (missing !== null) {
    queue.push(missing);
  } else {
    queue.push(queueCounter++);
  }

  console.log("Queue after adding:", queue);
});

// Remove from the queue
document.getElementById("removeQueue").addEventListener("click", () => {
  if (queue.length > 0) {
    queue.shift();
  } else {
    console.log("Queue is empty!");
  }
  console.log("Queue after removal:", queue);
});
// Add to the stack
document.getElementById("addStack").addEventListener("click", () => {
  if (stack.length === 0) {
    stackCounter = 1;
  }

  let missing = findMissing(stack);
  if (missing !== null) {
    stack.push(missing);
  } else {
    stack.push(stackCounter++);
  }

  console.log("Stack after adding:", stack);
});

// Remove from stack
document.getElementById("removeStack").addEventListener("click", () => {
  if (stack.length > 0) {
    stack.pop();
  } else {
    console.log("Stack is empty!");
  }
  console.log("Stack after removal:", stack);
});
