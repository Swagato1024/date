const isInWarranty = function (issueDate, warranntyPeriod) {
  const issuedAt = Date.parse(issuedDate);
  const currentTime = Date.now();

  const timeDiff = currentTime - issuedAt;
  const year = Math.round(timeDiff / (1000 * 60 * 60 * 24 * 365));

  return year < warranntyPeriod;
};

const issuedDate = "2019-05-11T07:36:15.864Z";

console.log(isInWarranty(issuedDate, 3));
