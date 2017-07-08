class Utils {
  static randomNum(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
}
