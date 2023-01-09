const arrayButtonsPrintPdf = Array.from(document.querySelectorAll('.print-pdf'));

arrayButtonsPrintPdf.forEach(function (button){
    button.addEventListener('click', function (){
       window.print();
   });
});