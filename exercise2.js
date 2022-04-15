let txt = "There is no exercise better for the heart than reaching down and lifting people up.by John Holmes teaches us to help one another."
 console.log(txt)

const paragragh = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
 console.log(paragragh)


let x = 6
 let y = 4
 console.log(x+y)

let num = '9.8'
 let numFloat = 10
 console.log(numFloat) // 10

let string = "phython, jargon"
 console.log(string.substr(5, 2))
 console.log(string.includes('on'))

let word = 'I hope this course is not full of  jargon'
 console.log(word.substr(33,35))
 console.log(word.endsWith('jargon'))

 // let Math = 0 - 100 
let randomNum = Math.random('20,  4, 15,9,  0, 1 100 60, 7')
 let numBtnZeroAndTen = randomNum * 100

 console.log(numBtnZeroAndTen)

//  let Math = 50 - 100
let randomnumber = Math.random('50, 77, 100, 20,  4, 15, 9,  0, 1 100 60, 71, 91, 60, 93, 59 87')

 let numBtnFiftyAndHundred = randomNum * 50 * 100

 console.log(numBtnFiftyAndHundred)
   
// let Math = 0 - 225
let random = Math.random('50, 111, 212 206 77, 100, 20,  4, 15,9,  0, 1 100 60, 7, 160, 174, 91, 225 60, 93, 59 87')
 let numBtnZeroAndTwoHundredAndTwentyFive = randomNum * 0 * 225

 console.log(numBtnZeroAndTen)

let java = 'JavaScript'
 let firstIndex = java[0]
 let forthLetter = java[4]
 let lastLetter = java[9]
 let lastIndex = java.length -1
 console.log(firstIndex)
 console.log(forthLetter)
 console.log(lastLetter)
 console.log(lastIndex)

//  writing escape characters
 console.log('1\t1\t1\t1\t1')
 console.log('2\t1\t2\t4\t8')
 console.log('3\t1\t3\t9\t27')
 console.log('4\t1\t4\t16\t64')
 console.log('5\t1\t5\t25\t125')


// let because = 'You cannot end a sentence with because because because is a conjunction'
//  let real = 'You cannot end'
 
//  console.log(real.concat(' ', 'a', ' ', 'sentence', ' ',  'with', ' ', 'is', ' ', 'a', ' ', 'conjuction'))

let because = 'You cannot end a sentence with because because because is a conjunction'

console.log(because.split('because'))
 
// LEVEL 3 
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
 console.log(love.split("love"))

let you = 'You cannot end a sentence with because because because is a conjunction'
 console.log(you.match('because'))
 
const sentence= '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 let regEx = 'I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than other jobs. Does this motivate you as a teacher!? This 30 Days Of JavaScript is also result of love of teaching'
    
 console.log(regEx.replace('sentence'))


 let cal = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
  let numbers = 5000+10000+15000

  console.log(numbers)

