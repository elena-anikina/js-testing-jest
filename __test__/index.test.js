// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код тестов/функции, запуская проверки заново

import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
