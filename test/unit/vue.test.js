import { expect, test } from 'vitest';
import { render, fireEvent, screen} from '@testing-library/vue'
import Component from '@components/Basic.vue'

test('increments value on click', async () => {
  render(Component)

  screen.getByText('Times clicked: 0')

  const button = screen.getByText('increment')

  await fireEvent.click(button)
  await fireEvent.click(button)

  screen.getByText('Times clicked: 2')
})