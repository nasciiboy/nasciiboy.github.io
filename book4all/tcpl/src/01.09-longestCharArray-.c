#include <stdio.h>
#define MAXLINE 1000     /* tamaño máximo de la línea de entrada */

int getline( char line[], int maxline );
void copy( char to[], char from[] );

/* imprime la línea de entrada más larga */
main(){
  int len;               /* longitud actual de la línea */
  int max;               /* máxima longitud vista hasta el momento */
  char line[MAXLINE];    /* línea de entrada actual */
  char longest[MAXLINE]; /* la línea más larga se guarda aquí */

  max = 0;
  while( ( len = getline( line, MAXLINE ) ) > 0 )
    if( len > max ){
      max = len;
      copy(longest, line);
    }
  if( max > 0 )           /* hubo una línea */
    printf( "%s", longest );
  return 0;
}

/* getline: lee una línea en s, regresa su longitud */
int getline( char s[],int lim ){
  int c, i;

  for( i=0; i < lim-1 && ( c = getchar() ) != EOF && c != '\n'; ++i )
    s[i] = c;
  if( c == '\n' ){
    s[i] = c;
    ++i;
  }
  s[i] = '\0';
  return i;
}

/* copy: copia 'from' en 'to'; supone que to es suficientemente grande */
void copy( char to[], char from[] ){
  int i;
  i = 0;
  while( ( to[i] = from[i]) != '\0' )
    ++i;
}

/*output
1234567890
12345678901234567890
1234567890123456789012345678901234567890
123456789012345678901234567890
1234567890123456789012345678901234567890
*/
