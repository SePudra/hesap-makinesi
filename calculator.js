function calculate(left, operator, right) {
  const a = Number(left);
  const b = Number(right);

  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new Error('Geçersiz sayı');
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '×') return a * b;
  if (operator === '÷') {
    if (b === 0) throw new Error('Sıfıra bölünemez');
    return a / b;
  }
  throw new Error('Desteklenmeyen işlem');
}

const initialState = Object.freeze({
  display: '0',
  first: null,
  operator: null,
  waiting: false,
  error: false,
});

const operators = new Set(['+', '-', '×', '÷']);
const format = (value) => String(Number(Number(value).toPrecision(12)));

function press(state, key) {
  if (key === 'C') return { ...initialState };

  if (key === '⌫') {
    if (state.waiting || state.error) return { ...initialState };
    return { ...state, display: state.display.length > 1 ? state.display.slice(0, -1) : '0' };
  }

  if (/^\d$/.test(key)) {
    const display = state.waiting || state.error || state.display === '0'
      ? key
      : state.display + key;
    return { ...state, display, waiting: false, error: false };
  }

  if (key === '.') {
    if (state.waiting || state.error) return { ...state, display: '0.', waiting: false, error: false };
    return state.display.includes('.') ? state : { ...state, display: state.display + '.' };
  }

  if (operators.has(key)) {
    try {
      const display = state.operator && !state.waiting
        ? format(calculate(state.first, state.operator, state.display))
        : state.display;
      return { display, first: Number(display), operator: key, waiting: true, error: false };
    } catch (error) {
      return { ...initialState, display: error.message, waiting: true, error: true };
    }
  }

  if (key === '=' && state.operator && !state.waiting) {
    try {
      return {
        ...initialState,
        display: format(calculate(state.first, state.operator, state.display)),
        waiting: true,
      };
    } catch (error) {
      return { ...initialState, display: error.message, waiting: true, error: true };
    }
  }

  return state;
}

if (typeof module !== 'undefined') module.exports = { calculate, initialState, press };

if (typeof document !== 'undefined') {
  const display = document.querySelector('[data-display]');
  const keys = document.querySelector('[data-keys]');
  let state = { ...initialState };

  const handle = (key) => {
    state = press(state, key);
    display.textContent = state.display;
    display.dataset.error = String(state.error);
  };

  keys.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-key]');
    if (button) handle(button.dataset.key);
  });

  const keyboardMap = {
    Enter: '=',
    '=': '=',
    Escape: 'C',
    Backspace: '⌫',
    '/': '÷',
    '*': '×',
  };

  document.addEventListener('keydown', (event) => {
    const key = keyboardMap[event.key] ?? event.key;
    if (/^\d$/.test(key) || ['.', '+', '-', '×', '÷', '=', 'C', '⌫'].includes(key)) {
      event.preventDefault();
      handle(key);
    }
  });
}
