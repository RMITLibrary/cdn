// Make sure to include https://www.w3schools.com/lib/w3color.js

var color, name, rgb, hex, hsl, hwb, cmyk, ncol;

$('#color').on('keyup', function() {
  color = w3color($(this).val());
  
  if(color.valid) {
    name = color.toName();
    hex  = color.toHexString();
    cmyk = color.toCmykString();
    ncol = color.toNcolString();
    
    if(name == '') name = '<em>No name</em>';
    
    $('#name').html(name);
    $('#hex').html(hex);
    $('#cmyk').html(cmyk);
    $('#ncol').html(ncol);
    
    if(color.opacity == 1) {
      rgb  = color.toRgbString();
      hsl  = color.toHslString();
      hwb  = color.toHwbString();
      
      $('#rgbName').text('Rgb');
      $('#hslName').text('Hsl');
      $('#hwbName').text('Hwb');
    } else {
      rgb  = color.toRgbaString();
      hsl  = color.toHslaString();
      hwb  = color.toHwbaString();
      
      $('#rgbName').text('Rgba');
      $('#hslName').text('Hsla');
      $('#hwbName').text('Hwba');
    }
      
    $('#rgb').html(rgb);
    $('#hsl').html(hsl);
    $('#hwb').html(hwb);
      
    $('#currentColor').css('background', rgb);
    
    $('#colorError').css('display', 'none');
    $('#resultTable, #currentColor').removeClass('hidden');
    $('.colors, #currentColor').css('min-height', '220px');
  } else {
    $('#colorError').css('display', 'block');
    $('#resultTable, #currentColor').addClass('hidden');
    $('.colors, #currentColor').css('min-height', '0');
  }
  
});