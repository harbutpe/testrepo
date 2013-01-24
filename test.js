//tereaz je to do 20

//metoda repeat vrati poc opakovani retazca
if ( !String.prototype.repeat ) String.prototype.repeat = function(poc) {
	var pom = '';
	for (var i = 0; i < poc; i++){
		pom += this.toString();
	}
	return pom;
}

var max = 20;

WScript.echo('-'.repeat(20));
for ( i = 0; i <= max; i++){
  var b = Math.pow(2, i);
  WScript.echo( '2^' + i + '=' + b ); //aj s pokecom
}
WScript.echo('-'.repeat(20));

