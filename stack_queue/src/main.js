let queue = [];
let stack = [];
let queueCounter = 1;
let stackCounter = 1;

// Add to the queue
document.getElementById("addQueue").addEventListener("click", () => {
  queue.push(queueCounter++);
  console.log("Queue afte adding:", queue);
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
  stack.push(stackCounter++);
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
