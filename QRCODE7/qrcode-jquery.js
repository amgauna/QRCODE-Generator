<script>
$('button').click(function() 
{
  var conteudo = $('#conteudoQRCode').val();
  var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  var imagemQRCode = GoogleCharts + conteudo;
  $('#imageQRCode').attr('src', imagemQRCode);
});

function GeraQRCode()		
{
  var conteudo = document.getElementById('conteudoQRCode').value;
  var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  var imagemQRCode = GoogleCharts + conteudo;
  document.getElementById('imageQRCode').src = imagemQRCode;
 
}
</script>
