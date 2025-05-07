function sleepIn(weekday, vacation){
  let sleep
  if ((vacation && !weekday) || (vacation && weekday) || (!vacation && !weekday)){
    sleep = true;
  }else{
    sleep = false;
  }
    return sleep
}