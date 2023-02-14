let stroke = prompt("Пожалуйста, введите любое число");

if (stroke.trim()) {
  
  let numeric = +stroke;

  if (typeof numeric === 'number' && !isNaN(numeric)){
    
    if (numeric % 2 === 0) {
      
      console.log("Это число чётное")
      
    } else {
      
      console.log("Это число нечётное")
      
    }
    
  } else {
    
    console.log("Упс, кажется, вы ошиблись")
    
  }
  
} else {console.log("Упс, кажется, вы ошиблись");
  
}