/*
document.Tablice.input.value=tablica;//DANE WEJ
document.Tablice.output.value=tablicaWynikowa;//DANE WYJ

Np.:

var tablica=document.Tablice.input.value.split(" ");

var tablica=new Array(100);
var wynik=new String();
document.Tablice.output.value=wynik;
document.Tablice.input.value=tablica;
*/

var divProlog="<div id=\"instrukcja\" align=\"center\">";
var divEpilog="</div>";

function zadanie0()
{
	var tresc1="<b>Zadanie 0</b><br>Spośród podanych liczb wypisz tylko te które są mniejsze do dziesięciu (możesz użyć pętli)";
	var temat=document.getElementById('instrukcja');
	document.Tablice.input.value="100 199 80 49 4 50 7 31 122 5";
	temat.outerHTML=divProlog + tresc1 + divEpilog;
	document.Tablice.output.value="";
}

function zadanie1()
{
	var tresc1="<b>Zadanie 1</b><br>Wygeneruj tablicę 100 całkowitych liczb pseudolosowych z zakresu od 0 do 100. (możesz użyć pętli)<br> \
				Następnie usuń z niej wszystkie liczby podzielne przez trzy. (nie możesz uzyć pętli)<br> \
				Wynikowa tablica nie powinna zawierać pustych komórek.";
	var temat=document.getElementById('instrukcja');
	document.Tablice.input.value=liczbylosowe();
	temat.outerHTML=divProlog + tresc1 + divEpilog;
	document.Tablice.output.value="";
}

function zadanie2()
{
	var tresc2="<b>Zadanie 2</b><br>Wygeneruj tablicę 100 całkowitych liczb pseudolosowych z zakresu od 0 do 100, a następnie posortuj ją tak,<br> \
				aby na początku znalazły się liczby parzyste posortowane rosnąco a za nimi liczby nieparzyste posortowane malejąco.<br> \
				(nie możesz użyć pętli)";
	var temat=document.getElementById('instrukcja');
	document.Tablice.input.value=liczbylosowe();
	temat.outerHTML=divProlog + tresc2 + divEpilog;
	document.Tablice.output.value="";
}

function zadanie3()
{
var tresc3="<b>Zadanie 3</b><br>Napisz skrypt, który na podstawie dwóch podanych tablic (zadeklaruj je jako tab1 oraz tab2 i wypełnij danymi testowymi według <br> \
				własnej inwencji), stworzy trzecią tablicę zawierającą jedynie elementy nie <br> \
				występujące jednocześnie w obu tablicach.(możesz użyć pętli)";
	var temat=document.getElementById('instrukcja');
	var tablica1 = liczbylosowe();
	var tablica2 = liczbylosowe();
	document.Tablice.input.value= "Tablica 1:\n" + tablica1 + "\n Tablica 2: " +tablica2 ;
	temat.outerHTML=divProlog + tresc3 + divEpilog;
	document.tab1 = tablica1;
	document.tab2 = tablica2;
	document.Tablice.output.value="";
}

function zadanie4()
{
	var tresc4="<b>Zadanie 4</b><br>Z tablicy zawierającej imiona wypisz tylko te które się powtarzają";
	var temat=document.getElementById('instrukcja');
	document.Tablice.input.value="Ania Kasia Stefan Atena Czesław Brzęczywór Stefan Marian Bożydar Innocenty Kunegunda Pafnucy Bonifacy Stefan Kajetan";
	temat.outerHTML=divProlog + tresc4 + divEpilog;
	document.Tablice.output.value="";
}

function zadanie5()
{
	var tresc5="<b>Zadanie 5</b><br>Wygeneruj tablicę 100 całkowitych liczb pseudolosowych z zakresu od 0 do 100. (możesz użyć pętli)<br>\
				Następnie każdą z wygenerowanych liczb przedstaw w postaci dwójkowej (nie używając pętli)";
	var temat=document.getElementById('instrukcja');
	temat.outerHTML=divProlog + tresc5 + divEpilog;
	document.Tablice.input.value=liczbylosowe();
	document.Tablice.output.value="";
}

function zadanie6()
{
	var tresc5="<b>Zadanie 6</b><br>Wygeneruj tablicę 100 całkowitych liczb pseudolosowych z zakresu od 0 do 100. (możesz użyć pętli)<br>\
				Następnie oblicz logarytm dziesiętny każdej z liczb. Wynik przedstaw z dokładnością do drugiego miejsca po przecinku (nie używając pętli)";
	var temat=document.getElementById('instrukcja');
	temat.outerHTML=divProlog + tresc6 + divEpilog;
	document.Tablice.input.value=liczbylosowe();
	document.Tablice.output.value="";
}


//-----------------------------------------------

function rozw0()
{
	var tablica = document.Tablice.input.value.split(" ");
	var wynik = new String();
	for(i in tablica)
	{
		if(tablica[i] <= 10) wynik += (tablica[i] + " ");
	}
	document.Tablice.output.value=wynik;
}

//-----------------------------------------------

function rozw1()
{
	var tablica = document.Tablice.input.value.split(" ");
	tablica.shift();
	var wynik = new String();
	
	wynik += tablica.filter(sprawdzCzyPodzielnePrzez3);
	document.Tablice.output.value=wynik;
}

function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function liczbylosowe(){
	var wynik = new String();
	for(var x=0; x<99; x++)
	{
		wynik += " " + rand(1,100);
	}
	return wynik;
}

function sprawdzCzyPodzielnePrzez3(liczba){
	return (liczba%3!=0);
	
}

//------------------------------------------------
function rozw2()
{
	var tablica = document.Tablice.input.value.split(" ");
	tablica.shift();
	var tablica2= new Array();
	var tablica3= new Array();
	var wynik = new String();
	
	tablica2 = tablica.filter(parzyste);
	tablica3 = tablica.filter(nieparz);
	tablica2.sort(desc);
	tablica3.sort(asc);
	wynik+=tablica3.toString();
	wynik+=tablica2.toString();
	document.Tablice.output.value=wynik;
}

function parzyste(liczba){
	return (liczba%2!=0);
}
function nieparz(liczba){
	return (liczba%2==0);
}

function desc(a,b){
	return b-a;
}
function asc(a,b){
	return a-b;
}

function rozw3()
{
		var tablica1 = document.tab1.split(' ');
	var tablica2 = document.tab2.split(' ');
	var wynik = "";
	var i = 0, j =0, tab1Lenght = tablica1.length,tab2Lenght = tablica2.length ;
	var flag = true;
	var valt1;
	for(i; i < tab1Lenght; i++){
		flag=true;
		valt1 = tablica1[i];
		for(j =0; j < tab2Lenght; j++){
			if(valt1 == tablica2[j])
				flag = false;
		}
		if(flag)
		{
			wynik += valt1+" ";
		}
	}
	document.Tablice.output.value=wynik;
}

function rozw4()
{
	var tablica = document.Tablice.input.value.split(" ");
	console.log(tablica);
	var wynik= new Array();
	var length = tablica.length;
	var i =0,j=0;
	var flag = true;
	var valt1;
	for(i; i < length; i++){
		flag=false;
		valt1 = tablica[i];
		for(j =i+1; j < length; j++){
			if(valt1 == tablica[j])
				flag=true;
		}
		if(flag)
		{
			f=true;
			for(x=0; x<wynik.length;x++)
			{
				if(wynik[x] == valt1)
					f=false;
			}
			if(f){ wynik.push(valt1); }
			
		}
	}
	document.Tablice.output.value=wynik;
}

function dec2bin(num){		
		document.Tablice.output.value+=(num >>> 0).toString(2)+" ";
}

function rozw5()
{
	var tablica = document.Tablice.input.value.split(" ");
	tablica.shift();
	console.log(tablica);
	var wynik = new Array();
	
	 tablica.forEach(dec2bin);
}
function logarythm (liczba){
	document.Tablice.output.value+=Math.log(liczba) + " ";
}
function rozw6()
{	
	var tablica = document.Tablice.input.value.split(" ");
	var wynik = new String();
	
	wynik = tablica.forEach(logarythm);
	//document.Tablice.output.value= wynik;
}
//-----------------------------------------------
