
    console.log("resteando form..");
function resetearForm(){
    
    console.log("resteando formxd..");
    document.addEventListener('DOMContentLoaded', function(){
        let formulario = document.getElementById('formul');
        formulario.addEventListener('submit', function() {
          formulario.reset();
        });
      });
}