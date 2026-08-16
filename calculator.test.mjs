import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import calculator from './calculator.js';

const { calculate, initialState, press } = calculator;

test('index.html doğrudan dosya olarak açılabilir', () => {
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  assert.match(html, /<script src="\.\/calculator\.js"><\/script>/);
  assert.doesNotMatch(html, /type="module"/);
});

test('iki sayıyı toplar', () => {
  assert.equal(calculate(2, '+', 3), 5);
});

test('iki sayıyı çıkarır', () => {
  assert.equal(calculate(7, '-', 4), 3);
});

test('iki sayıyı çarpar', () => {
  assert.equal(calculate(6, '×', 7), 42);
});

test('iki sayıyı böler', () => {
  assert.equal(calculate(9, '÷', 3), 3);
});

test('sıfıra bölmeyi reddeder', () => {
  assert.throws(() => calculate(8, '÷', 0), /Sıfıra bölünemez/);
});

test('tuş dizisini sonuca dönüştürür', () => {
  const result = ['2', '+', '3', '='].reduce(press, initialState);
  assert.equal(result.display, '5');
});
