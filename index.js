const isName = (name) => {
  if (
    name.match(
      /([A-Z][a-z][a-z]*)  *([A-Z][a-z]*)\.?  *([A-Z][a-z][a-z][a-z]*)/g
    )
  ) {
    return true;
  } else if (name.match(/[A-Z][a-z]+ [A-Z][a-z]+/g)) {
    return true;
  } else {
    return false;
  }
};

const matchName = (name) => {
  const r1 = name.match(
    /([A-Z][a-z][a-z]*)  *([A-Z][a-z]*)\.?  *([A-Z][a-z][a-z][a-z]*)/g
  );
  const r2 = name.match(/[A-Z][a-z]+ [A-Z][a-z]+/g);

  if (r1) {
    return r1;
  } else if (r2) {
    return r2;
  } else {
    return false;
  }
};

module.exports = { isName, matchName };
