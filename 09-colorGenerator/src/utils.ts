function componentToHex(c: number): string {
<<<<<<< HEAD
    var hex = c.toString(16);
=======
    const hex = c.toString(16);
>>>>>>> 2fb8df17aede619663a70146e86e6264e12d6524
    return hex.length === 1 ? '0' + hex : hex;
  }
  
  function rgbToHex(r: number, g: number, b: number): string {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  export default rgbToHex;
  