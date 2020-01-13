import { expose } from "threads/worker";

expose({
  testFunction() {
    var child_process = require("child_process");
    console.log("child_process is set to: ", child_process);
    return "response from worker";
  }
});
