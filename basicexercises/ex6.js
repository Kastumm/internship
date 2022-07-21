function getGrade(score) {
  let grade;

  if(score>25)return grade ='A';
  if(score>20)return grade ='B';
  if(score>15)return grade ='C';
  if(score>10)return grade ='D';
  if(score>5)return grade ='E';
  if(score>0)return grade ='F';
  
  // grade = "A";
  // if (score > 20 && score <= 25) {
  //   return (grade = "B");
  // }
  // if (score > 15 && score <= 20) {
  //   return (grade = "C");
  // }
  // if (score > 10 && score <= 15) {
  //   return (grade = "D");
  // }
  // if (score > 5 && score <= 10) {
  //   return (grade = "E");
  // }
  // if (score > 0 && score <= 5) {
  //   return (grade = "F");
  // }
  // return grade;
}

console.log(getGrade(11));
