let str ="eya&majbri-nesrine&souissi-fatma&naouar-aziz&bousarsar"
function FormatToArray( str ){
  return str.split("-").map(function(e) {
    let [firstname, lastname] = e.split("&");
    return {firstname, lastname};
  });
}
console.log(FormatToArray(str))