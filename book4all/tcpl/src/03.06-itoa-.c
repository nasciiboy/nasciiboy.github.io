/* itoa: convierte n a caracteres en s */
/* reverse: invierte la cadena s en el mismo lugar */
#include <string.h>

void reverse( char s[] ){
  int c, i, j;
  for( i = 0, j = strlen( s ) - 1; i < j; i++, j-- ){
    c = s[ i ];
    s[ i ] = s[ j ];
    s[ j ] = c;
  }
}


void itoa( int n, char s[] ){
  int i, sign;

  if( ( sign = n ) < 0 ) /* registra el signo   */
    n = -n;              /* vuelve a n positivo */
  i = 0;
  do {   /* genera digitos en orden inverso     */
    s[ i++ ] = n % 10 + '0';  /* toma el siguiente digito */
  } while( ( n /= 10 ) > 0 ); /* borralo                  */
  if( sign < 0 )
    s[ i++ ] = '-';
  s[ i ] = '\0';
  reverse( s );
}
