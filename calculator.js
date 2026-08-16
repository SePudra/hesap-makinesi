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
  if (operator === 'x^y') return Math.pow(a, b);
  throw new Error('Desteklenmeyen işlem');
}

const initialState = Object.freeze({
  display: '0',
  first: null,
  operator: null,
  waiting: false,
  error: false,
});

const operators = new Set(['+', '-', '×', '÷', 'x^y']);
const format = (value) => String(Number(Number(value).toPrecision(12)));

// Unary scientific functions applied to the current display value.
function applyFn(key, state) {
  const x = Number(state.display);
  if (!Number.isFinite(x)) throw new Error('Geçersiz sayı');

  switch (key) {
    case 'sin': return Math.sin(x * Math.PI / 180);
    case 'cos': return Math.cos(x * Math.PI / 180);
    case 'tan': return Math.tan(x * Math.PI / 180);
    case '√':
      if (x < 0) throw new Error('Negatif karekök');
      return Math.sqrt(x);
    case 'log':
      if (x <= 0) throw new Error('Geçersiz logaritma');
      return Math.log10(x);
    case 'ln':
      if (x <= 0) throw new Error('Geçersiz logaritma');
      return Math.log(x);
    case '%': return x / 100;
    case '±': return -x;
    case 'π': return Math.PI;
    case 'e': return Math.E;
    default: throw new Error('Desteklenmeyen işlem');
  }
}

function press(state, key) {
  if (key === 'C') return { ...initialState };

  if (key === '⌫') {
    if (state.waiting || state.error) return { ...initialState };
    return { ...state, display: state.display.length > 1 ? state.display.slice(0, -1) : '0' };
  }

  if (key === '±' || key === 'π' || key === 'e') {
    try {
      const display = format(applyFn(key, state));
      return { ...state, display, waiting: false, error: false };
    } catch (error) {
      return { ...initialState, display: error.message, waiting: true, error: true };
    }
  }

  if (['sin', 'cos', 'tan', '√', 'log', 'ln', '%'].includes(key)) {
    try {
      const display = format(applyFn(key, { ...state, display: state.waiting ? (state.first ?? 0) : state.display }));
      return { ...state, display, waiting: false, error: false };
    } catch (error) {
      return { ...initialState, display: error.message, waiting: true, error: true };
    }
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

if (typeof module !== 'undefined') module.exports = { calculate, initialState, press, applyFn };

if (typeof document !== 'undefined') {
  const display = document.querySelector('[data-display]');
  const keys = document.querySelector('[data-keys]');
  const sci = document.querySelector('[data-sci]');
  let state = { ...initialState };

  const render = () => {
    display.textContent = state.display;
    display.dataset.error = String(state.error);
  };

  const handle = (key) => {
    if (key === 'SCI') {
      sci.hidden = !sci.hidden;
      return;
    }
    state = press(state, key);
    render();
  };

  keys.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-key]');
    if (button) handle(button.dataset.key);
  });

  sci.addEventListener('click', (event) => {
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
    if (key === 'SCI') { event.preventDefault(); handle('SCI'); return; }
    if (/^\d$/.test(key) || ['.', '+', '-', '×', '÷', '=', 'C', '⌫'].includes(key)) {
      event.preventDefault();
      handle(key);
    }
  });

  render();
}
