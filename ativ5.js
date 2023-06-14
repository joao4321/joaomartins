import  React ,  {  useState  }  from  'react' ;
importar  './App.css' ;

função  Aplicativo ( )  {
  const  [ displayValue ,  setDisplayValue ]  =  useState ( '0' ) ;
  const  [ firstOperand ,  setFirstOperand ]  =  useState ( null ) ;
  const  [ operador ,  setOperator ]  =  useState ( null ) ;
  const  [ waitingForSecondOperand ,  setWaitingForSecondOperand ]  =  useState ( false ) ;

  const  handleDigitClick  =  ( dígito )  =>  {
    if  ( waitingForSecondOperand )  {
      setDisplayValue ( digit.toString ( ) ) ; _ _
      setWaitingForSecondOperand ( false ) ;
    }  senão  {
      setDisplayValue ( displayValue  ===  '0' ? digit . toString ( ) : displayValue  +  digit ) ;
    }
  } ;

  const  handleDecimalClick  =  ( )  =>  {
    if  ( waitingForSecondOperand )  {
      setDisplayValue ( '0.' ) ;
      setWaitingForSecondOperand ( false ) ;
    }  else  if  ( displayValue . indexOf ( '.' )  ===  - 1 )  {
      setDisplayValue ( displayValue  +  '.' ) ;
    }
  } ;

  const  handleOperatorClick  =  ( selectedOperator )  =>  {
    const  inputValue  =  parseFloat ( displayValue ) ;

    if  ( primeiroOperando  ===  null )  {
      setFirstOperand ( inputValue ) ;
    }  else  if  ( operador )  {
       resultado  const =  performCalculation ( ) ;
      setDisplayValue ( resultado.toString ( ) ) ; _ _
      setFirstOperand ( resultado ) ;
    }

    setWaitingForSecondOperand ( true ) ;
    setOperator ( selectOperator ) ;
  } ;

  const  performCalculation  =  ( )  =>  {
    const  inputValue  =  parseFloat ( displayValue ) ;

    if  ( operador  ===  '+' )  {
      return  firstOperand  +  inputValue ;
    }  else  if  ( operador  ===  '-' )  {
      return  firstOperand  -  inputValue ;
    }  else  if  ( operador  ===  '*' )  {
      return  firstOperand  *  inputValue ;
    }  else  if  ( operador  ===  '/' )  {
      return  firstOperand  /  inputValue ;
    }

    return  ValorEntrada ;
  } ;

  const  handleEqualClick  =  ( )  =>  {
    if  ( ! operador )  return ;

     resultado  const =  performCalculation ( ) ;
    setDisplayValue ( resultado.toString ( ) ) ; _ _
    setFirstOperand ( resultado ) ;
    setOperator ( null ) ;
    setWaitingForSecondOperand ( true ) ;
  } ;

  const  handleClearClick  =  ( )  =>  {
    setDisplayValue ( '0' ) ;
    setFirstOperand ( nulo ) ;
    setOperator ( null ) ;
    setWaitingForSecondOperand ( false ) ;
  } ;

  retornar  (
    < div  className = "calculadora" >
      < div  className = "display" > { displayValue } < / div >
      < div  className = "teclado" >
        < div  className = "linha" >
          < botão  className = "btn"  onClick = { ( )  =>  handleClearClick ( ) } > C < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleOperatorClick ( '/' ) } > / < / botão >
        < / div >
        < div  className = "linha" >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 7 ) } > 7 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 8 ) } > 8 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 9 ) } > 9 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleOperatorClick ( '*' ) } > * < / botão >
        < / div >
        < div  className = "linha" >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 4 ) } > 4 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 5 ) } > 5 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 6 ) } > 6 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleOperatorClick ( '-' ) } > - < / botão >
        < / div >
        < div  className = "linha" >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 1 ) } > 1 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 2 ) } > 2 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 3 ) } > 3 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleOperatorClick ( '+' ) } > + < / botão >
        < / div >
        < div  className = "linha" >
          < botão  className = "btn"  onClick = { ( )  =>  handleDigitClick ( 0 ) } > 0 < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleDecimalClick ( ) } > . < / botão >
          < botão  className = "btn"  onClick = { ( )  =>  handleEqualClick ( ) } > = < / botão >
        < / div >
      < / div >
    < / div >
  ) ;
}

exportar aplicativo padrão ;  
