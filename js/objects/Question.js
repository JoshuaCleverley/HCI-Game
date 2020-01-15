
class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  compare(answer) {
    if (answer == this.answer) {
      return true;
    } else {
      return false;
    }
  }
}
