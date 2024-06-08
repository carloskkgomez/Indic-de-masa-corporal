function Reiniciar() {
  document.getElementById("nro1").value = "";
  document.getElementById("nro2").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("image").src = ""; // Limpia también la imagen
}

function operacion() {
  let n1 = parseFloat(document.getElementById("nro1").value);
  let n2 = parseFloat(document.getElementById("nro2").value);


  let resultado = n1 / (n2 * n2);
var img = document.getElementById(`image`)
  console.log(resultado);
  if (resultado <= 18.4) {
    document.getElementById('result').innerHTML = 
    "Su IMC es" + Number(resultado).toFixed(2) + ", lo que indica que su peso esta en la categoría de Bajo peso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite Acerca del índice de masa corporal para adultos. Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del bajo peso y recomendar apoyo o tratamiento. Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables, visite Peso, nutrición y actividad física saludables.";
    img.src= 'Java/flaca.jpg'
    } else if (resultado >= 18.5 && resultado <= 24.9) {
    document.getElementById('result').innerHTML = 
    "Su IMC es" + Number(resultado).toFixed(2) + ", lo que indica que su peso esta en la categoría de Peso saludable para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite Acerca del índice de masa corporal para adultos. Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables, visite Peso, nutrición y actividad física saludables."
    img.src= 'Java/hombre.jpg'
  } else if (resultado >= 25 && resultado <= 29.9) {
    document.getElementById('result').innerHTML = 
    "Su IMC es" + Number(resultado).toFixed(2) + ", lo que indica que su peso esta en la categoría de Sobrepeso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite Acerca del índice de masa corporal para adultos. Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del sobrepeso y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto. Tome esta prueba de riesgo de prediabetes de 1 minuto. Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables, visite Peso, nutrición y actividad física saludables."
    img.src= 'Java/musculoso.jpg'
  } else if (resultado >= 30) {
    document.getElementById('result').innerHTML = 
    "Su IMC es" + Number(resultado).toFixed(2) + ",lo que indica que su peso esta en la categoría de Obeso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite Acerca del índice de masa corporal para adultos. Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del sobrepeso y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto. Tome esta prueba de riesgo de prediabetes de 1 minuto. Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables, visite Peso, nutrición y actividad física saludables."
    img.src= 'Java/obeso.jpg'
  }
   
  }

