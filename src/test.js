// This code intentionally violates some ESLint rules
var foo = "hello world"; // 'var' is not recommended, prefer 'let' or 'const', also missing semicolon
function bar() {
  console.log(foo);
  for (var i = 0; i < 10; i++) {
    // 'var' again, use 'let' instead
    setTimeout(function() {
      console.log(i); // Issues with block-scoping, since 'var' is function-scoped
    }, 1000);
  }
}
bar();

let unusedVariable = 42; // Unused variable

function anotherFunction() {
  let num = 10;
  if (num > 5) {
    console.log("Greater than 5");
  } else {
    console.log("Less than 5"); // Missing semicolon here
  }
}
