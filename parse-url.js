/**
 * Usage: let a= = parseUrl(http://google.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo)
 * 
 * returns an object with the next properties:
 *  a.href = http://google.com:8080/do/any.php?a=1&b[]=a&b[]=b#foo
 *  a.hash == '#foo'
 *  a.port == '8080'
 *  a.host == 'google.com:8080'
 *  a.protocol == 'http'
 *  a.hostname == 'google.com'
 *  a.pathname == 'do/any.php'
 *  a.orogin === 'http://google.com:8080'
 *
 */

function parseUrl(url) {
  // creating an 'A' DOM element, which would contain all the required props
  // we should only assing the parametr to href property
  const a = document.createElement('a');
  a.href = url;
  return a;
}