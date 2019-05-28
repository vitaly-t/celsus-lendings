export const LENDING_STATUS = Object.freeze({
  PENDING: 'PENDING',
  BORROWER_VALIDATED: 'BORROWER_VALIDATED',
  BOOK_VALIDATED: 'BOOK_VALIDATED',
  CONFIRMED: 'CONFIRMED',
});

export const OUTGOING_OPERATIONS = Object.freeze({
  VALIDATE_LEND_BOOK: 'VALIDATE_LEND_BOOK',
  VALIDATE_BOOK_BORROWER: 'VALIDATE_BOOK_BORROWER',
});

export const INCOMING_OPERATIONS = Object.freeze({
  VALIDATE_LEND_BOOK: 'VALIDATE_LEND_BOOK',
  VALIDATE_BOOK_BORROWER: 'VALIDATE_BOOK_BORROWER',
});
