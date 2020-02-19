module.exports = function toReadable (number) {
  const WORDS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred'
  }
  if(number > 20 && number < 30) {
      return `${WORDS[20]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 30 && number < 40) {
    return `${WORDS[30]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 40 && number < 50) {
    return `${WORDS[40]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 50 && number < 60) {
    return `${WORDS[50]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 60 && number < 70) {
    return `${WORDS[60]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 70 && number < 80) {
    return `${WORDS[70]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 80 && number < 90) {
    return `${WORDS[80]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 90 && number < 100) {
    return `${WORDS[90]} ${WORDS[String(number)[1]]}`;
  }
  if(number > 100 && number < 120) {
    return `${WORDS[Number(String(number)[0])]} hundred ${WORDS[Number(String(number)[1] + String(number)[2])]}`;
  }
  if (number === 120) {
      return 'one hundred twenty';
  }
  if(number > 120) {
    if(String(number)[1]+String(number)[2] === '00') {
        return `${WORDS[Number(String(number)[0])]} hundred`;
    }
    if(String(number)[1] === '0') {
        return `${WORDS[Number(String(number)[0])]} hundred ${WORDS[Number(String(number)[2])]}`;
    }

    
    if(Number(String(number)[1]) === 1) {
        return `${WORDS[Number(String(number)[0])]} hundred ${WORDS[Number(String(number)[1] + String(number)[2])]}`;
    }
    if(Number(String(number)[2]) === 0) {
        return `${WORDS[Number(String(number)[0])]} hundred ${WORDS[Number(String(number)[1] + String(number)[2])]}`;
    }
    return `${WORDS[Number(String(number)[0])]} hundred ${WORDS[Number(String(number)[1]+'0')]} ${WORDS[Number(String(number)[2])]}`;
  }
  return WORDS[number];
}
