const ftoc = function(f) {
  
  const c = (( f - 32 ) / 1.8).toFixed(1);
  return Number(c);

};

const ctof = function(c) {
  
  const f = (( c * 1.8 ) + 32).toFixed(1);
  return Number(f);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
