import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import calculator from './calculator.js';

import { calculate, initialState, press, applyFn } from './calculator.js';

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

test('üst alma yapar', () => {
  assert.equal(calculate(2, 'x^y', 10), 1024);
});

test('karekök alır', () => {
  assert.equal(applyFn('√', { display: '9' }), 3);
});

test('negatif karekökü reddeder', () => {
  assert.throws(() => applyFn('√', { display: '-4' }), /Negatif karekök/);
});

test('sinüs derece cinsinden hesaplar', () => {
  assert.equal(applyFn('sin', { display: '90' }), 1);
});

test('logaritma alır', () => {
  assert.equal(applyFn('log', { display: '100' }), 2);
});

test('işaret değiştirir', () => {
  assert.equal(applyFn('±', { display: '5' }), -5);
});

test('pi sayısını döndürür', () => {
  assert.equal(applyFn('π', { display: '0' }), Math.PI);
});

test('sıfıra bölmeyi reddeder', () => {
  assert.throws(() => calculate(8, '÷', 0), /Sıfıra bölünemez/);
});

test('tuş dizisini sonuca dönüştürür', () => {
  const result = ['2', '+', '3', '='].reduce(press, initialState);
  assert.equal(result.display, '5');
});
