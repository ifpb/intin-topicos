console.log("Inicilizando lista de cursos do IFPB")
var cursos = ['ADS', 'INTIN', 'INTEL', 'AI', 'Civil', 'MAT', 'INTED']
for(curso in cursos) {
  document.write("<ul>");
  document.write("<li>"+cursos[curso]+ "</li>");
  document.write("</ul>");
}

var cursos = [
  {"nome" : "ADS", "area" : "Informatica"},
  {"nome" : "INTIN", "area" : "Informatica"},
  {"nome" : "Civil", "area" : "Indústria"}
];

for (curso in cursos) {
  for (attr in cursos[curso]) {
      document.write(attr + " = " +cursos[curso][attr] + "<br />")
  }
}
